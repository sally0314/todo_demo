import dayjs, {Dayjs} from 'dayjs';
import {TodoCalendarContext} from "../contexts/TodoCalendarContext";
import {useContext} from "react";
import Button from "./Button";
import TodoModal from "./TodoCalendar/TodoModal";
import TodoModalButton from "./TodoCalendar/TodoModalButton";
import TodoList from "./TodoList";

interface Props {
    readonly label: string
}

const DayHeader = ({ label }: Props) => {
    return (
        <th className="border border-slate-300 w-160 h-48">{label}</th>
    );
};

const TodoCalendar = () => {
    const {settings, goPrev, goToday, goNext} = useContext(TodoCalendarContext)
    const workDate: Dayjs = settings.currentDate || dayjs()
    const title: string = workDate.clone().format('MMMM YYYY')
    const daysInMonth: number = workDate.daysInMonth()
    // 0 (Sunday) to 6 (Saturday)
    const dayOf1stForSundayFirst: number = dayjs(workDate.clone().format('YYYY-MM-01')).day()
    const dayOf1stForMondayFirst: number = (dayOf1stForSundayFirst + 6) % 7

    const dayOfLastForSundayFirst: number = dayjs(workDate.clone().format(`YYYY-MM-${daysInMonth}`)).day()
    const dayOfLastForMondayFirst: number = (dayOfLastForSundayFirst + 6) % 7

    let previousDays = Array(dayOf1stForMondayFirst).length

    const dayIndexes: Array<number> = [...Array(dayOf1stForMondayFirst)].map(() => 0 - previousDays--)
    const remains = 6 - dayOfLastForMondayFirst
    const limits = daysInMonth + remains
    for (let i: number = 0; i < limits; i++) {
        dayIndexes.push(i)
    }

    const chunks: Array<number[]> = Array(Math.ceil(dayIndexes.length / 7)).fill([])
    for (let i: number = 0; i < chunks.length; i++) {
        chunks[i] = dayIndexes.splice(0, 7)
    }

    const startingDate = dayjs(workDate.clone().format('YYYY-MM-01'));

    return (
        <div className="flex items-center justify-center w-full">
            <table className="table-auto">
                <thead>
                    <tr>
                        <th
                            className="items-center justify-between h-48 pb-20"
                            colSpan={5}
                        >
                            <div className="ml-32">{title}</div>
                        </th>
                        <th
                            className="items-center justify-between h-48 pb-20"
                            colSpan={2}
                        >
                            <nav className="ml-auto">
                                <ul className="inline-flex -space-x-px text-sm">
                                    <li>
                                        <Button
                                            label="Today"
                                            className="flex items-center justify-center px-16 py-7 mx-5 rounded-md bg-blue-500/10 text-gray-500 hover:text-white hover:bg-blue-500/100"
                                            onClick={goToday}
                                        />
                                    </li>
                                    <li>
                                        <Button
                                            label=" < "
                                            className="flex items-center justify-center px-16 py-7 mx-5 rounded-md bg-blue-500/10 text-gray-500 hover:text-white hover:bg-blue-500/100"
                                            onClick={goPrev}
                                        />
                                    </li>
                                    <li>
                                        <Button
                                            label=" > "
                                            className="flex items-center justify-center px-16 py-7 mx-5 rounded-md bg-blue-500/10 text-gray-500 hover:text-white hover:bg-blue-500/100"
                                            onClick={goNext}
                                        />
                                    </li>
                                </ul>
                            </nav>
                        </th>
                    </tr>
                    <tr>
                        <DayHeader label="Mon" />
                        <DayHeader label="Tue" />
                        <DayHeader label="Wed" />
                        <DayHeader label="Thu" />
                        <DayHeader label="Fri" />
                        <DayHeader label="Sat" />
                        <DayHeader label="Sun" />
                    </tr>
                </thead>
                <tbody>
                {chunks.map((row: number[], i: number) => {
                    return (
                        <tr key={`row-${i}`}>
                            {row.map((x: number, j: number) => {
                                const cellDate = startingDate.clone().add(x, 'days')
                                const cellDay = cellDate.format('DD')
                                const dateKey = cellDate.format('YYYY-MM-DD')
                                return (
                                    <td className="border border-slate-300 w-160 h-160" key={`col-${j}`}>
                                        <div className="relative w-160 h-160 mt-8">
                                            <div className="absolute right-8">
                                                {cellDay}
                                            </div>
                                            <TodoList dateKey={dateKey}/>
                                            {<TodoModalButton dateKey={dateKey}/>}
                                        </div>
                                        <div className="pt-16">
                                            {dateKey !== '' && <TodoModal dateKey={dateKey}/>}
                                        </div>
                                    </td>)
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}

export default TodoCalendar
