import styled from "@emotion/styled";
import TodoItem from "components/TodoItem";
import { useContext } from "react";
import { TodoContext } from "components/TodoContext";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const TodoList = () => {

    const { todos, onDelete } = useContext(TodoContext);

    return (
        <Container>
            {todos?.map((todo) => (
                <TodoItem key = {todo.date.toTimeString()} todo = {todo} onDelete = {() => onDelete(todo)} />
            ))}
        </Container>
    );
}

export default TodoList;