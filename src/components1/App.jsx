import { func } from "prop-types";
import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);
  function handleClick() {
    setHeadingText(document.getElementById("demo").innerHTML = "Hello");
  }
  function handleMouseOver(){
    setMouseOver(true);
  }
  function handleMouseOut(){
    setMouseOver(false);
  }

  return (
    <div className="container">
    <h1 id="demo">{headingText}</h1>
      <input type="text" placeholder="Enter your name"/>
      <button onClick={handleClick} 
      onMouseOver={handleMouseOver} 
      onMouseOut={handleMouseOut}
    
      style={{backgroundColor: isMouseOver ? "red":"blue"}}>Submit</button>
    </div>
  );
}
export default App;
