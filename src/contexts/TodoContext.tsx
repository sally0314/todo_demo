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

export interface ModalKeyMap {
    inputDateKey: string;
    showTodoId: string;
}

interface Context {
    readonly todos: Map<string, Todo[]>;
    readonly modalKeyMap: ModalKeyMap;
    readonly openModal: (key: object) => void;
    readonly closeModal: () => void;
    readonly onAdd: (todo: Todo) => void;
    readonly onDelete: (todo: Todo) => void;
}

export const TodoContext = createContext<Context>({
    todos: new Map(),
    modalKeyMap: {
        inputDateKey: '',
        showTodoId: '',
    },
    /* eslint-disable @typescript-eslint/no-empty-function */
    openModal: (): void => {
    },
    closeModal: (): void => {
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
    const initialModalKeyMap = {
        inputDateKey: '',
        showTodoId: ''
    }
    const [todos, setTodos] = useState<Map<string, Todo[]>>(new Map());
    const [modalKeyMap, setModalKeyMap] = useState<ModalKeyMap>(initialModalKeyMap);

    const openModal = (key: object) => setModalKeyMap({...modalKeyMap, ...key})
    const closeModal = () => setModalKeyMap(initialModalKeyMap)

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
        setTodos((new Map(todos)).set(dateKey, [...(todos.get(dateKey) || []), newTodoItem]));
    };

    const onDelete = (todo: Todo) => {
        const dateKey = todo.date.format('YYYY-MM-DD')
        setTodos((new Map(todos)).set(dateKey, [...(todos.get(dateKey) || [])].filter(item => item.id !== todo.id)));
    };

    return (
        <TodoContext.Provider
            value={{
                todos,
                modalKeyMap,
                openModal,
                closeModal,
                onAdd,
                onDelete,
            }}>
            {children}
        </TodoContext.Provider>
    );
};
