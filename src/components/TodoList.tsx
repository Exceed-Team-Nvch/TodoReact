import React from "react";
import { useState, useEffect } from "react";
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
    const [filterState, setFilterState] = useState<string>('all');

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(BASE_URL);
          setTasks(result.data.data);
        };
        fetchData();
      }, []);
        
    //functions of adding/editing/changing-state Tasks
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
    function editTask(id:string, newText: string):void {
        setTasks(tasks.map((task) => {
            if (task._id === id) {
                task.text = newText;
            }
            return task;
        }));
    }

    function changeIsDoneState(id: string):void {
        setTasks(tasks.map((task) => {
            if (id === task._id) {
                task.isDone = !task.isDone;
            }
            return task;
        }));
        axios.put(`${BASE_URL}/${id}`).then(
            (res) => {
              toast.success("Task`s state changed successfully!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            },
            (err) => {
              toast.error("Something gone wrong", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
              setTasks(
                tasks.map((task) => {
                  if (task._id === id) {
                    task.isDone = !task.isDone;
                  }
                  return task;
                })
              );
            }
          );
    }
    //function filtering tasks
    function setFilter(textValue: string): void {
        setFilterState(textValue);
    }

    function filterTasks(): Task[] {
        switch (filterState) {
            case 'all':
                return tasks;
            case 'active':
                return tasks.filter((task) => task.isDone);
            case 'completed':
                return tasks.filter((task) => !task.isDone)
            default:
                return tasks;
        }
    }
    // Functions of deleting task/tasks
    function deleteTask(id: string):void {


        


        axios.delete(`${BASE_URL}/${id}`).then((res) => {
                 setTasks(tasks.filter((task) => task._id !== id));
                });
    }
    function deleteCompletedTasks(): void {

        const deletingTasks = tasks.filter((task) => task.isDone);
        deletingTasks.forEach((task) => axios.delete(`${BASE_URL}/${task._id}`));
        setTasks(tasks.filter((task) => !task.isDone));
        setFilterState('all');
    }
 
    return (
        <div className="todo-list">
            <TodoAddingInput addTask={addTask} />
            <div className="todo-item-wrapper">
            {filterTasks().map((task) => {
                return (
                    <TodoItem  key={task._id} task={task} changeIsDoneState={changeIsDoneState} deleteTask={deleteTask} editTask={editTask}/>
                )
            })
            }   
            </div>
            <TodoBottomBar setFilter={setFilter} deleteCompletedTasks={deleteCompletedTasks}/>
        </div>
    )
}