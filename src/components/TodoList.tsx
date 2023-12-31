import React from "react";
import Todo from "./Todo";
import { todo } from "../App";

interface todoListProps {
  todoList: todo[];
}

const TodoList: React.FC<todoListProps> = ({ todoList }) => {
  return (
    <div>
      {todoList.map((todo) => (
        <Todo {...todo} />
      ))}
    </div>
  );
};

export default TodoList;
