import {TodoContextProvider} from 'contexts/TodoContext';
import TodoCalendar from "./components/TodoCalendar/TodoCalendar";
import {CalendarSettingContextProvider} from "./contexts/CalendarSettingContext";

function App() {
    return (
        <div className={'px-44 py-24 items-center justify-center'}>
            <TodoContextProvider>
                <CalendarSettingContextProvider>
                    <TodoCalendar/>
                </CalendarSettingContextProvider>
            </TodoContextProvider>
        </div>
    );
}

export default App;
