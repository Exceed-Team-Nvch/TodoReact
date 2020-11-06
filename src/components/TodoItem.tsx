import React from "react";
import { Circle } from "./Circle";
import { TodoText } from "./TodoText";
import { CancelIcon } from "./CancelIcon";
import { Task } from "../interfaces";


type Props = {
  task: Task;

};

export const TodoItem: React.FC<Props> = ({
  task,
}: Props) => {
  const textValue = task.text;
  const isDone = task.isDone;
  const id = task._id;



  return (
    <div className="todo-item">
      <Circle isDone={isDone} id={id}/>
      <TodoText textValue={textValue}  id={id} />
      <CancelIcon
        id={id}
      />
    </div>
  );
};
