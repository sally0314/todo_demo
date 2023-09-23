import styled from "@emotion/styled";
import TodoInput from "components/TodoInput";
import TodoList from 'components/TodoList';
import React, { useState } from 'react';

const Container = styled.div`
    display: block;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 500px;
    padding: 0 8px;
    margin-right: 10px;
`;

export interface TodoItem {
    id: string;
    text: string;
}

const TodoContents = () => {
    const [todos, setTodos] = useState<TodoItem[]>([]);

    const addTodo = (todo: string) => {
        if (todo.trim() === '') {
            return;
        }

        const newTodoItem: TodoItem = {
            id: Date.now().toString(),
            text: todo,
        };

        setTodos([...todos, newTodoItem]);
        console.log("!!!!!", todos);
    };

    const removeTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id != id));
    };
    
    return (
        <Container>
            <TodoInput addTodo = {addTodo} />
            <TodoList todos = {todos} removeTodo = {removeTodo} />
        </Container>
    );
}

export default TodoContents;