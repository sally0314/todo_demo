import styled from "@emotion/styled";
import Input from 'components/Input';
import Button from 'components/Button';
import React, { useState } from 'react';
import { Todo } from "components/TodoContext";
import { Title } from "components/Title";

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
    background-color: rgb(0 0 0 / 75%);
`;

const Contents = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #ffffff;
    padding: 32px;
    border-radius: 8px;
    z-index: 1;
`;

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;


interface Props {
    readonly onAdd?: (todo: Todo) => void;
}

const TodoInput = ({ onAdd }: Props) => {
    const [newTodo, setNewTodo] = useState<Todo>({
        title: '', date: new Date(), description: '',
    });
    
    const setNewTodoTitle = (title: string) => {
        setNewTodo((prev) => {
            return { ...prev, title: title, date: new Date() };
        });
    }

    const setNewTodoDescription = (description: string) => {
        setNewTodo((prev) => {
            return { ...prev, description: description, date: new Date() };
        });
    }

    return (
        <Container>
            <Background />
            <Contents>
                <Title label = "할 일 추가" />
                <InputContainer>
                    <Input placeholder = "제목 추가 (필수)" onChange = {(e) => (setNewTodoTitle(e.target.value))} />
                    <Input placeholder = "설명 추가 (옵션)" onChange = {(e) => (setNewTodoDescription(e.target.value))} />
                    <Button label = "추가" color = "#98a7ff" onClick = {() => (onAdd && newTodo && onAdd(newTodo))} />
                </InputContainer>
            </Contents>
        </Container>
    );
}

export default TodoInput;