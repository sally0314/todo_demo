import TodoItem from "components/TodoItem";
import {useContext} from "react";
import {TodoContext} from "contexts/TodoContext";

interface Props {
    readonly dateKey: string;
}

const TodoList = ({dateKey = ''}: Props) => {
    const {todos, onDelete} = useContext(TodoContext);

    return (
        <div className="absolute w-full h-4/5 bottom-0">
            {(todos.get(dateKey) || [])
                .map((todo) => (
                    <TodoItem key={todo.id} todo={todo} onDelete={() => onDelete(todo)}/>
                ))}
        </div>
    );
}

export default TodoList;
