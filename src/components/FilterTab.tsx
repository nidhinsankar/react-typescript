import { filterOptions } from "../constants";
import { useTodoContext } from "../context/todoContext";

const FilterTab = () => {
  const { TOGGLEFILTER, filterType } = useTodoContext();
  return filterOptions.map((filter) => (
    <li
      key={filter.value}
      className={
        filterType === filter.value
          ? "filter-btn px-2 text-primary-bright-blue"
          : "filter-btn px-2"
      }
      onClick={() => TOGGLEFILTER(filter.value)}
    >
      {filter.label}
    </li>
  ));
};

export default FilterTab;
