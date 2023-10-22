import {Todo, TodoContext} from "../contexts/TodoContext";
import TodoItem from "./TodoItem";
import TodoModal from "./TodoCalendar/TodoModal";
import TodoShow from "./TodoShow";
import React, {useContext} from "react";

interface Props {
    readonly show: boolean;
    readonly items: Todo[];
    readonly onClose: () => void;
}

export const PopupTodoList = ({ show, items, onClose }: Props) => {
    const {modalKeyMap, openModal} = useContext(TodoContext);

    return (
        show ?
        <div
            className={'flex w-full flex-col p-4 bg-white z-10 left-0 top-20 border border-gray-200 rounded'}
            onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
            }}
        >
            <div className={'flex flex-shrink-0 items-center justify-between rounded-t-md'}>
                <h5 className={'center text-xl font-medium leading-normal'}>
                    {`${items[0].date.format('DD')} 일`}
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
            <div className={'flex flex-col pt-4'}>
                {items.map((todo) => (
                    <div className={'my-px'}
                         key={todo.id}>
                        <TodoItem todo={todo} onClick={
                            () => (openModal({showTodoId: todo.id}))}/>
                        {
                            <TodoModal show={modalKeyMap.showTodoId === todo.id}>
                                <TodoShow todo={todo}/>
                            </TodoModal>
                        }
                    </div>
                ))}
            </div>
        </div> : <></>
    );
};