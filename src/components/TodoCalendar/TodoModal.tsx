import {useContext} from 'react';
import TodoInput from 'components/TodoInput';
import {Todo, TodoContext} from 'contexts/TodoContext';
import dayjs from "dayjs";

interface Props {
    readonly dateKey: string,
}

const TodoModal = ({dateKey}: Props) => {
    const {onAdd, showToDoInput, closeShowToDoInput} = useContext(TodoContext);

    const onAddToDo = (todo: Todo) => {
        onAdd(todo);
        closeShowToDoInput();
    }

    return (
        <>
            {showToDoInput === dateKey && <TodoInput date={dayjs(dateKey)} onAdd={onAddToDo} onClose={() => closeShowToDoInput()}/>}
        </>
    );
}

export default TodoModal;
