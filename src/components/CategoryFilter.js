import React from "react";
import Button from "./Button";

function CategoryFilter({categories, updateFilterBy}) {
  
  const categoryBtns = categories.map((category) => {
    return <Button key={category} category={category} updateFilterBy={updateFilterBy}/>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryBtns}
    </div>
  );
}

export default CategoryFilter;
