import styled from "@emotion/styled";
import TodoItem from "components/TodoItem";
import {useContext} from "react";
import {TodoContext} from "contexts/TodoContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemWrap = styled.div`
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
`

interface Props {
    readonly dateKey: string;
}

const TodoList = ({dateKey = ''}: Props) => {
    const {todos, onDelete} = useContext(TodoContext);

    return (
        <Container>
            {(todos.get(dateKey) || [])
                .map((todo) => (
                    <ItemWrap key={todo.id}>
                        <TodoItem todo={todo} onDelete={() => onDelete(todo)}/>
                    </ItemWrap>
                ))}
        </Container>
    );
}

export default TodoList;
