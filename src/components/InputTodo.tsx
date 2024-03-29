import React, { useState } from "react";
import { HomeProps } from "../pages/Home";
import { useTodoContext } from "../context/todoContext";
import { ADD_TODO } from "../constants";
import { TodoType } from "../types";

const InputTodo: React.FC<HomeProps> = () => {
  const [todoName, setTodoName] = useState("");

  const { dispatch } = useTodoContext();

  const onSubmit = () => {
    const todoObj: TodoType = {
      id: Math.random() * (10 - 1) + 1,
      todoName,
      status: false,
    };
    dispatch({ type: ADD_TODO, payload: todoObj });
    setTodoName("");
  };

  return (
    <div className="  w-full flex items-center mt-5 mb-5 relative">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="w-full  "
      >
        <input
          className="pl-14 w-full h-14 font-semibold  rounded-lg shadow-lg bg-background-todo text-text-todo"
          placeholder="Create a new todo..."
          type="text"
          name="todo-name"
          id="todo-name"
          onChange={(e) => setTodoName(e.target.value)}
          value={todoName}
        />
      </form>

      <button
        className="w-6 h-6  border border-border-todo  rounded-full absolute  mx-4"
        onClick={onSubmit}
      ></button>
    </div>
  );
};

export default InputTodo;
