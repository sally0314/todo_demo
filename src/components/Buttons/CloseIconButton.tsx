import React from "react";

interface Props {
    readonly onClose: () => void
    readonly className?: string
}

const CloseIconButton = ({ onClose, className = '' }: Props) => {
    return (
        <button
            type="button"
            className={'box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none' + ` ${className}`}
            onClick={onClose}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={'h-6 w-6'}>
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"/>
            </svg>
        </button>
    )
}

export default CloseIconButton
