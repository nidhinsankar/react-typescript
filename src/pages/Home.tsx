import React, { SetStateAction } from "react";
import InputTodo from "../components/InputTodo";
import TodoList from "../components/TodoList";
import { todo } from "../App";
import Header from "../components/Header";
export interface HomeProps {
  todoList: todo[];
  setTodoList: React.Dispatch<SetStateAction<todo[]>>;
}

const Home: React.FC<HomeProps> = ({ todoList, setTodoList }) => {
  console.log(todoList);

  const deleteTodo = (name: string) => {
    const filterTodo = todoList?.filter((todo) => todo.todoName !== name);
    setTodoList(filterTodo);
  };

  return (
    <div className="w-[370px] md:w-[570px] mx-auto">
      <Header />
      <InputTodo setTodoList={setTodoList} todoList={todoList} />
      <TodoList todoList={todoList} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Home;
