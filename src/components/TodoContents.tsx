import styled from "@emotion/styled";
import TodoInput from "components/TodoInput";
import TodoList from 'components/TodoList';
import React, {useState} from 'react';
import {TodoContext} from "../contexts/ToDoContext";

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
    return (
        <TodoContext.Provider value={{todos, setTodos}}>
            <Container>
                <TodoInput/>
                <TodoList/>
            </Container>
        </TodoContext.Provider>
    );
}

export default TodoContents;
