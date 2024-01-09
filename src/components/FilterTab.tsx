import { filterOptions } from "../constants";
import { useTodoContext } from "../context/todoContext";

const FilterTab = () => {
  const { TOGGLEFILTER } = useTodoContext();
  return filterOptions.map((filter) => (
    <li
      key={filter.value}
      className="filter-btn px-2"
      onClick={() => TOGGLEFILTER(filter.value)}
    >
      {filter.label}
    </li>
  ));
};

export default FilterTab;
