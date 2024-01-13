import React, { useState } from "react";
import { todo } from "../App";
import { HomeProps } from "../pages/Home";
import { useTodoContext } from "../context/todoContext";

const InputTodo: React.FC<HomeProps> = ({ setTodoList, todoList }) => {
  const [todoName, setTodoName] = useState("");

  const { ADDTODO } = useTodoContext();

  const onSubmit = () => {
    const todoObj: todo = {
      id: Math.random() * (10 - 1) + 1,
      todoName,
      status: false,
    };
    ADDTODO(todoObj);
    setTodoName("");
  };

  return (
    <div className="flex items-center  w-full relative mt-5 mb-5 ">
      <input
        className="pl-14 w-full h-14 font-semibold  rounded-lg shadow-lg bg-background-todo text-text-todo"
        placeholder="Create a new todo..."
        type="text"
        name="todo-name"
        id="todo-name"
        onChange={(e) => setTodoName(e.target.value)}
        value={todoName}
      />
      <button
        className="w-6 h-6  border border-border-todo  rounded-full absolute  mx-4"
        onClick={onSubmit}
      ></button>
    </div>
  );
};

export default InputTodo;
