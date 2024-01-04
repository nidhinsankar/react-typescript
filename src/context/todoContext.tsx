import React, { createContext, useContext, useReducer } from "react";
import { todoType } from "../constants";
import { todoReducer } from "./todoReducer";

type initialStateType = todoType[];
type todoProviderProps = {
  children: React.ReactNode;
};

const initialState: initialStateType = [
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
];
const todoContext = createContext<initialStateType>(initialState);

export const TodoProvider: React.FC<todoProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <todoContext.Provider value={{ todos: state, dispatch }}>
      {children}
    </todoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(todoContext);
};
