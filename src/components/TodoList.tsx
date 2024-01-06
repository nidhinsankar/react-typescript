import React from "react";
import Todo from "./Todo";
import { todo } from "../App";
import { useTodoContext } from "../context/todoContext";
import Footer from "./Footer";

interface todoListProps {
  todoList: todo[];
  deleteTodo: (name: string) => void;
}

const TodoList: React.FC<todoListProps> = ({ todoList, deleteTodo }) => {
  const { state } = useTodoContext();

  console.log(state);

  return (
    <div className="bg-light-neutral-very-light-gray  shadow-lg rounded-md">
      {state?.map((todo) => (
        <Todo {...todo} deleteTodo={deleteTodo} key={todo?.id} />
      ))}
      <Footer />
    </div>
  );
};

export default TodoList;
