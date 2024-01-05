import React, { createContext, useContext, useReducer } from "react";
import { ADD_TODO, DELETE_TODO, TOGGLE_STATUS, todoType } from "../constants";
import { todoReducer } from "./todoReducer";
import { Add_Todo, Delete_Todo, Toggle_Status } from "./action-type";

export type initialStateType = todoType[];

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

  const AddTodoDispatch = (data: todoType) => {
    dispatch(Add_Todo({ action_type: ADD_TODO, action_payload: data }));
  };

  const DeleteTodoDispatch = (id: number) => {
    dispatch(Delete_Todo({ action_type: DELETE_TODO, action_payload: id }));
  };

  const ToggleStatusDispatch = (id: number) => {
    dispatch(Toggle_Status({ action_type: TOGGLE_STATUS, action_payload: id }));
  };

  return (
    <todoContext.Provider
      value={{
        state,
        ADDTODO: AddTodoDispatch,
        DELETETODO: DeleteTodoDispatch,
        TOGGLESTATUS: ToggleStatusDispatch,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(todoContext);
};
