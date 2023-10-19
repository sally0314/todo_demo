interface Props {
    readonly placeholder?: string;
    readonly onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;            // optional(default: undefinded)
}

const Input = ({ placeholder, onChange }: Props) => {
    return (<input
        className="text-base my-5 p-5 min-w-100 border-1"
        placeholder = {placeholder} 
        onChange = {(e) => onChange && onChange(e)} 
    />);
};

export default Input;