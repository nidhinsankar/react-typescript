import React from "react";
import FilterTab from "./FilterTab";

type footerProps = {
  count: number;
};

const Footer: React.FC<footerProps> = ({ count }) => {
  return (
    <div className="flex items-center justify-between text-sm px-4 h-14 text-text-footer">
      <p>{count} items left</p>
      <ul className="flex items-center justify-between">
        <FilterTab />
      </ul>
      <button>Clear Completed</button>
    </div>
  );
};

export default Footer;
