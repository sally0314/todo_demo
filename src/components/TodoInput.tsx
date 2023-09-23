import styled from "@emotion/styled";
import Input from 'components/Input';
import Button from 'components/Button';
import React, { useState } from 'react';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

interface Props {
    readonly addTodo?: (todo: string) => void;
}

const TodoInput = ({ addTodo }: Props) => {
    const [newTodo, setNewTodo] = useState<string>('');

    return (
        <Container>
            <Input value = {newTodo} dValue = "Add a new todo..." onChange = {(e) => (setNewTodo(e.target.value))} />
            <Button label = "Add" onClick = {() => (addTodo && addTodo(newTodo))} />
        </Container>
    );
}

export default TodoInput;