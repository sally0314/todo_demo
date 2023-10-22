import React from "react";
import TodoItem from "components/TodoItem";
import {useContext, useState} from "react";
import {TodoContext} from "contexts/TodoContext";
import TodoShow from "./TodoShow";
import TodoModal from "./TodoCalendar/TodoModal";
import {PopupTodoList} from "./PopupTodoList";

interface Props {
    readonly dateKey: string;
}

const TodoList = ({dateKey = ''}: Props) => {
    const limit = 5
    const {todos, modalKeyMap, openModal} = useContext(TodoContext);
    const items = todos.get(dateKey) || []
    const remains = items.length > limit ? items.slice(limit, items.length) : []
    const hasMore = remains.length > 0
    const [popupTodo, setPopupTodo] = useState(false);
    const showMoreList = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault()
        e.stopPropagation()
        setPopupTodo(true)
    }

    return (
        <div className={'flex flex-col'}>
            {([...items].splice(0, 5))
                .map((todo) => (
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
            {
                hasMore &&
                <>
                    <div
                        className={'text-xs hover:underline'}
                        onClick={(e) => showMoreList(e)}
                    >
                        {`${remains.length} more`}
                    </div>
                    <PopupTodoList show={popupTodo} items={items} onClose={() => setPopupTodo(!popupTodo)} />
                </>
            }
        </div>
    );
}

export default TodoList;
