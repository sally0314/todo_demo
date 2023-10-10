import Container from 'components/Container';
// import TodoContents from 'components/TodoContents';
import TodoModal from 'components/TodoModal';
import { TodoContextProvider } from 'components/TodoContext';
import TodoCalendar from "./components/TodoCalendar";

function App() {
    return (
        <Container>
            <TodoContextProvider>
                {/*<TodoContents />*/}
                <TodoCalendar/>
                <TodoModal />
            </TodoContextProvider>
        </Container>
    );
}

export default App;
