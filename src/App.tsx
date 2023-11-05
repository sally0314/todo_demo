import {TodoContextProvider} from 'contexts/TodoContext';
import TodoCalendar from "./components/TodoCalendar";
import {TodoCalendarContextProvider} from "./contexts/TodoCalendarContext";

function App() {
    return (
        <div className={'px-44 py-24 items-center justify-center'}>
            <TodoContextProvider>
                <TodoCalendarContextProvider>
                        <TodoCalendar/>
                </TodoCalendarContextProvider>
            </TodoContextProvider>
        </div>
    );
}

export default App;
