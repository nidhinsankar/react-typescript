import { useState } from "react";
import Home from "./pages/Home";
import desktopBG from "./assets/images/bg-desktop-light.jpg";
import Header from "./components/Header";
export interface todo {
  todoName: string;
  status: boolean;
}

function App() {
  const [todoList, setTodoList] = useState<todo[]>([]);

  return (
    <div className="">
      <img
        src={desktopBG}
        alt="desktopBG"
        className="w-full h-[250px] absolute top-0 -z-20"
      />
      <Home todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
