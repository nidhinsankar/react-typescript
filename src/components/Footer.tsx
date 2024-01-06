import { useTodoContext } from "../context/todoContext";

const Footer = () => {
  const { state } = useTodoContext();
  return (
    <div className="flex items-center justify-between text-sm px-4 h-14">
      <p>{state?.length} items left</p>
      <ul className="flex items-center justify-between">
        <li>All</li>
        <li className="px-2">Active</li>
        <li>Completed</li>
      </ul>
      <button>Clear Completed</button>
    </div>
  );
};

export default Footer;
