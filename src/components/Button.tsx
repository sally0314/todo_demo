import styled from "@emotion/styled";

interface ContainerProps {
    readonly color: string;
    readonly className: string;
}

const Container = styled.button<ContainerProps>`
    border: 0;
    colot: #ffffff;
    background-color: ${(props) => props.color};
    cursor: pointer;
    padding: 9px 16px;
    border-radius: 4px;

    &:hover {
        background-color:${(props) => props.color};
        opacity: 0.8;
    }

    &:active {
        box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
    }
`;

interface Props {
    readonly label: string;
    readonly color?: string;
    readonly className?: string;
    readonly onClick?: () => void;
}

const Button = ({ label, color = '#FF8D40', onClick, className = '' }: Props) => {
    return (
        <Container color = {color} onClick = {onClick} className={className}>{label}</Container>
    );
};

export default Button;
