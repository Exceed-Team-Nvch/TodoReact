import React from "react";
import { Cancel, Check } from "@material-ui/icons";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../actions";

type Props = {
  textValue: string;
  id: string;
};

export const TodoText: React.FC<Props> = ({ id, textValue }: Props) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLInputElement>(null);
  const [editingTask, setEditingTask] = useState<boolean>(false);
  const [value, setValue] = useState<string>(textValue);

  function inputChange(val: string) {
    setValue(val);
  }

  function spanDbClick() {
    setEditingTask(!editingTask);
  }

  function keyPressHandler(key: string, val: string) {
    if (key === "Enter" && val.trim()) {
      dispatch(editTodo(val, id));
      setEditingTask(!editingTask);
    }
  }

  function cancelEditingTask() {
    setEditingTask(!editingTask);
  }

  return (
    <div className="todo-text-wrapper">
      {!editingTask ? (
        <span className="todo-text" onDoubleClick={() => spanDbClick()}>
          {textValue}
        </span>
      ) : (
        <div className="input-wrapper">
          <input
            ref={ref}
            onChange={(evt) => inputChange(evt.currentTarget.value)}
            value={value}
            onKeyPress={(evt: React.KeyboardEvent<HTMLInputElement>) =>
              keyPressHandler(evt.key, evt.currentTarget.value)
            }
            className="input-item"
          />
          <Check
            fontSize="small"
            onClick={() => {
              keyPressHandler("Enter", value);
            }}
            color="primary"
            className="icon"
          />
          <Cancel
            fontSize="small"
            onClick={() => cancelEditingTask()}
            color="secondary"
            className="icon"
          />
        </div>
      )}
    </div>
  );
};
