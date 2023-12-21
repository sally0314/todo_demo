import {createContext, useState} from "react";
import dayjs, {Dayjs} from "dayjs";

export interface TodoCalendarSettings {
    currentDate?: Dayjs
    mondayFirst: boolean
}

export interface Calendar {
    workDate: Dayjs,
    title: string,
    daysInMonth: number,
    days: string[],
    dayOf1st: number,
    dayOfLast: number,
    dayIndexes: Array<number>,
    firstDayOfMonth: Dayjs,
    lastDayOfMonth: Dayjs,
}

interface Context {
    readonly settings: TodoCalendarSettings
    readonly setMondayFirst: (value: boolean) => void
    readonly calendar: Calendar
    readonly goPrev: () => void
    readonly goToday: () => void
    readonly goNext: () => void
}

const today: Dayjs = dayjs()

export const TodoCalendarContext = createContext<Context>({
    settings: {
        currentDate: today,
        mondayFirst: true,
    },
    calendar: {
        workDate: today,
        title: today.format('MMMM YYYY'),
        daysInMonth: today.daysInMonth(),
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        dayOf1st: 1,
        dayOfLast: 30,
        dayIndexes: [],
        firstDayOfMonth: dayjs(today.format('YYYY-MM-01')),
        lastDayOfMonth: dayjs(today.format(`YYYY-MM-${today.daysInMonth()}`)),
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
    readonly children: JSX.Element | JSX.Element[];
}

const buildCalendar = (settings: TodoCalendarSettings): Calendar => {
    const workDate: Dayjs = settings.currentDate || dayjs()
    const daysInMonth: number = workDate.daysInMonth()

    const firstDayOfMonth = dayjs(workDate.clone().format('YYYY-MM-01'))
    const lastDayOfMonth = dayjs(workDate.clone().format(`YYYY-MM-${daysInMonth}`))

    // const mondayFirst: boolean = settings.mondayFirst
    const title: string = workDate.clone().format('MMMM YYYY')

    // 0 (Sunday) to 6 (Saturday)
    const dayOf1stForSundayFirst: number = firstDayOfMonth.day()
    const dayOf1stForMondayFirst: number = (dayOf1stForSundayFirst + 6) % 7

    const dayOfLastForSundayFirst: number = dayjs(lastDayOfMonth).day()
    const dayOfLastForMondayFirst: number = (dayOfLastForSundayFirst + 6) % 7

    const days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    if (settings.mondayFirst) {
        days.push(`${days.shift()}`)
    }
    const dayOf1st: number = settings.mondayFirst ? dayOf1stForMondayFirst : dayOf1stForSundayFirst
    const dayOfLast: number = settings.mondayFirst ? dayOfLastForMondayFirst : dayOfLastForSundayFirst

    let previousDays: number = Array(dayOf1st).length
    const dayIndexes: Array<number> = [...Array(dayOf1st)].map(() => 0 - previousDays--)
    const remains: number = 6 - dayOfLast
    const limits: number = daysInMonth + remains
    for (let i: number = 0; i < limits; i++) {
        dayIndexes.push(i)
    }

    return {
        workDate,
        title,
        daysInMonth,
        days,
        dayOf1st,
        dayOfLast,
        dayIndexes,
        firstDayOfMonth,
        lastDayOfMonth,
    }
}

export const TodoCalendarContextProvider = ({ children }: Props) => {
    const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());
    const [mondayFirst, setMondayFirst] = useState<boolean>(true);

    const settings = {
        currentDate,
        mondayFirst,
    }

    const calendar: Calendar = buildCalendar(settings)

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
                calendar,
                setMondayFirst,
                goPrev,
                goNext,
                goToday,
            }}>
            {children}
        </TodoCalendarContext.Provider>
    );
};
