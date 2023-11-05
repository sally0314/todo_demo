interface Props {
    readonly onClick?: () => void;
    readonly size?: number;
}
export const CloseButton = ({ onClick }: Props) => {
    return (
        <button
            type="button"
            className={'box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none'}
            onClick={onClick}
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
    );
}