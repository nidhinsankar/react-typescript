import React from "react";
import Todo from "./Todo";
import { useTodoContext } from "../context/todoContext";
import Footer from "./Footer";

interface todoListProps {}

const TodoList: React.FC<todoListProps> = () => {
  const { todos, filterType } = useTodoContext();

  if (filterType === "all") {
    return (
      <div className="bg-light-neutral-very-light-gray  shadow-lg rounded-md">
        {todos?.map((todo) => (
          <Todo {...todo} key={todo?.id} />
        ))}
        <Footer count={todos?.length} />
      </div>
    );
  }

  if (filterType === "active") {
    const todoList = todos?.filter((todo) => !todo?.status);
    return (
      <div className="bg-light-neutral-very-light-gray  shadow-lg rounded-md">
        {todoList?.map((todo) => {
          return <Todo {...todo} key={todo?.id} />;
        })}
        <Footer count={todoList?.length} />
      </div>
    );
  }

  if (filterType === "completed") {
    const todoList = todos?.filter((todo) => todo?.status);
    return (
      <div className="bg-light-neutral-very-light-gray  shadow-lg rounded-md">
        {todoList.map((todo) => {
          return <Todo {...todo} key={todo?.id} />;
        })}
        <Footer count={todoList.length} />
      </div>
    );
  }
};

export default TodoList;
