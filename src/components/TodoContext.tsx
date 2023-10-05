import { createContext, useState } from "react";

export interface Todo {
    id?: number;
    readonly title: string;
    readonly date: Date;
    readonly description?: string;
}

interface Context {
    readonly todos: Todo[];
    readonly onAdd: (todo: Todo) => void;
    readonly onDelete: (todo: Todo) => void;
}

export const TodoContext = createContext<Context>({
    todos: [],
    /* eslint-disable @typescript-eslint/no-empty-function */
    onAdd: (): void => {},
    onDelete: (): void => {},
    /* eslint-enable @typescript-eslint/no-empty-function */
});

interface Props {
    readonly children: JSX.Element | JSX.Element[];
}

export const TodoContextProvider = ({ children }: Props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const onAdd = (todo: Todo) => {
        if (todo.title.trim() === '') {
            return;
        }

        const newTodoItem: Todo = {
            id: todos.length + 1,
            date: new Date(),
            title: todo.title,
            description: todo.description,
        };

        setTodos([...todos, newTodoItem]);
        console.log("!!!!!", todos);
    };

    const onDelete = (todo: Todo) => {
        console.log(`::: removeTodo, id = $id`)
        setTodos(todos.filter(item => item !== todo));
    };

    return (
        <TodoContext.Provider 
            value = {{
                todos, 
                onAdd, 
                onDelete,
            }}>
            {children}
        </TodoContext.Provider>
    );
};