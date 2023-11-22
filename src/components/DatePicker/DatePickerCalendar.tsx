import dayjs, {Dayjs} from 'dayjs'
import isToday from 'dayjs/plugin/isToday'
import {useContext} from 'react'
import {TodoCalendarContext} from '../../contexts/TodoCalendarContext'

dayjs.extend(isToday)

interface Props {
    readonly value: Dayjs,
    readonly onChange: (dayjs: Dayjs) => void
}

const DatePickerCalendar = ({ value, onChange }: Props) => {
    const { calendar, goPrev, goToday, goNext } = useContext(TodoCalendarContext)

    return (
        <div className={'w-full'}>
            <div className={'grid grid-cols-7 mx-auto'}>
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
                        <div className={'flex ml-1'}>{calendar.title}</div>
                    </div>

                    <div className={'flex items-center'}>
                        <nav>
                            <ul className={'inline-flex -space-x-px text-sm'}>
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

                {calendar.days.map((day: string) => {
                    return (
                        <div
                            key={day}
                            className={'w-8 border-t border-slate-300 text-center border-b-0'}
                        >
                            {day}
                        </div>
                    )
                })}

                {calendar.dayIndexes.map((x: number, i: number) => {
                    const cellDate = calendar.firstDayOfMonth.clone().add(x, 'days')
                    const cellDay = cellDate.format('D') === `1` ? cellDate.format('D') : cellDate.format('D')

                    return (
                        <div
                            className={(i % 7 === 6 ? '' : '') + ' border-t-0 border-b border-slate-300 pl-2 pr-2'}
                            key={`col-${i}`}
                        >
                            <div className={'h-12 flex items-center justify-center'}>
                                <div
                                    className={' w-100 text-right'}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        onChange(cellDate)
                                    }}
                                >
                                    {
                                        cellDate.diff(value) === 0 ?
                                            (<span
                                                className="w-7 inline-block whitespace-nowrap rounded-full bg-primary-100 py-[0.3rem] px-[0.3em] text-center align-baseline leading-none"
                                            >{cellDay}</span>)
                                            : <span
                                                className={'w-7 inline-block whitespace-nowrap rounded-full hover:bg-primary-100 py-[0.3rem] px-[0.3em] text-center align-baseline leading-none'}>{cellDay}</span>
                                    }
                                </div>
                            </div>
                        </div>)
                })}
            </div>
        </div>
    );
}

export default DatePickerCalendar
