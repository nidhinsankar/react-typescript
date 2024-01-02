import React from "react";
import Todo from "./Todo";
import { todo } from "../App";

interface todoListProps {
  todoList: todo[];
}

const TodoList: React.FC<todoListProps> = ({ todoList }) => {
  return (
    <div className="bg-light-neutral-very-light-gray h-[350px] shadow-md rounded-md">
      {todoList.map((todo) => (
        <Todo {...todo} />
      ))}
    </div>
  );
};

export default TodoList;
