import {cloneElement, ReactElement, useContext} from 'react';
import {TodoContext} from 'contexts/TodoContext';
import styled from "@emotion/styled";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(0 0 0 / 2%);
`;

const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 8px;
  z-index: 1;
`;

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
                <Container>
                    <Background/>
                    <ModalContent>
                        {cloneElement(children, {
                            onClose: closeModal,
                        })}
                    </ModalContent>
                </Container>
            }
        </>
    );
}

export default TodoModal;
