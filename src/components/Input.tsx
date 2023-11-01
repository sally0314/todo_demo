// import styled from "@emotion/styled";
import React from "react";

// const Container = styled.input`
//     font-size: 1rem;
//     margin-bottom: 8px;
//     padding: 8px;
//     min-width: 500px;
//     width: 700px;
// `;

interface Props {
    readonly placeholder?: string;
    readonly onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;            // optional(default: undefinded)
}

const Input = ({placeholder, onChange}: Props) => {
    return <input
        /*Q) React는 type 안 붙여도 되나?*/
        type={'text'}
        className={'mb-2 px-2 py-2 w-[700px]'}
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e)}
    />;
};

export default Input;
