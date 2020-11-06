import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

type Props = {
    id: string,
    setTasks: any,
    deleteTask: any
}


export const CancelIcon: React.FC<Props> = ({ id, setTasks , deleteTask }: Props) => {

    
    return (
        <span className="cancel-icon" onClick={() => deleteTask(id)} ></span>
    )
}