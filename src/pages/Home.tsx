import React, { SetStateAction } from "react";
import InputTodo from "../components/InputTodo";
import TodoList from "../components/TodoList";
import { todo } from "../App";

export interface HomeProps {
  todoList: todo[];
  setTodoList: React.Dispatch<SetStateAction<todo[]>>;
}

const Home: React.FC<HomeProps> = ({ todoList, setTodoList }) => {
  console.log(todoList);

  return (
    <div>
      <InputTodo setTodoList={setTodoList} todoList={todoList} />
      <TodoList todoList={todoList} />
    </div>
  );
};

export default Home;
