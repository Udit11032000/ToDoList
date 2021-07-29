import React, { useState } from "react";

function toDoList(props) {
  const [line, setLine] = useState(false);

  function lineThrough() {
    setLine(true);
  }

  function styledcomponent() {
    return { textDecoration: line ? "line-through" : "none" };
  }

  return (
    <div onClick={lineThrough}>
      <li style={styledcomponent}>{props.text}</li>
    </div>
  );
}

export default toDoList;
