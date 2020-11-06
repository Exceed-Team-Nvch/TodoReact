import React from "react";
import { useState, useEffect , useCallback} from "react";
import { TodoBottomBar } from "./TodoBottomBar";
import { TodoAddingInput } from "./TodoAddingInput";
import { TodoItem } from "./TodoItem";
import { Task } from "../interfaces";
import axios from "axios";
import { CustomToast } from './CustomToast';
import { toast } from 'react-toastify';

export const BASE_URL = "https://simple-api-todo.herokuapp.com/api/todo";


export let deletedMap = new Map();

export const TodoList: React.FC = () => {


  const [tasks, setTasks] = useState<Task[]>([]);
  const [filterState, setFilterState] = useState<string>("all");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(BASE_URL);
      setTasks(result.data.data);
    };
    fetchData();
  }, []);

  function filterTasks(): Task[] {
    switch (filterState) {
      case "all":
        return tasks;
      case "active":
        return tasks.filter((task) => !task.isDone);
      case "completed":
        return tasks.filter((task) => task.isDone);
      default:
        return tasks;
    }
  }

  const deleteTask = useCallback(
    (id: string) => {

      const index = tasks.findIndex((task) => task._id === id);
      const deletedItem = tasks.splice( index, 1);


        toast.success(<CustomToast id={id} deletedMap={deletedMap}/>,{
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            onClose: () => {
                if (deletedMap.has(id)) {
                    tasks.splice(index, 0, { _id: deletedItem[0]._id, text: deletedItem[0].text, isDone: deletedItem[0].isDone });
                    setTasks(tasks);
                } else {
                    axios.delete(`${BASE_URL}/${id}`);
                }
            }   
        });


      setTasks((tasks) => tasks.filter((task) => task._id !== id));

    },
    [tasks]
  );

  return (
    <div className="todo-list">
      <TodoAddingInput setTasks={setTasks} />
      <div className="todo-item-wrapper">
        {filterTasks().map((task) => {
          return (
            <TodoItem
              key={task._id}
              task={task}
              setTasks={setTasks}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
      <TodoBottomBar setFilterState={setFilterState} setTasks={setTasks} />
    </div>
  );
};
