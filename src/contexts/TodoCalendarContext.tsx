import {createContext, useState} from "react";
import dayjs, {Dayjs} from "dayjs";

export interface TodoCalendarSettings {
    currentDate?: Dayjs
    mondayFirst: boolean
}

interface Context {
    readonly settings: TodoCalendarSettings
    readonly setMondayFirst: (value: boolean) => void
    readonly goPrev: () => void
    readonly goToday: () => void
    readonly goNext: () => void
}

export const TodoCalendarContext = createContext<Context>({
    settings: {
        currentDate: dayjs(),
        mondayFirst: true,
    },
    /* eslint-disable @typescript-eslint/no-empty-function */
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    setMondayFirst: (value: boolean): void => {

    },
    goPrev: (): void => {
    },
    goToday: (): void => {
    },
    goNext: (): void => {
    },
    /* eslint-enable @typescript-eslint/no-empty-function */
});

interface Props {
    readonly children: React.JSX.Element | React.JSX.Element[];
}


export const TodoCalendarContextProvider = ({children}: Props) => {
    const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());
    const [mondayFirst, setMondayFirst] = useState<boolean>(true);

    const settings = {
        currentDate,
        mondayFirst,
    }

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
                settings,
                setMondayFirst,
                goPrev,
                goNext,
                goToday,
            }}>
            {children}
        </TodoCalendarContext.Provider>
    );
};
