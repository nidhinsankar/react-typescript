import { useState } from "react";
import moonIcon from "../assets/images/icon-moon.svg";
import sunIcon from "../assets/images/icon-sun.svg";

const Header = ({}) => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="flex justify-between items-center mt-20 text-light-neutral-very-light-gray">
      <h2 className="font-extrabold text-3xl tracking-widest">TODO</h2>
      <img
        src={toggle ? sunIcon : moonIcon}
        onClick={() => setToggle(!toggle)}
        alt="light-icon"
      />
    </header>
  );
};

export default Header;
