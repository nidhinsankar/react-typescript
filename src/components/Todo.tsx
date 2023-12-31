import React from "react";
import { todo } from "../App";

const Todo: React.FC<todo> = ({ todoName, status }) => {
  return (
    <div className="flex items-center">
      <h2>{todoName}</h2>
      <span>---</span> <p>{status ? "done" : "not done"}</p>
    </div>
  );
};

export default Todo;
