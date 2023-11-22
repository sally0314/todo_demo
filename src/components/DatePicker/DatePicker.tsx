import {Dayjs} from 'dayjs'
import React from 'react'
import {TEDropdown, TEDropdownMenu, TEDropdownToggle, TERipple,} from 'tw-elements-react'
import DatePickerCalendar from './DatePickerCalendar'

interface Props {
    readonly value: Dayjs
    readonly onChange: (day: Dayjs) => void
}


const DatePicker = ({ value, onChange }: Props): JSX.Element => {
    const date = value.format('YYYY-MM-DD')

    return (
        <TEDropdown className="inline-block">
            <TERipple rippleColor="light">
                <TEDropdownToggle
                    className="text-base my-2 p-2 min-w-[100px] w-[400px] border text-left"
                >
                    {date}
                </TEDropdownToggle>
            </TERipple>
            <TEDropdownMenu>
                <div className={'w-full px-2 py-2'}>
                    <DatePickerCalendar
                        value={value}
                        onChange={day => onChange(day)}
                    />
                </div>
            </TEDropdownMenu>
        </TEDropdown>
    )
}

export default DatePicker
