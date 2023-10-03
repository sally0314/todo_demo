/**
 * @see https://dev.to/madv/usecontext-with-typescript-23ln
 */
import {createContext, useContext} from "react"
import {TodoItem} from "../components/TodoContents";

export type ToDoContents = {
    todos: TodoItem[]
    setTodos: (todos: TodoItem[]) => void
}

export const TodoContext = createContext<ToDoContents>({
    todos: [],
    setTodos: (todos: TodoItem[]) => {
        console.log('setTodos()', todos)
    },
})
export const useGlobalContext = () => useContext(TodoContext)
