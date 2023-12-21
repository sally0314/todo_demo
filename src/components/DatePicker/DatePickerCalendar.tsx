import dayjs, {Dayjs} from 'dayjs'
import isToday from 'dayjs/plugin/isToday'
import {useContext} from 'react'
import {TodoCalendarContext} from '../../contexts/TodoCalendarContext'
import ChevronLeftIcon from '../../icons/ChevronLeftIcon'
import ChevronRightIcon from '../../icons/ChevronRightIcon'

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
                                    <li className={'mx-1 cursor-pointer'} onClick={goPrev}>
                                        <ChevronLeftIcon/>
                                    </li>
                                    <li className={'mx-1 cursor-pointer'} onClick={goNext}>
                                        <ChevronRightIcon/>
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
                                                className="w-7 inline-block whitespace-nowrap rounded-full bg-primary-100 py-[0.3rem] px-[0.3em] text-center align-baseline leading-none cursor-pointer"
                                            >{cellDay}</span>)
                                            : <span
                                                className={'w-7 inline-block whitespace-nowrap rounded-full hover:bg-primary-100 py-[0.3rem] px-[0.3em] text-center align-baseline leading-none cursor-pointer'}>{cellDay}</span>
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
