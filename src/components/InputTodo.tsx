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
