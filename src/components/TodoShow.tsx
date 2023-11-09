import React, {useContext, useState} from 'react';
import {Todo, TodoContext} from "contexts/TodoContext";
import Input from "./Input";
import {Textarea} from "./Textarea";
import TodoModal from "./TodoCalendar/TodoModal";
import TodoInput from "./TodoInput";

interface Props {
    readonly todo: Todo;
    readonly onClose?: () => void;
}

const TodoShow = ({todo, onClose}: Props) => {
    const {onDelete, closeModal} = useContext(TodoContext);
    const [changeModal, setChangeModal] = useState(false);

    const deleteToDo = (todo: Todo) => {
        onDelete(todo);
        closeModal();
    }

    const editToDo = () => {
        setChangeModal(true);
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
                {/* button */}
                <div className={''}>
                    {/*<EditButton onClick={onClose} />*/}
                    {/*<DeleteButton onClick={() => (deleteToDo(todo))} />*/}
                    {/*<CloseButton onClick={onClose} />*/}
                    <button
                        type="button"
                        className={'mr-2 float-right'}
                        onClick={onClose}
                    >
                        <svg className="w-[20px] h-[20px] fill-[#8e8e8e]" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"></path>
                        </svg>
                    </button>
                    <button
                        type="button"
                        className={'mr-2 float-right'}
                        onClick={() => (deleteToDo(todo))}
                    >
                        <svg className={'w-[20px] h-[20px] fill-[#8e8e8e]'} viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"></path>
                        </svg>
                    </button>
                    <button
                        type="button"
                        className={'mr-2 float-right'}
                        onClick={() => editToDo()}
                    >
                        <svg className={'w-[20px] h-[20px] fill-[#8e8e8e]'} viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"></path>
                        </svg>
                    </button>
                </div>
                {/* button */}

                <div className={'flex flex-col items-center justify-center my-8'}>
                    <div>
                        <div className={'inline-block align-top m-2'}>
                            <svg className="w-10 h-10 fill-[#8e8e8e] p-2" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32H256c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
                            </svg>
                        </div>
                        <Input placeholder={`${todo.title}`} disabled={true} />
                    </div>
                    <div>
                        <div className={'inline-block align-top m-2'}>
                            <svg className="w-10 h-10 fill-[#8e8e8e] p-2" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"></path>
                            </svg>
                        </div>
                        <Input placeholder={`${todo.date.format('YYYY-MM-DD')}`} disabled={true} />
                    </div>
                    <div>
                        <div className={'inline-block align-top m-2'}>
                            <svg className="w-10 h-10 fill-[#8e8e8e] p-2" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32H256c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
                            </svg>
                        </div>
                        <Textarea placeholder={`${todo.description}`} disabled={true} />
                    </div>
                </div>
            </div>
            <TodoModal show={changeModal}>
                <TodoInput dateKey={todo.date.toString()} todo={todo} />
            </TodoModal>
        </>
    );
}

export default TodoShow;
