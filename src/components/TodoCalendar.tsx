import styled from "@emotion/styled";
import dayjs, {Dayjs} from 'dayjs';
import {TodoCalendarContext} from "../contexts/TodoCalendarContext";
import {useContext} from "react";
import Button from "./Button";
import TodoModal from "./TodoCalendar/TodoModal";
import TodoList from "./TodoList";
import {TodoContext} from "../contexts/TodoContext";

const Container = styled.div`
  width: 100%;
`

const CalendarWrap = styled.div`
  //max-width: 1200px;
`

const TitleHeader = styled.div`
  height: 3rem;
`

const Title = styled.div`
  margin-left: 2rem;
  font-size: 1.4rem;
`

const MonthSelector = styled.nav`
  margin-left: auto;
`

const DayHeader = styled.div`
  text-align: center;
  border-bottom: 0;
`
const DayCell = styled.div`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-top: 0;
`

const DayWarp = styled.div`
  height: 10rem;
  margin-top: 0.5rem;
`
const Day = styled.div`
  text-align: right;
`

const ModalWarp = styled.div`
  padding-top: 1rem;
`

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
    const startingDate = dayjs(workDate.clone().format('YYYY-MM-01'));

    const {showToDoInput, openShowToDoInput} = useContext(TodoContext);

    return (
        <Container className="">
            <CalendarWrap className="grid grid-cols-7 mx-auto table-auto">
                <div className="col-span-7 flex items-center justify-between">
                    <TitleHeader className="my-auto">
                        <Title>{title}</Title>
                    </TitleHeader>

                    <div className={'flex items-center'}>
                        <MonthSelector>
                            <ul className="inline-flex -space-x-px text-sm">
                                <li>
                                    <Button
                                        label="Today"
                                        className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        onClick={goToday}
                                    />
                                </li>
                            </ul>
                        </MonthSelector>

                        <MonthSelector className="mx-2">
                            <ul className="inline-flex -space-x-px text-sm">
                                <li className="mx-1">
                                    <Button
                                        label="Prev"
                                        className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        onClick={goPrev}
                                    />
                                </li>
                                <li>
                                    <Button
                                        label="Next"
                                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                        onClick={goNext}
                                    />
                                </li>
                            </ul>
                        </MonthSelector>
                    </div>
                </div>

                <DayHeader className="border-t border-l border-slate-300">Mon</DayHeader>
                <DayHeader className="border-t border-l border-slate-300">Tue</DayHeader>
                <DayHeader className="border-t border-l border-slate-300">Wed</DayHeader>
                <DayHeader className="border-t border-l border-slate-300">Thu</DayHeader>
                <DayHeader className="border-t border-l border-slate-300">Fri</DayHeader>
                <DayHeader className="border-t border-l border-slate-300">Sat</DayHeader>
                <DayHeader className="border-t border-x border-slate-300">Sun</DayHeader>

                {dayIndexes.map((x: number, i: number) => {
                    const cellDate = startingDate.clone().add(x, 'days')
                    const cellDay = cellDate.format('D')
                    const dateKey = cellDate.format('YYYY-MM-DD')
                    return (
                        <DayCell
                            className={i % 7 === 6 ? 'border-t border-b border-x border-slate-300' : 'border-t border-b border-l border-slate-300'}
                            key={`col-${i}`}
                            onClick={() => !showToDoInput && openShowToDoInput(dateKey)}
                        >
                            <DayWarp>
                                <Day className={'w-100'}>
                                    {cellDay}
                                </Day>
                                <TodoList dateKey={dateKey}/>
                            </DayWarp>
                            <ModalWarp>
                                {dateKey !== '' && <TodoModal dateKey={dateKey}/>}
                            </ModalWarp>
                        </DayCell>)
                })}
            </CalendarWrap>
        </Container>
    );
}

export default TodoCalendar
