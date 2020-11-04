import React from "react";
import Button from '@material-ui/core/Button';

type Props = {
    setFilter: (textValue: string) => void,
    deleteCompletedTasks: () => void
}

export const TodoBottomBar: React.FC<Props> = ({ setFilter, deleteCompletedTasks }: Props) => {

    const filterTexts = ['all','active','completed'];

    function clickHandler(textValue: string):void {
        setFilter(textValue);
    }

    function onClicker() {
        deleteCompletedTasks();
    }

    return (
        <div className="todo-bottom-bar">
        {filterTexts.map((item,index) => (<Button key={index} className="btn btn-category" onClick={(evt) => clickHandler(item)}>{item}</Button>))}
        <Button  className="btn clear-btn" onClick={onClicker}>clear completed</Button>
        </div>
    )
}