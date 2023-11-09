import {TrashIcon} from "../icons/TrashIcon";

interface Props {
    readonly onClick?: () => void;
    readonly size?: number;
}

export const DeleteButton = ({ onClick, size = 20 }: Props) => {
    return (
        <button
            type="button"
            className={''}
            onClick={onClick}
        >
            <TrashIcon size={size} />
        </button>
    );
}