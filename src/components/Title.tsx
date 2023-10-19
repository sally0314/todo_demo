interface Props {
    readonly label: string
}

export const Title = ({ label }: Props) => {
    return (
        <div className="flex flex-col justify-center">
            <h1 className="mt-0">{label}</h1>
        </div>
    );
};