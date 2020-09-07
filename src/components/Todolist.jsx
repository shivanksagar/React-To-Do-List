import React from "react";

function toDoList(props) {
  return (
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.itemName}
    </li>
  );
}
export default toDoList;
