interface Props {
    readonly label: string;
    readonly className?: string;
    readonly onClick?: () => void;
}

const Button = ({ label, onClick, className }: Props) => {
    return (
        <button onClick = {onClick} className={className}>{label}</button>
    );
};

export default Button;
