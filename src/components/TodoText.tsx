import React from "react";

type Props = {
    textValue : string
}

export const TodoText: React.FC<Props> = ({textValue}: Props) => {
    return (
    <span className="todo-text" >{textValue}</span>
    )
}