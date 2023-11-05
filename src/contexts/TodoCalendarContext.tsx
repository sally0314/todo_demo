import {createContext, useState} from "react";
import dayjs, {Dayjs} from "dayjs";

export interface TodoCalendarSettings {
    currentDate?: Dayjs
    mondayFirst: boolean
}

interface Context {
    readonly settings: TodoCalendarSettings;
    readonly goPrev: () => void;
    readonly goToday: () => void;
    readonly goNext: () => void;
}

class SimpleTodoCalendarSettings implements TodoCalendarSettings {
    currentDate?: Dayjs
    mondayFirst: boolean

    constructor(currentDate?: Dayjs, mondayFirst: boolean = true) {
        this.currentDate = currentDate
        this.mondayFirst = mondayFirst
    }
}

export const TodoCalendarContext = createContext<Context>({
    settings: new SimpleTodoCalendarSettings(),
    /* eslint-disable @typescript-eslint/no-empty-function */
    goPrev: (): void => {
    },
    goToday: (): void => {
    },
    goNext: (): void => {
    },
    /* eslint-enable @typescript-eslint/no-empty-function */
});

interface Props {
    readonly children: JSX.Element | JSX.Element[];
}


export const TodoCalendarContextProvider = ({children}: Props) => {
    const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());

    const goPrev = () => {
        const newDate = dayjs(currentDate).subtract(1, 'month')
        setCurrentDate(newDate)
    };

    const goNext = () => {
        const newDate = dayjs(currentDate).add(1, 'month')
        setCurrentDate(newDate)
    };

    const goToday = () => {
        const newDate = dayjs()
        setCurrentDate(newDate)
    };

    return (
        <TodoCalendarContext.Provider
            value={{
                settings: new SimpleTodoCalendarSettings(currentDate),
                goPrev,
                goNext,
                goToday,
            }}>
            {children}
        </TodoCalendarContext.Provider>
    );
};
