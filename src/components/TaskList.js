import React from "react";
import Task from "./Task"

function TaskList({tasks, onClickRemove}) {
  
  const listOfTasks = tasks.map((task) => {
    return <Task key={task.text} text={task.text} category={task.category} onClickRemove={onClickRemove}/>
  })

  return (
    <div className="tasks">
      {listOfTasks}
    </div>
  );
}

export default TaskList;
