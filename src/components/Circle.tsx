import React from "react";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  isDone: boolean;
  toggleTask: any;
};

export const Circle: React.FC<Props> = ({ isDone, toggleTask }: Props) => {
  return (
    <div
      className="circle"
      onClick={() => {
        console.log("handle");
        toggleTask();
      }}
    >
      <span className={`check-icon ${isDone ? "visible" : ""}`}></span>
    </div>
  );
};
