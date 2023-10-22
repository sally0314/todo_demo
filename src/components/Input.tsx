import React from "react";

interface Props {
    readonly placeholder?: string;
    readonly onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;            // optional(default: undefinded)
    readonly disabled?: boolean;
}

const Input = ({ placeholder, onChange, disabled=false }: Props) => {
    return (<input
        className={'text-base my-2 p-2 min-w-[100px] w-[700px] border' + (disabled ? ' border-gray-200':' border-gray-400')}
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e)}
        disabled={disabled}
    />);
};

export default Input;
