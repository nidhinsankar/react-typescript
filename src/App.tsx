import { useEffect, useState } from "react";
import Home from "./pages/Home";
import desktopBG from "./assets/images/bg-desktop-light.jpg";
export interface todo {
  id: number;
  todoName: string;
  status: boolean;
}

function App() {
  const [todoList, setTodoList] = useState<todo[]>([]);

  const [theme, setTheme] = useState<null | string>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)".matches)) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    console.log("handle clickeed");

    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      console.log("add");
    } else {
      console.log("remove");
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  console.log(theme);

  return (
    // <div className="bg-light-neutral-very-light-gray dark:bg-dark-neutral-very-dark-blue h-screen">
    <div className="">
      {/* <button className="absolute z-20 top-0" onClick={handleThemeSwitch}>
        toggle
      </button> */}
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
