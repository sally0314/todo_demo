import Input from 'components/Input';
import React, {useContext, useState} from 'react';
import {Todo, TodoContext} from "contexts/TodoContext";
import dayjs from "dayjs";

interface Props {
    readonly dateKey: string;
    readonly onClose?: () => void;
}

const TodoInput = ({dateKey, onClose}: Props) => {
    const {onAdd, closeModal} = useContext(TodoContext);

    const addToDo = (todo: Todo) => {
        if(todo.title === '') {
            alert('제목을 입력해주세요.');
            return;
        }
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
        <div
            className={'flex w-full flex-col p-4'}
            onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
        }}
        >
            {/* title */}
            <div className={'flex flex-shrink-0 items-center justify-between rounded-t-md'}>
                <h5 className={'center text-xl font-medium leading-normal'}>
                    {`할 일 추가 (${newTodo.date.format('YYYY-MM-DD')})`}
                </h5>
                <button
                    type="button"
                    className={'box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none'}
                    onClick={onClose}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={'h-6 w-6'}>
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
            {/* title */}
            <div className={'flex flex-col items-center justify-center my-8'}>
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
            </div>
            <div className={'flex items-center justify-center'}>
                <button
                    type="button"
                    className={'inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-s font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'}
                    onClick={() => (addToDo(newTodo))}>
                    추가
                </button>
            </div>
        </div>

    );
}

export default TodoInput;
