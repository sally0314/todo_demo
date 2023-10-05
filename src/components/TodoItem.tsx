import styled from "@emotion/styled";
import Button from "components/Button";
import { Todo } from "components/TodoContext";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
`;

// const Date = styled.div`
//     flex: 1;
//     font-size: 1.2rem;
//     margin-right: 16px;
// `;

const Title = styled.div`
    flex: 1;
    font-size: 1.2rem;
    margin-right: 16px;
`;

interface Props {
    readonly todo: Todo;
    readonly onDelete: (todo: Todo) => void;
}

const TodoItem = ({ todo, onDelete }: Props) => {
    return (
        <Container>
            <Title>{todo.title}</Title>
            <Button label = "Del" onClick = {() => onDelete(todo)} />
        </Container>
    );
}

export default TodoItem;