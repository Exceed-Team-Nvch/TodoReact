import React from "react";
import { Circle } from './Circle';
import { TodoText } from './TodoText';
import { CancelIcon } from './CancelIcon';
import { Task } from "../interfaces";

type Props = {
    task: Task,
    changeIsDoneState: (id: string) => void,
    deleteTask:(id:string) => void,
    editTask: (id: string, newText: string) => void
}

export const TodoItem: React.FC<Props> = ({ task, changeIsDoneState, deleteTask, editTask}: Props) => {

    const textValue = task.text;
    const isDone = task.isDone;
    const id = task._id;

    return (
        <div className="todo-item" >
            <Circle isDone={isDone} id={id} changeIsDoneState={changeIsDoneState}/>
            <TodoText textValue={textValue} editTask={editTask} id={id} />
            <CancelIcon id={id} deleteTask={deleteTask}/>
        </div>
    )
}