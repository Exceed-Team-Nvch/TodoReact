import React from "react";

type Props = {
    id: string,
    deleteTask: (id: string) => void
}

export const CancelIcon: React.FC<Props> = ({ id, deleteTask }: Props) => {

    function clickHandler(id: string):void {
        deleteTask(id);
    }

    return (
        <span className="cancel-icon" onClick={() => clickHandler(id)} ></span>
    )
}