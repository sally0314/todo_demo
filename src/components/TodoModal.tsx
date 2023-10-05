import { useContext, useState } from 'react';
import { ShowInputButton } from "components/ShowInputButton";
import TodoInput from 'components/TodoInput';
import { Todo, TodoContext } from 'components/TodoContext';

const TodoModal = () => {
    const [showToDoInput, setShowToDoInput] = useState(false);
    const { onAdd } = useContext(TodoContext);
    
    const onAddToDo = (todo: Todo) => {
        onAdd(todo);
        setShowToDoInput(false);
    }

    return (
        <>
            {showToDoInput && <TodoInput onAdd = {onAddToDo} />}
            <ShowInputButton
                show = {showToDoInput}
                onClick = {() => setShowToDoInput(!showToDoInput)}
            />
        </>
    );
}

export default TodoModal;