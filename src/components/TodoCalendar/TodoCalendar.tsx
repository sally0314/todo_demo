import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday'
import {useContext, useState} from "react";
import TodoModal from "./TodoModal";
import TodoList from "../TodoList";
import TodoInput from "../TodoInput";
import TodoConfig from "./TodoConfig";
import {CalendarSettingContext, useCalendars} from "../../contexts/CalendarSettingContext";
import {TodoContext} from "../../contexts/TodoContext";

dayjs.extend(isToday)

const TodoCalendar = () => {
    const { today } = useContext(CalendarSettingContext)
    const [ workDate, setWorkDate ] = useState(today)
    const { days, dayIndexes, daysInMonth,  firstDateOfMonth, title } = useCalendars(workDate)
    const { modalKeyMap, openModal } = useContext(TodoContext);

    const goPrev = () => {
        setWorkDate(workDate.subtract(1, 'month'))
    };

    const goNext = () => {
        setWorkDate(workDate.add(1, 'month'))
    };

    const goToday = () => {
        setWorkDate(dayjs())
    };

    return (
        <div className={'w-full'}>
            <div className={'grid grid-cols-7 mx-auto table-auto min-w-[1200px]'}>
                <div className={'col-span-7 flex justify-between h-12'}>
                    <div className={'flex my-auto items-start'}>
                        <div>
                            <nav className={'mx-2'}>
                                <ul className={'inline-flex -space-x-px text-sm'}>
                                    <li className={'mx-1'} onClick={goPrev}>
                                        <svg className={'w-[23px] h-[23px] fill-[#8e8e8e]'} viewBox="-30 -30 576 512"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                                            />
                                        </svg>
                                    </li>
                                    <li className={'mx-1'} onClick={goNext}>
                                        <svg className={'w-[23px] h-[23px] fill-[#8e8e8e]'} viewBox="-30 -30 576 512"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                            />
                                        </svg>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className={'flex ml-1 text-xl'}>{title}</div>
                    </div>

                    <div className={'flex items-center'}>
                        <nav>
                            <ul className={'inline-flex -space-x-px text-sm'}>
                                <li>
                                    <TodoConfig type={'button'} className={'class="block h-9 px-6 py-1"'}/>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className={'inline-block rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-800 dark:hover:bg-opacity-10'}
                                        onClick={goToday}>
                                        Today
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                {days.map((day: string, i: number) => {
                    return (
                        <div
                            key={day}
                            className={(i % 7 === 6 ? 'border-x' : 'border-l') + ' border-t border-slate-300 text-center border-b-0'}
                        >
                            {day}
                        </div>
                    )
                })}

                {dayIndexes.map((x: number, i: number) => {
                    const cellDate = firstDateOfMonth.clone().add(x, 'days')
                    const cellDay = cellDate.format('D') === `1` ? cellDate.format('MMM D') : cellDate.format('D')
                    const dateKey = cellDate.format('YYYY-MM-DD')

                    return (
                        <div
                            className={(i % 7 === 6 ? 'border-x' : 'border-l') + ' border-t-0 border-b border-slate-300 pl-2 pr-2'}
                            key={`col-${i}`}
                            onClick={e => {
                                e.preventDefault()
                                e.stopPropagation()
                                return openModal({ inputDateKey: dateKey })
                            }}
                        >
                            <div className={'h-40 mt-2'}>
                                <div
                                    className={((x < 0 || x >= daysInMonth) ? 'italic dark:text-neutral-400 text-[0.95rem]' : '') + ' w-100 text-right'}>
                                    {
                                        cellDate.isToday() ?
                                            (<span
                                                className="px-4 inline-block whitespace-nowrap rounded-full bg-primary-100 py-[0.5rem] px-[0.65em] text-center align-baseline text-[1.25rem] font-bold leading-none text-primary-700"
                                            >{cellDay}</span>)
                                            : <span>{cellDay}</span>
                                    }
                                </div>
                                <TodoList dateKey={dateKey}/>
                            </div>
                            <div className={'pt-4'}>
                                {<TodoModal show={dateKey !== '' && modalKeyMap.inputDateKey === dateKey}>
                                    <TodoInput dateKey={dateKey}/>
                                </TodoModal>}
                            </div>
                        </div>)
                })}
            </div>
            <TodoConfig type={'modal'}/>
        </div>
    );
}

export default TodoCalendar
