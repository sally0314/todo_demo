import Container from 'components/Container';
import {TodoContextProvider} from 'contexts/TodoContext';
import TodoCalendar from "./components/TodoCalendar";
import {TodoCalendarContextProvider} from "./contexts/TodoCalendarContext";

function App() {
    return (
        <Container>
            <TodoContextProvider>
                <TodoCalendarContextProvider>
                    <TodoCalendar/>
                </TodoCalendarContextProvider>
            </TodoContextProvider>
        </Container>
    );
}

export default App;
