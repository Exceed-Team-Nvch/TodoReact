import React from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { BASE_URL } from "./TodoList";

type Props = {
  setTasks: any;
  setFilterState: any;
};

export const TodoBottomBar: React.FC<Props> = ({
  setFilterState,
  setTasks,
}: Props) => {
  const filterTexts = ["all", "active", "completed"];

  function clickHandler(textValue: string): void {
    setFilterState(textValue);
  }

  function deleteCompletedTasks(): void {
    setTasks((tasks) =>
      tasks.filter((task) => {
        if (task.isDone) {
          axios.delete(`${BASE_URL}/${task._id}`);
        } else {
          return task;
        }
      })
    );
    setFilterState("all");
  }

  return (
    <div className="todo-bottom-bar">
      {filterTexts.map((item, index) => (
        <Button
          key={index}
          className="btn btn-category"
          onClick={(evt) => clickHandler(item)}
        >
          {item}
        </Button>
      ))}
      <Button className="btn clear-btn" onClick={deleteCompletedTasks}>
        clear completed
      </Button>
    </div>
  );
};
