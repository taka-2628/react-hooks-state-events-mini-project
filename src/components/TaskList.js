import React, {useState} from "react";
import Task from "./Task"

function TaskList({tasks}) {
  const [taskList, setTaskList] = useState(tasks);

  function handleClickRemove(taskText){
    const newTaskArr = taskList.filter((task) => {
      return task.text !== taskText
    })
    setTaskList(newTaskArr)
  }

  const listOfTasks = taskList.map((task) => {
    return <Task key={task.text} text={task.text} category={task.category} onClickRemove={handleClickRemove}/>
  })

  return (
    <div className="tasks">
      {listOfTasks}
    </div>
  );
}

export default TaskList;
