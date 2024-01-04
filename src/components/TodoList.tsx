import React from "react";
import Todo from "./Todo";
import { todo } from "../App";
import { useTodoContext } from "../context/todoContext";

interface todoListProps {
  todoList: todo[];
  deleteTodo: (name: string) => void;
}

const TodoList: React.FC<todoListProps> = ({ todoList, deleteTodo }) => {
  const { todos } = useTodoContext();

  console.log(todos);
  return (
    <div className="bg-light-neutral-very-light-gray h-[350px] shadow-md rounded-md">
      {todos.map((todo) => (
        <Todo {...todo} deleteTodo={deleteTodo} key={todo?.id} />
      ))}
    </div>
  );
};

export default TodoList;
