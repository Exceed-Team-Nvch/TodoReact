import React from "react";
import {  useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteTodo } from '../actions'

toast.configure();

type Props = {
    id: string,
}


export const CancelIcon: React.FC<Props> = ({ id }: Props) => {

    const dispatch = useDispatch();

    function  deleteTask(id:string) {
        dispatch(deleteTodo(id));
    }
    
    return (
        <span className="cancel-icon" onClick={() => deleteTask(id)} ></span>
    )
}