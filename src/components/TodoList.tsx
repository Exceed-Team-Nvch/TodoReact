import React from "react";
import { useState, useEffect, useCallback } from "react";
import { TodoBottomBar } from "./TodoBottomBar";
import { TodoAddingInput } from "./TodoAddingInput";
import { TodoItem } from "./TodoItem";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Task } from "../interfaces";
import axios from "axios";

export const TodoList: React.FC = () => {




    return (
        <div className="todo-list">
            <TodoAddingInput />
            <TodoItem />
            <TodoBottomBar />
        </div>
    )
}