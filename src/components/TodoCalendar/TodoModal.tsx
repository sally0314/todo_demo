import {cloneElement, ReactElement, useContext} from 'react';
import {TodoContext} from 'contexts/TodoContext';
// import styled from "@emotion/styled";
//
// const Container = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
//
// const Background = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   background-color: rgb(0 0 0 / 2%);
// `;
//
// const ModalContent = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   background-color: #ffffff;
//   padding: 32px;
//   border-radius: 8px;
//   z-index: 1;
// `;

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
                <div className={'container-wrap absolute top-0 left-0 right-0 bottom-0 flex justify-center align-middle'}>
                    <div className={'background-wrap absolute top-0 left-0 right-0 bottom-0 transition-[background-color,_opacity]'}/>
                    <div className={'modal-content border my-auto flex flex-col justify-center align-middle bg-white px-8 py-8 rounded z-[1]'}>
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
