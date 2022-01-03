import React, {useState} from "react";

function Button ({category, updateFilterBy}){
  const [isClicked, setIsClicked] = useState(false);

  function handleBtnClick(category){
    setIsClicked(!isClicked);
    updateFilterBy(category);
  }

  return <button className={isClicked ? "selected" : ""} onClick={() => handleBtnClick(category)}>{category}</button>
}

export default Button;