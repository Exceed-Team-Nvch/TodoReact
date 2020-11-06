import React from "react";
import {  useSelector } from 'react-redux';
import {  useEffect } from "react";
import { TodoBottomBar } from "./TodoBottomBar";
import {  useDispatch } from 'react-redux';
import { TodoAddingInput } from "./TodoAddingInput";
import { TodoItem } from "./TodoItem";

import { downloadTodos } from "../actions";

export const BASE_URL = "https://simple-api-todo.herokuapp.com/api/todo";


export let deletedMap = new Map();

export const TodoList:React.FC = () => {

  const dispatch = useDispatch();
  const tasks = useSelector(state => state.todos);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(downloadTodos());
  }, []);

 

  // const deleteTask = useCallback(
  //   (id: string) => {

  //     const index = tasks.findIndex((task) => task._id === id);
  //     const deletedItem = tasks.splice( index, 1);


  //       toast.success(<CustomToast id={id} deletedMap={deletedMap}/>,{
  //           position: "bottom-right",
  //           autoClose: 5000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //           onClose: () => {
  //               if (deletedMap.has(id)) {
  //                   tasks.splice(index, 0, { _id: deletedItem[0]._id, text: deletedItem[0].text, isDone: deletedItem[0].isDone });
  //                   setTasks(tasks);
  //               } else {
  //                   axios.delete(`${BASE_URL}/${id}`);
  //               }
  //           }   
  //       });


  //     setTasks((tasks) => tasks.filter((task) => task._id !== id));

  //   },
  //   [tasks]
  // );
  function filteredTasks(textValue: string) {
    switch (textValue) {
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
 
      


  return (
    <div className="todo-list">
      <TodoAddingInput  />
      <div className="todo-item-wrapper">
        {console.log(tasks)}
        {console.log(filter)} 
        {console.log(filteredTasks(filter))}
        {filteredTasks(filter).map((task) => {
          return (
            <TodoItem
              key={task._id}
              task={task}
            />
          );
        })}
      </div>
      <TodoBottomBar  />
    </div>
  );
};
