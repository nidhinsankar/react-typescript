import { ADD_TODO, DELETE_TODO, TOGGLE_STATUS, todoType } from "../constants";

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return [
        ...state?.filter((todo: todoType) => todo?.id !== action.payload),
      ];
    case TOGGLE_STATUS:
      return [
        state.map((todo: todoType) =>
          todo?.id === action.payload
            ? { ...todo, status: !todo?.status }
            : todo
        ),
      ];
    default:
      break;
  }
};
