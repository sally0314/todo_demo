import Button from "components/Button";
import { Todo } from "contexts/TodoContext";

interface Props {
    readonly todo: Todo;
    readonly onDelete: (todo: Todo) => void;
}

const TodoItem = ({ todo, onDelete }: Props) => {
    return (
        <div className="flex justify-center mb-5 bg-amber-100">
            <div
                className="block text-left text-sm text-gray-800 ml-5 mr-16 w-130 z-10"
                onClick={() => alert(JSON.stringify(todo))}
            >{todo.title}</div>
            <Button label = "X"
                onClick = {() => onDelete(todo)}
                className="flex font-bold text-red-800 px-3 text-sm z-10"
            />
        </div>
    );
}

export default TodoItem;
