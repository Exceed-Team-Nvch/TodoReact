import React, { useState} from "react";
import {  useDispatch } from 'react-redux';
import "react-toastify/dist/ReactToastify.css";
import { addTodo } from '../actions/index';


export const TodoAddingInput: React.FC = () => {

    const dispatch = useDispatch();

    const [value, setValue] = useState<string>('');


    function keyPressHandler(key: string,value: string) {
        if (key === 'Enter' && value.trim()) {
            dispatch(addTodo(value));
            setValue('');
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