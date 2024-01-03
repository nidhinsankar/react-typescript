import React from "react";
import Todo from "./Todo";
import { todo } from "../App";

interface todoListProps {
  todoList: todo[];
  deleteTodo: (name: string) => void;
}

const TodoList: React.FC<todoListProps> = ({ todoList, deleteTodo }) => {
  return (
    <div className="bg-light-neutral-very-light-gray h-[350px] shadow-md rounded-md">
      {todoList.map((todo) => (
        <Todo {...todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;
