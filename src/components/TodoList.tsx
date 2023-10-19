import styled from "@emotion/styled";
import TodoItem from "components/TodoItem";
import {useContext} from "react";
import {TodoContext} from "contexts/TodoContext";
import TodoShow from "./TodoShow";
import TodoModal from "./TodoCalendar/TodoModal";

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
    const limit = 5
    const {todos, modalKeyMap, openModal} = useContext(TodoContext);
    const items = todos.get(dateKey) || []
    const remains = items.length > limit ? items.slice(limit, items.length) : []
    const hasMore = remains.length > 0
    return (
        <Container>
            {([...items].splice(0, 5))
                .map((todo) => (
                    <ItemWrap key={todo.id}>
                        <TodoItem todo={todo} onClick={
                            () => (openModal({showTodoId: todo.id}))}/>
                        {
                            <TodoModal show={modalKeyMap.showTodoId === todo.id}>
                                <TodoShow todo={todo}/>
                            </TodoModal>
                        }
                    </ItemWrap>
                ))}
            {
                hasMore &&
                <div>{`${remains.length} more`}</div>
            }
        </Container>
    );
}

export default TodoList;
