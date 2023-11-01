import React from "react";

interface Props {
    readonly label: string;
    readonly color?: string;
    readonly className?: string;
    readonly onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({ label, color = '#FF8D40', onClick, className = '' }: Props) => {
    return (
        <button color = {color} onClick = {onClick} className={className}>{label}</button>
    );
};

export default Button;
