import styled from "@emotion/styled";

const Container = styled.button`
    border: 0;
    colot: #ffffff;
    cursor: pointer;
    padding: 9px 16px;
    border-radius: 4px;

    &:hover {
        background-color: #ff5722;
        opacity: 0.8;
    }

    &:active {
        box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
    }
`;

interface Props {
    readonly label: string;
    readonly onClick?: () => void;
}

const Button = ({ label, onClick }: Props) => {
    return <Container onClick = {onClick}>{label}</Container>;
};

export default Button;