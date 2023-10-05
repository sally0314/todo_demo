import styled from "@emotion/styled";

const Container = styled.input`
    font-size: 1rem;
    margin-bottom: 8px;
    padding: 8px;
    min-width: 500px;
    width: 700px;
`;

interface Props {
    readonly placeholder?: string;
    readonly onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;            // optional(default: undefinded)
}

const Input = ({ placeholder, onChange }: Props) => {
    return <Container 
        placeholder = {placeholder} 
        onChange = {(e) => onChange && onChange(e)} 
    />;
};

export default Input;