import React from "react";
import { Circle } from './Circle';
import { TodoText } from './TodoText';
import { CancelIcon } from './CancelIcon';


export const TodoItem: React.FC = () => {
    return (
        <div className="todo-item" >
            <Circle />
            <TodoText />
            <CancelIcon />
        </div>
    )
}