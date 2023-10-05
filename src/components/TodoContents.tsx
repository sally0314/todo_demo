import styled from "@emotion/styled";
import TodoList from 'components/TodoList';
import { Title } from "components/Title";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    padding: 32px;
    border-radius: 8px;
`;

const TodoContents = () => {
    return (
        <Container>
            <Title label = "Todo List" />
            <TodoList />
        </Container>
    );
}

export default TodoContents;