import {createContext, useState} from "react";
import {v4 as uuid} from 'uuid';
import dayjs, {Dayjs} from "dayjs";

export interface Todo {
    id?: string;
    readonly date: Dayjs,
    readonly title: string;
    readonly createdAt: Dayjs;
    readonly description?: string;
}

interface Context {
    readonly todos: Map<string, Todo[]>;
    readonly showToDoInput: string;
    readonly openShowToDoInput: (dateKey: string) => void;
    readonly closeShowToDoInput: () => void;
    readonly onAdd: (todo: Todo) => void;
    readonly onDelete: (todo: Todo) => void;
}

export const TodoContext = createContext<Context>({
    todos: new Map(),
    showToDoInput: '',
    /* eslint-disable @typescript-eslint/no-empty-function */
    openShowToDoInput: (): void => {
    },
    closeShowToDoInput: (): void => {
    },
    onAdd: (): void => {
    },
    onDelete: (): void => {
    },
    /* eslint-enable @typescript-eslint/no-empty-function */
});

interface Props {
    readonly children: JSX.Element | JSX.Element[];
}

export const TodoContextProvider = ({children}: Props) => {
    const [todos, setTodos] = useState<Map<string, Todo[]>>(new Map());
    const [showToDoInput, setShowToDoInput] = useState<string>('');

    const openShowToDoInput = (dateKey: string) => setShowToDoInput(dateKey)
    const closeShowToDoInput = () => setShowToDoInput('')

    const onAdd = (todo: Todo) => {
        if (todo.title.trim() === '') {
            return;
        }

        const newTodoItem: Todo = {
            id: uuid(),
            date: todo.date,
            title: todo.title,
            description: todo.description,
            createdAt: dayjs(),
        };

        const dateKey = newTodoItem.date.format('YYYY-MM-DD')
        todos.set(dateKey, [...(todos.get(dateKey) || []), newTodoItem])
        setTodos(todos);
    };

    const onDelete = (todo: Todo) => {
        const dateKey = todo.date.format('YYYY-MM-DD')
        todos.set(dateKey, [...(todos.get(dateKey) || [])].filter(item => item.id !== todo.id));
        setTodos(new Map(todos));
    };

    return (
        <TodoContext.Provider
            value={{
                todos,
                showToDoInput,
                openShowToDoInput,
                closeShowToDoInput,
                onAdd,
                onDelete,
            }}>
            {children}
        </TodoContext.Provider>
    );
};
