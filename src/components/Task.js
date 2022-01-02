import React from "react";

function Task( {text, category, onClickRemove}) {

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={()=>{onClickRemove(text)}}>X</button>
    </div>
  );
}

export default Task;
