import { TOGGLE_FILTER, filterOptions } from "../constants";
import { useTodoContext } from "../context/todoContext";

const FilterTab = () => {
  const { dispatch, state } = useTodoContext();

  const toggleFilterDispatch = (name: string) => {
    dispatch({ type: TOGGLE_FILTER, payload: name });
  };

  return filterOptions.map((filter) => (
    <li
      key={filter.value}
      className={
        state?.filterType === filter.value
          ? "filter-btn px-2 text-primary-bright-blue"
          : "filter-btn px-2"
      }
      onClick={() => toggleFilterDispatch(filter.value)}
    >
      {filter.label}
    </li>
  ));
};

export default FilterTab;
