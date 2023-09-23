import Container from 'components/Container';
import Title from 'components/Title';
import TodoContents from 'components/TodoContents';

function App() {
    return (
        <Container>
            <Title label = "Sally's Todo List" />
            <TodoContents />
        </Container>  
    );
}

export default App;