import { useEffect, useState } from "react";
import Home from "./pages/Home";
import desktopLightBG from "./assets/images/bg-desktop-light.jpg";
import desktopDarkBG from "./assets/images/bg-desktop-dark.jpg";
import mobileLightBG from "./assets/images/bg-mobile-light.jpg";
import mobileDarkBG from "./assets/images/bg-mobile-dark.jpg";
import { Todo } from "./types";
import { useThemeContext } from "./context/ThemeContext";

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const { state } = useThemeContext();
  console.log(isMobile);

  const handleResize = () => {
    if (window.innerWidth < 680) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <img
        src={
          state?.theme === "light"
            ? isMobile
              ? mobileLightBG
              : desktopLightBG
            : isMobile
            ? mobileDarkBG
            : desktopDarkBG
        }
        alt="background-image"
        className="w-full h-[250px] absolute top-0 -z-20"
      />
      <Home todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
