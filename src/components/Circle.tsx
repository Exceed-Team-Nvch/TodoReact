import React from "react";
import classnames from 'classnames';

type Props = {
    isDone: boolean,
    id: string,
    changeIsDoneState: (id: string) => void
}

export const Circle: React.FC<Props> = ({ isDone, id, changeIsDoneState}: Props) => {

    function clickHandler(id: string) {
        changeIsDoneState(id);
    }

    return (
        <div className="circle" onClick={() => clickHandler(id)}>
            <span className={`check-icon ${(isDone) ? 'visible' : '' }`} ></span>
        </div>
    )
}