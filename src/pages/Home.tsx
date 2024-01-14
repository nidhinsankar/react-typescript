import React, { SetStateAction } from "react";
import InputTodo from "../components/InputTodo";
import TodoList from "../components/TodoList";
import Header from "../components/Header";
import { Todo } from "../types";
export interface HomeProps {
  todoList: Todo[];
  setTodoList: React.Dispatch<SetStateAction<Todo[]>>;
}

const Home: React.FC<HomeProps> = ({ todoList, setTodoList }) => {
  console.log(todoList);

  return (
    <div className="w-[370px] md:w-[570px] mx-auto">
      <Header />
      <InputTodo setTodoList={setTodoList} todoList={todoList} />
      <TodoList />
    </div>
  );
};

export default Home;
