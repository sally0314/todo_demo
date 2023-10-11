import styled from "@emotion/styled";
import TodoItem from "components/TodoItem";
import {useContext} from "react";
import {TodoContext} from "contexts/TodoContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
    readonly dateKey: string;
}

const TodoList = ({dateKey = ''}: Props) => {
    const {todos, onDelete} = useContext(TodoContext);

    // console.log('TodoList', {
    //     dateKey,
    //     todos: todos.get(dateKey) || [],
    // })

    return (
        <Container>
            {(todos.get(dateKey) || [])
                .map((todo) => (
                    <TodoItem key={todo.id} todo={todo} onDelete={() => onDelete(todo)}/>
                ))}
        </Container>
    );
}

export default TodoList;
