import { useEffect, useState } from "react";
import Home from "./pages/Home";
import desktopBG from "./assets/images/bg-desktop-light.jpg";
import { Todo } from "./types";

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  return (
    <div>
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
