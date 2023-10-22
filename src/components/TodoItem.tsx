import {Todo} from "contexts/TodoContext";
import React from "react";

interface Props {
    readonly todo: Todo;
    readonly onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const TodoItem = ({todo, onClick}: Props) => {
    return (
        <div className={'flex'}>
            <div
                className={'text-ellipsis overflow-hidden flex-1 bg-blue-100 text-blue-800 text-xs font-medium px-1 py-0.5 rounded dark:bg-blue-400 dark:text-blue-100 hover:dark:bg-blue-500 transition'}
                onClick={e => {
                    e.preventDefault()
                    e.stopPropagation()
                    return onClick(e)
                }}
            >
                {todo.title}
            </div>
        </div>
    );
}

export default TodoItem;
