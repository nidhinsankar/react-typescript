import React from "react";
import { todo } from "../App";
import checkIcon from "../assets/images/icon-check.svg";
import crossIcon from "../assets/images/icon-cross.svg";

interface todoProps extends todo {
  deleteTodo: (name: string) => void;
}

const Todo: React.FC<todoProps> = ({ todoName, status, deleteTodo }) => {
  return (
    <div className="flex items-center justify-between  border-b h-11 px-4">
      <div className="flex items-center">
        <div className="w-6 h-6 rounded-full border-2 flex justify-center items-center">
          {status && (
            <img
              src={checkIcon}
              className="w-1/2 h-1/2 bg-gradient-check "
              alt="check-icon"
            />
          )}
        </div>
        <h2 className="ml-4">{todoName}</h2>
      </div>
      <div>
        <img
          onClick={() => deleteTodo(todoName)}
          src={crossIcon}
          alt="cross-icon"
          className="h-4"
        />
      </div>
    </div>
  );
};

export default Todo;
