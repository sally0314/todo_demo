import {cloneElement, ReactElement, useContext} from 'react';
import {TodoContext} from 'contexts/TodoContext';

interface Props {
    readonly show: boolean;
    readonly children: ReactElement;
}

const TodoModal = ({show, children}: Props) => {
    const {closeModal} = useContext(TodoContext);

    return (
        <>
            {
                show &&
                <div className={'fixed left-0 top-0 h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-neutral-500 z-50'}>
                    <div className={'flex items-center justify-center flex-col bg-white p-8 min-[500px]:mx-auto min-[500px]:mt-56 min-[500px]:max-w-[800px]'}>
                        {cloneElement(children, {
                            onClose: closeModal,
                        })}
                    </div>
                </div>
            }
        </>
    );
}

export default TodoModal;
