import styled from "@emotion/styled";
import {Todo} from "contexts/TodoContext";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  flex: 1;
  font-size: 0.8rem;
  text-align: center;
  width: 100%;
`;

interface Props {
    readonly todo: Todo;
    readonly onDelete: (todo: Todo) => void;
}

const TodoItem = ({todo}: Props) => {
    return (
        <Container>
            <Title
                className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
            >
                {todo.title}
            </Title>
        </Container>
    );
}

export default TodoItem;
