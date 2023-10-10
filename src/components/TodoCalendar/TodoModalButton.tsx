import {useContext} from 'react';
import Button from "../Button";
import {TodoContext} from "../TodoContext";

const TodoModalButton = () => {
    const {showToDoInput, toggleShowToDoInput,} = useContext(TodoContext);

    return (
        <>
            {!showToDoInput && <Button
                label={'할 일 추가'}
                color={'#98A7FF'}
                onClick={toggleShowToDoInput}
            />}
        </>
    );
}

export default TodoModalButton;
