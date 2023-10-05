import Container from 'components/Container';
import TodoContents from 'components/TodoContents';
import TodoModal from 'components/TodoModal';
import { TodoContextProvider } from 'components/TodoContext';

function App() {
    return (
        <Container>
            <TodoContextProvider>
                <TodoContents />
                <TodoModal />
            </TodoContextProvider>
        </Container>
    );
}

export default App;