import React, { useState } from "react";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BASE_URL } from './TodoList';

type Props = {
    setTasks: any,

}

 function apiAddTask(value: string): Promise<any> { 
    return axios.post(BASE_URL,{text:value, isDone: false});
}

export const TodoAddingInput: React.FC<Props> = ({ setTasks }: Props) => {

    const [value, setValue] = useState<string>('');


    function keyPressHandler(key: string,value: string) {
        if (key === 'Enter' && value.trim()) {
            setValue('');
            apiAddTask(value).then((res) => {
                setTasks(tasks => tasks.concat([{ text: value, isDone: false, _id: res.data.data._id }]));
                // TODO: move all toast methods to separate service
                toast.success("Task added successfully", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            },(err) => {
                toast.error(`something gone wrong`, {
                  position: "bottom-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                })
            })
        }
    } 
    
    function changeHandler(value: string) {
        setValue(value);
    }


    return (
        <input
        placeholder="Enter your task here" 
        value={value}
        className="todo-input"
        onChange={(evt:  React.ChangeEvent<HTMLInputElement>) => changeHandler(evt.currentTarget.value)}   
        onKeyPress={(evt: React.KeyboardEvent<HTMLInputElement>) => keyPressHandler(evt.key,evt.currentTarget.value)} 
        />
    )
}