import React from "react";
import {  useDispatch } from 'react-redux';
import "react-toastify/dist/ReactToastify.css";
import { toggleTodo } from '../actions'

type Props = {
  id: string;
  isDone: boolean;
};

export const Circle: React.FC<Props> = ({ isDone , id}: Props) => {

  const dispatch = useDispatch();

  function toggleTask() {
    dispatch(toggleTodo(id));
  }

  return (
    <div
      className="circle"
      onClick={() => {
        toggleTask();
      }}
    >
      <span className={`check-icon ${isDone ? "visible" : ""}`}></span>
    </div>
  );
};
