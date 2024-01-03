import React, { createContext } from "react";
import { todoType } from "../constants";


type initialStateType = todoType[];

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

export const TodoProvider: React.FC = ({ children }) => {
  const [state,dispatch] = 
  return <todoContext.Provider></todoContext.Provider>;
};
