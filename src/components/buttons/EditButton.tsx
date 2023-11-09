import {PenIcon} from "../icons/PenIcon";
import React from "react";

interface Props {
    readonly onClick?: () => void;
    readonly size?: number;
}

export const EditButton = ({ onClick, size = 20 }: Props) => {
    return (
        <button
            type="button"
            className={''}
            onClick={onClick}
        >
            <PenIcon size={size} />
        </button>
    );
}