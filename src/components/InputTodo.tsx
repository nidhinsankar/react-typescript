import React, { useState } from "react";
import { todo } from "../App";
import { HomeProps } from "../pages/Home";

const InputTodo: React.FC<HomeProps> = ({ setTodoList, todoList }) => {
  const [todoName, setTodoName] = useState("");

  const onSubmit = () => {
    const todoObj: todo = { todoName, status: false };
    setTodoList([...todoList, todoObj]);
    setTodoName("");
  };

  return (
    <div>
      <div className="flex flex-col w-full">
        <input
          className="border"
          type="text"
          name="todo-name"
          id="todo-name"
          onChange={(e) => setTodoName(e.target.value)}
          value={todoName}
        />
        <button onClick={onSubmit}>add todo</button>
      </div>
    </div>
  );
};

export default InputTodo;
