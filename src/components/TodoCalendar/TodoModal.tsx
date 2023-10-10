import {useContext} from 'react';
import TodoInput from 'components/TodoInput';
import {Todo, TodoContext} from 'components/TodoContext';

const TodoModal = () => {
    const {onAdd, showToDoInput, toggleShowToDoInput} = useContext(TodoContext);

    const onAddToDo = (todo: Todo) => {
        onAdd(todo);
        toggleShowToDoInput();
    }

    return (
        <>
            {showToDoInput && <TodoInput onAdd={onAddToDo} onClose={() => toggleShowToDoInput()}/>}
        </>
    );
}

export default TodoModal;
