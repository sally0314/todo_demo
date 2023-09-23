import styled from "@emotion/styled";

const Container = styled.h1`
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

interface Props {
    readonly label: string
}

const Title = ({ label }: Props) => {
    return <Container>{label}</Container>;
}

export default Title;