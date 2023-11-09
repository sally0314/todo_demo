import React from "react";

interface Props {
    readonly placeholder?: string;
    readonly onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    readonly disabled?: boolean;
    readonly value?: string;
}

export const Textarea = ({ placeholder, onChange, disabled=false, value }: Props) => {
    return (<textarea
        className={'text-base my-2 p-2 min-w-[100px] w-[400px] h-[200px] border' + (disabled ? ' border-gray-200':' border-gray-400')}
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e)}
        disabled={disabled}
        value={value}
    />);
};