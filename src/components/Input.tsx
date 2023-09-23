import styled from "@emotion/styled";
import React, { useState } from 'react';

const Container = styled.input`
    height: 30px;
    width: 500px;
    min-width: 300px;
    border-color: gray;
    border-width: 1px;
    padding: 0 8px;
    margin-right: 10px;
`;

interface Props {
    readonly id?: string;
    readonly value?: string;
    readonly dValue?: string;
    readonly onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;            // optional(default: undefinded)
}

const Input = ({ id, dValue, onChange }: Props) => {
    const [innerValue, setInnerValue] = useState<string>('');

    const key = `key-${id  && id || ''}`;

    return <Container placeholder = {dValue} 
        value = {innerValue} 
        onChange = {(e) => { 
            setInnerValue((before) => {
                const after = e.target.value;
                onChange && (before != after) && onChange(e);
                return after;
            });
         }}
         key = {key}
    />;
};

export default Input;