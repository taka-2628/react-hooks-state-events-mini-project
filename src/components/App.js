import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskList, setTaskList] = useState(TASKS);
  const [filterBy, setFilterBy] = useState("All");

  function handleClickRemove(taskText){
    const newTaskArr = taskList.filter((task) => {
      return task.text !== taskText
    })
    setTaskList(newTaskArr)
  }

  function updateFilterBy(category){
    setFilterBy(category);
  }

  const filteredTasks = taskList.filter((task) => {
    if ( filterBy === "All" ) {return true};
    return task.category === filterBy
  })

  function handleAddTaskForm(newTask){
    setTaskList([...taskList, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} updateFilterBy={updateFilterBy}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTaskForm}/>
      <TaskList tasks={filteredTasks} onClickRemove={handleClickRemove}/>
    </div>
  );
}

export default App;
