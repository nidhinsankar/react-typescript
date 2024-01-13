import React, { createContext, useContext, useReducer } from "react";
import { filterAll, todoType } from "../constants";
import { todoReducer } from "./todoReducer";

export interface State {
  todos: todoType[];
  filterType: string;
}

export type Action =
  | { type: string; payload: todoType }
  | { type: string; payload: number }
  | { type: string; payload: string };

export interface ContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export interface initialStateType {
  todos: todoType[];
  filterType: string;
  ADDTODO?: (data: todoType) => void;
  DELETETODO?: (id: number) => void;
  TOGGLESTATUS?: (id: number) => void;
  TOGGLEFILTER?: (filter: string) => void;
}

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
