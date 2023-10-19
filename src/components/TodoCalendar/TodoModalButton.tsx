import {useContext} from 'react';
import {TodoContext} from "../../contexts/TodoContext";

interface Props {
    // YYYY-MM-DD
    readonly dateKey: string;
}

const TodoModalButton = ({dateKey}: Props) => {
    const {showToDoInput, openShowToDoInput,} = useContext(TodoContext);

    return (
        <>
            {!showToDoInput && <div
                className="absolute w-full h-4/5 bottom-0"
                onClick={() => openShowToDoInput(dateKey)}
            />}
        </>
    );
}

export default TodoModalButton;
