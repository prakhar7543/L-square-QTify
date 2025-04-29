import React from "react";
import "./button.css";

export default function Button ({name}){
    return (
        <div className="Button">
        <button>{name}</button>
        </div>
    )
}