import React, { useCallback } from "react";
import { Circle } from "./Circle";
import { TodoText } from "./TodoText";
import { CancelIcon } from "./CancelIcon";
import { Task } from "../interfaces";
import axios from "axios";
import { BASE_URL } from "./TodoList";


type Props = {
  task: Task;
  setTasks: any;
  deleteTask: any
};

export const TodoItem: React.FC<Props> = ({
  task,
  setTasks,
  deleteTask
}: Props) => {
  const textValue = task.text;
  const isDone = task.isDone;
  const id = task._id;


  const toggleTask = useCallback(() => {
    setTasks((tasks) => {
      return tasks.map((t) => (t._id === id ? { ...t, isDone: !t.isDone } : t));
    });
    axios.put(`${BASE_URL}/${id}`);
  }, [setTasks, id]);

  return (
    <div className="todo-item">
      <Circle isDone={isDone} toggleTask={toggleTask} />
      <TodoText textValue={textValue} setTasks={setTasks} id={id} />
      <CancelIcon
        setTasks={setTasks}
        deleteTask={deleteTask}
        id={id}
      />
    </div>
  );
};
