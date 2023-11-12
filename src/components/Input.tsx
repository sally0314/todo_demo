import React from "react";

interface Props {
    readonly placeholder?: string;
    readonly onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    readonly onClick?: () => void;
    readonly disabled?: boolean;
    readonly value?: string;
    readonly readonly?: boolean;
}

const Input = ({ placeholder, onChange, onClick, disabled=false, value, readonly=false }: Props) => {
    return (<input
        className={'text-base my-2 p-2 min-w-[100px] w-[400px] border'
            + (disabled ? ' border-gray-200':' border-gray-400')
            + (readonly ? ' hover:outline-none focus:outline-none':'')
    }
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e)}
        onClick={() => onClick && onClick()}
        disabled={disabled}
        value={value}
        readOnly={readonly}
    />);
};

export default Input;
