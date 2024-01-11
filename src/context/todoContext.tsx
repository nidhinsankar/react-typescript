import React, { createContext, useContext, useReducer } from "react";
import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_FILTER,
  TOGGLE_STATUS,
  filterAll,
  todoType,
} from "../constants";
import { todoReducer } from "./todoReducer";
import {
  Add_Todo,
  Delete_Todo,
  Toggle_Filter,
  Toggle_Status,
} from "./action-type";

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

const initialState: initialStateType = {
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

  const ToggleFilterDispatch = (filter: string) => {
    dispatch(
      Toggle_Filter({ action_type: TOGGLE_FILTER, action_payload: filter })
    );
  };

  return (
    <todoContext.Provider
      value={{
        todos: state.todos,
        filterType: state.filterType,
        ADDTODO: AddTodoDispatch,
        DELETETODO: DeleteTodoDispatch,
        TOGGLESTATUS: ToggleStatusDispatch,
        TOGGLEFILTER: ToggleFilterDispatch,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(todoContext);
};
