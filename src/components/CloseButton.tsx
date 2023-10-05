import styled from "@emotion/styled";
import Button from "./Button";

const Container = styled.div`
    position: absolute;
    // display: flex;
    right: 40px;
    top: 40px;
    z-index: 1;
    color: black;
`;

interface Props {
    readonly onClick?: () => void;
}

export const CloseButton = ({ onClick }: Props) => {
    return (
        <Container>
            <Button
                label = 'X'
                onClick = {onClick}
            />
        </Container>
    );
};