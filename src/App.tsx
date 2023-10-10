import Container from 'components/Container';
// import TodoContents from 'components/TodoContents';
import TodoModal from 'components/TodoModal';
import {TodoContextProvider} from 'components/TodoContext';
import TodoCalendar from "./components/TodoCalendar";
import {TodoCalendarContextProvider} from "./contexts/TodoCalendarContext";

function App() {
    return (
        <Container>
            <TodoContextProvider>
                {/*<TodoContents />*/}
                <TodoCalendarContextProvider>
                    <TodoCalendar/>
                </TodoCalendarContextProvider>
                <TodoModal/>
            </TodoContextProvider>
        </Container>
    );
}

export default App;
