// import styled from "@emotion/styled";
import {Todo} from "contexts/TodoContext";
import React from "react";

// const Container = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Title = styled.div`
//   flex: 1;
//   font-size: 0.8rem;
//   text-align: center;
//   width: 100%;
// `;

interface Props {
    readonly todo: Todo;
    readonly onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const TodoItem = ({todo, onClick}: Props) => {
    return (
        <div className={'container-wrap flex justify-center align-middle'}>
            <div
                className="title flex text-sm text-center w-full bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
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
