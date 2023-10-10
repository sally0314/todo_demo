import { createContext, useState } from "react";
import { v4 as uuid } from 'uuid';

export interface Todo {
    id: string;
    readonly title: string;
    readonly date: Date;
    readonly description?: string;
}

interface Context {
    readonly todos: Todo[];
    readonly showToDoInput: boolean;
    readonly toggleShowToDoInput: () => void;
    readonly onAdd: (todo: Todo) => void;
    readonly onDelete: (todo: Todo) => void;
}

export const TodoContext = createContext<Context>({
    todos: [],
    showToDoInput: false,
    /* eslint-disable @typescript-eslint/no-empty-function */
    toggleShowToDoInput: (): void => {},
    onAdd: (): void => {},
    onDelete: (): void => {},
    /* eslint-enable @typescript-eslint/no-empty-function */
});

interface Props {
    readonly children: JSX.Element | JSX.Element[];
}

export const TodoContextProvider = ({ children }: Props) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [showToDoInput, setShowToDoInput] = useState<boolean>(false);

    const toggleShowToDoInput = () => setShowToDoInput(!showToDoInput)

    const onAdd = (todo: Todo) => {
        if (todo.title.trim() === '') {
            return;
        }

        const newTodoItem: Todo = {
            id: uuid(),
            date: new Date(),
            title: todo.title,
            description: todo.description,
        };

        setTodos([...todos, newTodoItem]);
    };

    const onDelete = (todo: Todo) => {
        console.log(`::: removeTodo, id = $id`)
        setTodos(todos.filter(item => item !== todo));
    };

    return (
        <TodoContext.Provider
            value = {{
                todos,
                showToDoInput,
                toggleShowToDoInput,
                onAdd,
                onDelete,
            }}>
            {children}
        </TodoContext.Provider>
    );
};
