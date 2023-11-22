import Input from 'components/Input';
import React, {useContext, useState} from 'react';
import {Todo, TodoContext} from "contexts/TodoContext";
import dayjs from "dayjs";
import {Textarea} from "./Textarea";
import DatePicker from './DatePicker/DatePicker'
import XmarkIcon from '../icons/XmarkIcon'
import CalendarIcon from '../icons/CalendarIcon'
import BarsLeftIcon from '../icons/BarsLeftIcon'

interface Props {
    readonly dateKey: string;
    readonly onClose?: () => void;
    readonly todo?: Todo;
}

const TodoInput = ({ dateKey, onClose, todo }: Props) => {
    const { onAdd, onEdit, closeModal } = useContext(TodoContext);

    const addToDo = () => {
        if (newTodo.title === '') {
            alert('제목을 입력해주세요.');
            return;
        }

        if (todo) onEdit(newTodo);
        else onAdd(newTodo);
        closeModal();
    }

    const [newTodo, setNewTodo] = useState<Todo>({
        id: todo && todo.id || undefined,
        date: dayjs(dateKey),
        title: todo && todo.title || '',
        description: todo && todo.description || '',
        createdAt: dayjs(),
    });

    const setNewTodoDate = (date: string) => {
        setNewTodo((prev) => {
            return { ...prev, date: dayjs(date), createdAt: dayjs() };
        });
    }

    const setNewTodoTitle = (title: string) => {
        setNewTodo((prev) => {
            return { ...prev, title: title, createdAt: dayjs() };
        });
    }

    const setNewTodoDescription = (description: string) => {
        setNewTodo((prev) => {
            return { ...prev, description: description, createdAt: dayjs() };
        });
    }

    return (
        <>
            <div
                className={'flex w-full flex-col p-4'}
                onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                }}
            >
                <div>
                    <button
                        type="button"
                        className={'mr-1 float-right'}
                        onClick={onClose}
                    >
                        <XmarkIcon/>
                    </button>
                </div>
                <div className={'flex flex-col items-center justify-center my-8'}>
                    {/*title*/}
                    <div>
                        <div className={'inline-block align-top m-2'}>
                            <BarsLeftIcon/>
                        </div>
                        <Input
                            placeholder="제목 추가 (필수)"
                            value={`${newTodo && newTodo.title || ""}`}
                            onChange={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                return setNewTodoTitle(e.target.value)
                            }}/>
                    </div>
                    {/*date*/}
                    <div>
                        <div className={'inline-block align-top m-2'}>
                            <CalendarIcon/>
                        </div>
                        <DatePicker
                            value={newTodo.date}
                            onChange={(day) => {
                                return setNewTodoDate(day.format('YYYY-MM-DD'))
                            }}
                        />
                    </div>
                    {/*description*/}
                    <div>
                        <div className={'inline-block align-top m-2'}>
                            <BarsLeftIcon/>
                        </div>
                        <Textarea
                            placeholder="설명 추가 (옵션)"
                            value={`${newTodo && newTodo.description || ""}`}
                            onChange={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                return setNewTodoDescription(e.target.value)
                            }}/>
                    </div>
                </div>
                <div className={'flex items-center justify-center'}>
                    <button
                        type="button"
                        className={'inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-s font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'}
                        onClick={() => (addToDo())}>
                        저장
                    </button>
                </div>
            </div>
        </>
    );
}

export default TodoInput;
