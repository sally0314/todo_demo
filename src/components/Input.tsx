import React from "react";

interface Props {
    readonly placeholder?: string;
    readonly onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;            // optional(default: undefinded)
    readonly disabled?: boolean;
    readonly value?: string;
}

const Input = ({ placeholder, onChange, disabled=false, value }: Props) => {
    return (<input
        className={'text-base my-2 p-2 min-w-[100px] w-[400px] border' + (disabled ? ' border-gray-200':' border-gray-400')}
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e)}
        disabled={disabled}
        value={value}
    />);
};

export default Input;
