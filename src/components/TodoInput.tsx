import Input from 'components/Input';
import Button from 'components/Button';
import React, {useContext, useState} from 'react';
import {Todo, TodoContext} from "contexts/TodoContext";
import {Title} from "components/Title";
import dayjs from "dayjs";

// const Container = styled.div`
//
// `;

// const Body = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
// `;

interface Props {
    readonly dateKey: string;
    readonly onClose?: () => void;
}

const TodoInput = ({dateKey, onClose}: Props) => {
    const {onAdd, closeModal} = useContext(TodoContext);

    const addToDo = (todo: Todo) => {
        onAdd(todo);
        closeModal();
    }

    const [newTodo, setNewTodo] = useState<Todo>({
        date: dayjs(dateKey),
        title: '',
        description: '',
        createdAt: dayjs(),
    });

    const setNewTodoTitle = (title: string) => {
        setNewTodo((prev) => {
            return {...prev, title, createdAt: dayjs()};
        });
    }

    const setNewTodoDescription = (description: string) => {
        setNewTodo((prev) => {
            return {...prev, description, createdAt: dayjs()};
        });
    }

    return (
        <div className={'container-wrap'} onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
        }}>
            <Title label={`할 일 추가 (${newTodo.date.format('YYYY-MM-DD')})`}/>
            <div className={'body-wrap flex justify-center align-middle flex-col'}>
                <Input placeholder="제목 추가 (필수)" onChange={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    return setNewTodoTitle(e.target.value)
                }}/>
                <Input placeholder="설명 추가 (옵션)" onChange={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    return setNewTodoDescription(e.target.value)
                }}/>
                <div className="flex items-center justify-center">
                    <Button label="추가" color="#98a7ff" onClick={() => (addToDo(newTodo))}/>
                    {onClose && <Button label="취소" onClick={onClose} className={'ml-2'}/>}
                </div>
            </div>
        </div>
    );
}

export default TodoInput;
