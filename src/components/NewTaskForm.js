import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [ formData, setFormData ] = useState({
    text: "",
    category: "Code"
  })

  function handleChange(event){
    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    const newTask = {
      text: formData.text,
      category: formData.category
    }
    onTaskFormSubmit(newTask);
  }
 

  const options = categories.map((category) => {
    if (category === "All") return false
    return <option key={category}>{category}</option>
  })

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
