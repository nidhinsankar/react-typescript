import { useState } from "react";
import Home from "./pages/Home";

export interface todo {
  todoName: string;
  status: boolean;
}

function App() {
  const [todoList, setTodoList] = useState<todo[]>([]);

  return (
    <>
      <Home todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}

export default App;
