import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector} from 'react-redux';
import { deleteAllTodos, filterTodo } from '../actions'
import { BASE_URL } from "../components/TodoList";



export const TodoBottomBar:React.FC = () => {

  const dispatch = useDispatch();
  const filterTexts = ["all", "active", "completed"];

  function clickHandler(textValue: string): void {
    dispatch(filterTodo(textValue));
    }
    const tasks = useSelector(state => state.todos);
  // function deleteCompletedTasks(): void {
  //   setTasks((tasks) =>
  //     tasks.filter((task) => {
  //       if (task.isDone) {
  //         axios.delete(`${BASE_URL}/${task._id}`);
  //       } else {
  //         return task;
  //       }
  //     })
  //   );
  //   setFilterState("all");
  // }
    function deleteAll() {
      const deletingTasks = tasks.filter(task => {
        if (task.isDone) {
          axios.delete(`${BASE_URL}/${task._id}`);
        } else {
          return task
        }
        dispatch(deleteAllTodos(deletingTasks));
      });
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
      <Button className="btn clear-btn" onClick={(evt) => deleteAll()} >
        clear completed
      </Button>
    </div>
  );
};
