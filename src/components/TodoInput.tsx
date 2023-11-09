import Input from 'components/Input';
import React, {useContext, useState} from 'react';
import {Todo, TodoContext} from "contexts/TodoContext";
import dayjs from "dayjs";
import {Textarea} from "./Textarea";

interface Props {
    readonly dateKey: string;
    readonly onClose?: () => void;
    readonly todo?: Todo;
}

const TodoInput = ({ dateKey, onClose, todo }: Props) => {
    const {onAdd, onEdit, closeModal} = useContext(TodoContext);

    const addToDo = () => {
        if(newTodo.title === '') {
            alert('제목을 입력해주세요.');
            return;
        }

        if(todo) onEdit(newTodo);
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
            return {...prev, date: dayjs(date), createdAt: dayjs()};
        });
    }

    const setNewTodoTitle = (title: string) => {
        setNewTodo((prev) => {
            return {...prev, title: title, createdAt: dayjs()};
        });
    }

    const setNewTodoDescription = (description: string) => {
        setNewTodo((prev) => {
            return {...prev, description: description, createdAt: dayjs()};
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
            <div>
                <button
                    type="button"
                    className={'mr-1 float-right'}
                    onClick={onClose}
                >
                    <svg className="w-[20px] h-[20px] fill-[#8e8e8e]" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"></path>

                    </svg>
                </button>
            </div>
            <div className={'flex flex-col items-center justify-center my-8'}>
                {/*title*/}
                <div>
                    <div className={'inline-block align-top m-2'}>
                        <svg className="w-10 h-10 fill-[#8e8e8e] p-2" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32H256c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
                        </svg>
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
                        <svg className="w-10 h-10 fill-[#8e8e8e] p-2" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"></path>
                        </svg>
                    </div>
                    <Input placeholder={`${newTodo.date.format('YYYY-MM-DD')}`}
                           disabled={true}
                           onChange={(e) => {
                               e.preventDefault()
                                e.stopPropagation()
                                return setNewTodoDate(e.target.value)
                           }}/>
                </div>
                {/*description*/}
                <div>
                    <div className={'inline-block align-top m-2'}>
                        <svg className="w-10 h-10 fill-[#8e8e8e] p-2" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32H256c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
                        </svg>
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

    );
}

export default TodoInput;
