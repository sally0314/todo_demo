import {createContext, useContext, useEffect, useState} from "react";
import dayjs, {Dayjs} from "dayjs";


export interface DayOption {
    text: string;
    value: string;
}

/**
 * 달력 시작 요일 options
 */
export const StartOfDayOptions: DayOption[] = [
    { text: "Sunday", value: '0' },
    { text: "Monday", value: '1' },
];

// Calendar Setting
export interface CalendarSettingProps {
    startDayOption: DayOption
    setStartDayOption: React.Dispatch<React.SetStateAction<DayOption>>
    today: Dayjs
}

// Calendar Setting Context
export const CalendarSettingContext = createContext({} as CalendarSettingProps);

interface Props {
    readonly children: React.JSX.Element | React.JSX.Element[];
}

export const CalendarSettingContextProvider = ({children}: Props) => {
    const [startDayOption, setStartDayOption] = useState<DayOption>(StartOfDayOptions[1]);
    const today = dayjs();

    return (
        <CalendarSettingContext.Provider
            value={{
                startDayOption,
                setStartDayOption,
                today
            }}>
            {children}
        </CalendarSettingContext.Provider>
    );
};

export interface CalendarProps {
    firstDateOfMonth: Dayjs;
    days: string[];
    dayIndexes: number[];
    daysInMonth: number;
    title: string;
}

export const useCalendars = (
    currentDate?: Dayjs
): CalendarProps => {
    const { startDayOption, today } = useContext(CalendarSettingContext)
    const [calendarProps, setCalendarProps] = useState<CalendarProps>({
        firstDateOfMonth: dayjs(today.format('YYYY-MM-01')),
        days: [],
        dayIndexes: [],
        title: "",
        daysInMonth: 0
    } as CalendarProps)

    function changeProps(): CalendarProps {
        const workDate= currentDate || today
        const mondayFirst: boolean = startDayOption.value === '1'
        const title = workDate.clone().format('MMMM YYYY')
        const daysInMonth: number = workDate.daysInMonth()
        const dayOf1stForSundayFirst: number = dayjs(today.format('YYYY-MM-01')).day()
        const dayOf1stForMondayFirst: number = (dayOf1stForSundayFirst + 6) % 7

        const dayOfLastForSundayFirst: number = dayjs(today.format(`YYYY-MM-${daysInMonth}`)).day()
        const dayOfLastForMondayFirst: number = (dayOfLastForSundayFirst + 6) % 7

        const days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

        if (mondayFirst) {
            days.push(`${days.shift()}`)
        }
        const dayOf1st: number = mondayFirst ? dayOf1stForMondayFirst : dayOf1stForSundayFirst
        const dayOfLast: number = mondayFirst ? dayOfLastForMondayFirst : dayOfLastForSundayFirst

        let previousDays:number = Array(dayOf1st).length
        const dayIndexes: Array<number> = [...Array(dayOf1st)].map(() => 0 - previousDays--)
        const remains: number = 6 - dayOfLast
        const limits: number = daysInMonth + remains
        for (let i: number = 0; i < limits; i++) {
            dayIndexes.push(i)
        }

        return {
            firstDateOfMonth: dayjs(workDate.format('YYYY-MM-01')),
            days: days,
            dayIndexes: dayIndexes,
            daysInMonth: daysInMonth,
            title: title
        } as CalendarProps
    }

    useEffect(() => {
        setCalendarProps(changeProps())
    }, [startDayOption, currentDate]);

    return calendarProps;
};