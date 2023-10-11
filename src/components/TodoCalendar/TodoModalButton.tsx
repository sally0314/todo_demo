import {useContext} from 'react';
import Button from "../Button";
import {TodoContext} from "../../contexts/TodoContext";

interface Props {
    // YYYY-MM-DD
    readonly dateKey: string;
}

const TodoModalButton = ({dateKey}: Props) => {
    const {showToDoInput, openShowToDoInput,} = useContext(TodoContext);

    return (
        <>
            {!showToDoInput && <Button
                label={'할 일 추가'}
                color={'#98A7FF'}
                onClick={() => openShowToDoInput(dateKey)}
            />}
        </>
    );
}

export default TodoModalButton;
