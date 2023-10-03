import styled from "@emotion/styled";
// import TodoItem from 'components/TodoContents'
import Button from 'components/Button';
import {useGlobalContext} from "../contexts/ToDoContext";
// import React, { useState } from 'react';

const Container = styled.div`
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 0;
`;

const Todo = styled.span`
  width: 500px;
  min-width: 300px;
  align-items: center;
  margin-right: 10px;
  padding: 10px 0;
`;

const TodoList = () => {

    const {todos, setTodos} = useGlobalContext()

    const removeTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id != id));
    };

    return (
        <Container>
            {todos?.map((todo) => (
                <List key={todo.id}>
                    <Todo>{todo.text}</Todo>
                    <Button label="Del" onClick={() => removeTodo(todo.id)}/>
                </List>
            ))}
        </Container>
    );
}

export default TodoList;
