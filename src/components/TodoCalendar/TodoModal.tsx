import {useContext, useState} from 'react';
import TodoInput from 'components/TodoInput';
import {Todo, TodoContext} from 'components/TodoContext';
import Button from "../Button";

const TodoModal = () => {
    const [showToDoInput, setShowToDoInput] = useState(false);
    const {onAdd} = useContext(TodoContext);

    const onAddToDo = (todo: Todo) => {
        onAdd(todo);
        setShowToDoInput(false);
    }

    return (
        <>
            {showToDoInput && <TodoInput onAdd={onAddToDo}/>}
            <Button
                label={showToDoInput ? '닫기' : '할 일 추가'}
                color={showToDoInput ? undefined : '#98A7FF'}
                onClick={() => setShowToDoInput(!showToDoInput)}
            />
        </>
    );
}

export default TodoModal;
