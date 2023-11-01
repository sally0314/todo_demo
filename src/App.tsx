//import Container from 'components/Container';
import {TodoContextProvider} from 'contexts/TodoContext';
import TodoCalendar from "./components/TodoCalendar";
import {TodoCalendarContextProvider} from "./contexts/TodoCalendarContext";

function App() {
    return (
        <div className={'flex flex-col justify-center align-middle h-screen mx-auto w-9/12'}>
            <TodoContextProvider>
                <TodoCalendarContextProvider>
                    <TodoCalendar/>
                </TodoCalendarContextProvider>
            </TodoContextProvider>
        </div>
    );
}

export default App;
