import React from "react";
import "./button.css";

export default function Button ({name, onClick}){
    return (
        <div className="Button" style={{pointerEvents: 'all'}}>
        <button onClick={onClick}>{name}</button>
        </div>
    )
}