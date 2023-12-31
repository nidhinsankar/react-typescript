import React, { SetStateAction } from "react";
import InputTodo from "../components/InputTodo";
import TodoList from "../components/TodoList";
import { todo } from "../App";
import Header from "../components/Header";
import { filterCompleted } from "../constants";
export interface HomeProps {
  todoList: todo[];
  setTodoList: React.Dispatch<SetStateAction<todo[]>>;
}

const Home: React.FC<HomeProps> = ({ todoList, setTodoList }) => {
  console.log(todoList);

  return (
    <div className="w-[370px] md:w-[570px] mx-auto">
      <Header />
      <InputTodo setTodoList={setTodoList} todoList={todoList} />
      <TodoList filter={filterCompleted} />
    </div>
  );
};

export default Home;
