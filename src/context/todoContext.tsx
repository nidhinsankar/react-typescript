import React, { createContext, useContext, useReducer } from "react";
import { filterAll } from "../constants";
import { todoReducer } from "./todoReducer";
import { ContextProps, State } from "../types";

type todoProviderProps = {
  children: React.ReactNode;
};

const initialState: State = {
  todos: [
    {
      id: 1,
      todoName: "first todo",
      status: false,
    },
    {
      id: 2,
      todoName: "second todo",
      status: false,
    },
    {
      id: 3,
      todoName: "third todo",
      status: false,
    },
  ],
  filterType: filterAll,
};

const todoContext = createContext<ContextProps>({
  state: initialState,
  dispatch: () => {},
});

export const TodoProvider: React.FC<todoProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <todoContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(todoContext);
};
