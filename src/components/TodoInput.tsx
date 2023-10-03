import styled from "@emotion/styled";
import Input from 'components/Input';
import Button from 'components/Button';
import React, {useState} from 'react';
import {useGlobalContext} from "../contexts/ToDoContext";
import {TodoItem} from "./TodoContents";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TodoInput = () => {
    const [newTodo, setNewTodo] = useState<string>('');

    const {todos, setTodos} = useGlobalContext()

    const addTodo = (todo: string) => {
        if (todo.trim() === '') {
            return;
        }

        const newTodoItem: TodoItem = {
            id: Date.now().toString(),
            text: todo,
        };

        setTodos([...todos, newTodoItem]);
    };

    return (
        <Container>
            <Input value={newTodo} dValue="Add a new todo..." onChange={(e) => (setNewTodo(e.target.value))}/>
            <Button label="Add" onClick={() => addTodo(newTodo)}/>
        </Container>
    );
}

export default TodoInput;
