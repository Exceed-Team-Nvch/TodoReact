import React from "react";
import Button from '@material-ui/core/Button';

export const TodoBottomBar: React.FC = () => {
    return (
        <div className="todo-bottom-bar">
        <Button  className="btn btn-category" >all</Button>
        <Button  className="btn btn-category" >active</Button>
        <Button  className="btn btn-category" >completed</Button>
        <Button  className="btn clear-btn">clear completed</Button>
        </div>
    )
}