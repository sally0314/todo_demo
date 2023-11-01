// import styled from "@emotion/styled";
import React, {useState} from "react";

// interface ContainerProps {
//     readonly color: string;
//     readonly className: string;
// }

// const Container = styled.button<ContainerProps>`
//     border: 0;
//     colot: #ffffff;
//     background-color: ${(props) => props.color};
//     cursor: pointer;
//     padding: 9px 16px;
//     border-radius: 4px;
//
//     &:hover {
//         background-color:${(props) => props.color};
//         opacity: 0.8;
//     }
//
//     &:active {
//         box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
//     }
// `;

interface Props {
    readonly label: string;
    readonly color?: string;
    readonly className?: string;
    readonly onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({label, color = '#FF8D40', onClick, className = ''}: Props) => {

    const [isHover, setIsHover] = useState(false)

    const buttonStyle: NonNullable<object> = {
        color: '#FFFFFF',
        cursor: 'pointer',
        padding: '9px 16px',
        borderRadius: '4px',
        backgroundColor: color,
        opacity: isHover ? 0.8 : 1.0,
    };

    return (
        <button
            className={className}
            style={buttonStyle}
            onClick={onClick}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {label}
        </button>
    );
};

export default Button;
