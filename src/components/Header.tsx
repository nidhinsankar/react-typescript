import { useEffect, useState } from "react";
import moonIcon from "../assets/images/icon-moon.svg";
import sunIcon from "../assets/images/icon-sun.svg";
import { useThemeContext } from "../context/ThemeContext";

const Header = ({}) => {
  // const [theme, setTheme] = useState<null | string>(null);
  const { state, dispatch } = useThemeContext();

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      dispatch({ type: "INITIAL_THEME", payload: "dark" });
    } else {
      dispatch({ type: "INITIAL_THEME", payload: "light" });
    }
  }, []);

  const handleThemeSwitch = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  useEffect(() => {
    if (state?.theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "");
    }
  }, [state.theme]);
  return (
    <header className="flex justify-between items-center mt-20 text-light-neutral-very-light-gray">
      <h2 className="font-extrabold text-3xl tracking-widest">TODO</h2>
      <img
        src={state.theme === "dark" ? sunIcon : moonIcon}
        onClick={() => handleThemeSwitch()}
        alt="toggle-icon"
        className="cursor-pointer"
      />
    </header>
  );
};

export default Header;
