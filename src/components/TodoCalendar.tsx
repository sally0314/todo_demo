import styled from "@emotion/styled";
import dayjs, {Dayjs} from 'dayjs';


const Container = styled.div`
  width: 100%;
`

const TitleHeader = styled.th`
  height: 3rem;
`

const Title = styled.div`
  margin-left: 2rem;
`

const MonthSelector = styled.nav`
  margin-left: auto;
`

const DayHeader = styled.th`
  width: 10rem;
`
const Day = styled.td`
  width: 10rem;
  height: 10rem;
  padding-left: 1rem;
`

const TodoCalendar = () => {
    const workDate: Dayjs = dayjs()
    const title: string = workDate.clone().format('MMMM YYYY')
    const daysInMonth: number = workDate.daysInMonth()
    // 0 (Sunday) to 6 (Saturday)
    const dayOf1stForSundayFirst: number = dayjs(workDate.clone().format('YYYY-MM-01')).day()
    const dayOf1stForMondayFirst: number = (dayOf1stForSundayFirst + 6) % 7

    const days: Array<number> = [...Array(dayOf1stForMondayFirst).fill(0)]
    for (let i: number = 1; i <= daysInMonth; i++) {
        days.push(i)
    }
    const chunks: Array<number[]> = Array(Math.ceil(days.length / 7)).fill([])
    for (let i: number = 0; i < chunks.length; i++) {
        chunks[i] = days.splice(0, 7)
    }
    console.log(chunks)
    return (
        <Container className="flex items-center justify-center">
            <table className="table-auto border-collapse border border-slate-400">
                <thead>
                <tr>
                    <TitleHeader
                        className="flex items-center justify-between"
                    >
                        <Title>{title}</Title>
                    </TitleHeader>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>
                        <MonthSelector>
                            <ul className="inline-flex -space-x-px text-sm">
                                <li>
                                    <a href="#"
                                       className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        Previous
                                    </a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        Next
                                    </a>
                                </li>
                            </ul>
                        </MonthSelector>
                    </th>
                </tr>
                <tr>
                    <DayHeader className="border border-slate-300">Mon</DayHeader>
                    <DayHeader className="border border-slate-300">Tue</DayHeader>
                    <DayHeader className="border border-slate-300">Wed</DayHeader>
                    <DayHeader className="border border-slate-300">Thu</DayHeader>
                    <DayHeader className="border border-slate-300">Fri</DayHeader>
                    <DayHeader className="border border-slate-300">Sat</DayHeader>
                    <DayHeader className="border border-slate-300">Sun</DayHeader>
                </tr>
                </thead>
                <tbody>
                {chunks.map((row: number[], i: number) => {
                    return (
                        <tr key={`row-${i}`}>
                            {row.map((x: number, j: number) => {
                                return (
                                    <Day className="border border-slate-300" key={`col-${j}`}>
                                        {x === 0 ? '' : x}
                                    </Day>)
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </Container>
    );
}

export default TodoCalendar
