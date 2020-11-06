import React from "react";
import "react-toastify/dist/ReactToastify.css";

type ToastProps = {
  id: string;
  deletedMap: any;
};

export const CustomToast: React.FC<ToastProps> = ({
  id,
  deletedMap,
}: ToastProps) => {
  function clickHandler(id: string) {
    deletedMap.set(id, true);
  }

  return (
    <div className="custom-toast">
      Task deleted!
      <button className="undo-btn" onClick={() => clickHandler(id)}>
        undo
      </button>
    </div>
  );
};
