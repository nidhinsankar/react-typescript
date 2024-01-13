import { useEffect, useState } from "react";
import moonIcon from "../assets/images/icon-moon.svg";
import sunIcon from "../assets/images/icon-sun.svg";

const Header = ({}) => {
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
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "");
    }
  }, [theme]);
  return (
    <header className="flex justify-between items-center mt-20 text-light-neutral-very-light-gray">
      <h2 className="font-extrabold text-3xl tracking-widest">TODO</h2>
      <img
        src={theme === "dark" ? sunIcon : moonIcon}
        onClick={() => handleThemeSwitch()}
        alt="toggle-icon"
        className="cursor-pointer"
      />
    </header>
  );
};

export default Header;
