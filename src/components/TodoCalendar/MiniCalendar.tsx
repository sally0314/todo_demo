import React, {useContext, useState} from "react";
import isToday from "dayjs/plugin/isToday";
import {CalendarSettingContext, useCalendars} from "../../contexts/CalendarSettingContext";
import dayjs from "dayjs";

dayjs.extend(isToday)
interface Props {
    readonly show: boolean;
    readonly onClose: () => void;
    readonly onClick: (dateKey: string) => void;
}

export const MiniCalendar = ({ show, onClose, onClick }: Props) => {
    const { today } = useContext(CalendarSettingContext)
    const [ workDate, setWorkDate ] = useState(today)
    const { days, dayIndexes, daysInMonth,  firstDateOfMonth, title } = useCalendars(workDate)
    const goPrev = () => {
        setWorkDate(workDate.subtract(1, 'month'))
    };

    const goNext = () => {
        setWorkDate(workDate.add(1, 'month'))
    };

    return (
        show ?
            <div
                className={'w-full p-4 ml-1/4 bg-white border border-gray-200 rounded'}
                onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                }}
            >
                <div className={'flex flex-shrink-0 items-center justify-between rounded-t-md'}>
                    <div className={'flex my-auto items-start'}>
                        <div>
                            <nav className={'mx-2'}>
                                <ul className={'inline-flex -space-x-px text-sm'}>
                                    <li className={'mx-1'} onClick={goPrev}>
                                        <svg className={'w-[13px] h-[13px] fill-[#8e8e8e]'} viewBox="-30 -30 576 512"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                                            />
                                        </svg>
                                    </li>
                                    <li className={'mx-1'} onClick={goNext}>
                                        <svg className={'w-[13px] h-[13px] fill-[#8e8e8e]'} viewBox="-30 -30 576 512"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                                            />
                                        </svg>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className={'flex ml-1 text-s text-blue-800'}>{title}</div>
                    </div>
                    <button
                        type="button"
                        className={'box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none'}
                        onClick={onClose}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className={'h-6 w-6'}>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                <div className={'flex flex-col pt-4 grid grid-cols-7 mx-auto table-auto'}>
                    {days.map((day: string, i: number) => {
                        return (
                            <div
                                key={day}
                                className={(i % 7 === 6 ? 'border-x' : 'border-l') + ' border-t border-slate-30 text-center bg-blue-100 border-b-0 text-xs'}
                            >
                                {day}
                            </div>
                        )
                    })}

                    {dayIndexes.map((x: number, i: number) => {
                        const cellDate = firstDateOfMonth.clone().add(x, 'days')
                        const cellDay = cellDate.format('D')
                        const dateKey = cellDate.format('YYYY-MM-DD')

                        return (
                            <div
                                className={(i % 7 === 6 ? 'border-x' : 'border-l') + ' border-t-0 border-b border-slate-30 pl-2 pr-2'}
                                key={`col-${i}`}
                                onClick={e => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    onClick(dateKey)
                                }}
                            >
                                <div className={'h-7 mt-2'}>
                                    <div
                                        className={((x < 0 || x >= daysInMonth) ? 'italic dark:text-neutral-300 text-[0.95rem]' : '') + ' w-5 text-center text-xs'}>
                                        {
                                            cellDate.isToday() ?
                                                (<span
                                                    className="text-red-500"
                                                >{cellDay}</span>)
                                                : <span>{cellDay}</span>
                                        }
                                    </div>
                                </div>
                            </div>)
                    })}
                </div>
            </div> : <></>
    );
};