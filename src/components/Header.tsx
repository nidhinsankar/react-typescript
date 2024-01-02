import moonIcon from "../assets/images/icon-moon.svg";
import sunIcon from "../assets/images/icon-sun.svg";

const Header = ({}) => {
  return (
    <header className="flex justify-between items-center mt-20 text-light-neutral-very-light-gray">
      <h2 className="font-extrabold text-3xl tracking-widest">TODO</h2>
      <img src={sunIcon} alt="light-icon" />
    </header>
  );
};

export default Header;
