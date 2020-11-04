import React from "react";


export const Circle: React.FC = () => {
    return (
        <div className="circle">
            <span className={`check-icon {(completed) ? 'visible' : '' }`} ></span>
        </div>
    )
}