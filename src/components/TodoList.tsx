import React from "react";
import { useState, useEffect, useCallback } from "react";
import { TodoBottomBar } from "./TodoBottomBar";
import { TodoAddingInput } from "./TodoAddingInput";
import { TodoItem } from "./TodoItem";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Task } from "../interfaces";
import axios from "axios";

const BASE_URL = "https://simple-api-todo.herokuapp.com/api/todo";
toast.configure();

export const TodoList: React.FC = () => {

    const [tasks, setTasks] = useState<Task[]>([]);

    function addTask(value: string): void {
        axios.post(BASE_URL, { text: value , isDone: false}).then((res) => {
            setTasks(tasks.concat([{ text: value, isDone: false, _id: res.data.data._id }]));
            toast.success("Task added successfully", {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          });
    }

    function changeIsDoneState(id: string):void {
        setTasks(tasks.map((task) => {
            if (id === task._id) {
                task.isDone = !task.isDone;
            }
            return task;
        }))
    }


    return (
        <div className="todo-list">
            <TodoAddingInput addTask={addTask} />
            {tasks.map((task) => {
                return (
                    <TodoItem  key={task._id} task={task} changeIsDoneState={changeIsDoneState}/>
                )
            })
            }
            <TodoBottomBar />
        </div>
    )
}