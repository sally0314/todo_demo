import styled from "@emotion/styled";
import Button from 'components/Button';
import React, {useContext} from 'react';
import {Todo, TodoContext} from "contexts/TodoContext";
import {Title} from "components/Title";

const Container = styled.div`

`;

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

interface Props {
    readonly todo: Todo;
    readonly onClose?: () => void;
}

const TodoShow = ({todo, onClose}: Props) => {
    const {onDelete, closeModal} = useContext(TodoContext);

    const deleteToDo = (todo: Todo) => {
        onDelete(todo);
        closeModal();
    }

    return (
        <Container>
            <Title label={`할 일 (${todo.date.format('YYYY-MM-DD')})`}/>
            <Body>
                <div>
                    {`${todo.title}`}
                </div>
                <div>
                    {`${todo.description}`}
                </div>
                <div className="flex items-center justify-center">
                    <Button label="삭제" color="#98a7ff" onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        return deleteToDo(todo)
                    }}/>
                    {onClose && <Button label="닫기" onClick={e => {
                        e.preventDefault()
                        e.stopPropagation()
                        return onClose()
                    }} className={'ml-2'}/>}
                </div>
            </Body>
        </Container>
    );
}

export default TodoShow;
