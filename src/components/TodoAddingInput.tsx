import React, { useState } from "react";


type Props = {
    addTask: (value: string) => void
}

export const TodoAddingInput: React.FC<Props> = ({ addTask }: Props) => {

    const [value, setValue] = useState<string>('');


    function keyPressHandler(key: string,value: string) {
        if (key === 'Enter' && value.trim()) {
            addTask(value);
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