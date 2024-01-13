import React from "react";
import { todo } from "../App";
import checkIcon from "../assets/images/icon-check.svg";
import crossIcon from "../assets/images/icon-cross.svg";
import { useTodoContext } from "../context/todoContext";

const Todo: React.FC<todo> = ({ id, todoName, status }) => {
  const { DELETETODO, TOGGLESTATUS } = useTodoContext();

  return (
    <div className="flex items-center justify-between  border-b border-border-todo h-14 px-4">
      <div className="flex items-center">
        <div
          onClick={() => TOGGLESTATUS(id)}
          className="w-6 h-6 rounded-full border border-border-todo flex justify-center items-center cursor-pointer"
        >
          {status && (
            <img
              src={checkIcon}
              className="w-full h-full rounded-full p-1 bg-gradient-check"
              alt="check-icon"
            />
          )}
        </div>
        <h2 className={status ? "line-through ml-4 text-text-clear" : "ml-4"}>
          {todoName}
        </h2>
      </div>
      <div>
        <img
          onClick={() => DELETETODO(id)}
          src={crossIcon}
          alt="cross-icon"
          className="h-4 text-border-todo"
        />
      </div>
    </div>
  );
};

export default Todo;
