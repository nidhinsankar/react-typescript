import { todoType } from "./constants";

export interface Todo {
  id: number;
  todoName: string;
  status: boolean;
}

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
