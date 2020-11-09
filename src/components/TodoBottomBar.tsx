import React from "react";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector} from 'react-redux';
import { deleteAllTodos, filterTodo } from '../actions'



export const TodoBottomBar:React.FC = () => {

  const dispatch = useDispatch();
  const tasks = useSelector(state => state.todos);
  const filterTexts = ["all", "active", "completed"];

  function clickHandler(textValue: string): void {
    dispatch(filterTodo(textValue));
    }

    function deleteAll() {
      dispatch(deleteAllTodos(tasks));
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
