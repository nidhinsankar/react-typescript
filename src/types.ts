export interface Todo {
  id: number;
  todoName: string;
  status: boolean;
}

export interface TodoType {
  id: number;
  todoName: string;
  status: boolean;
}

export interface State {
  todos: TodoType[];
  filterType: string;
}

export type Action =
  | { type: "ADD_TODO"; payload: TodoType }
  | { type: "DELETE_TODO"; payload: number }
  | { type: "TOGGLE_STATUS"; payload: number }
  | { type: "TOGGLE_FILTER"; payload: string };

export interface ContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export interface initialStateType {
  todos: TodoType[];
  filterType: string;
  ADDTODO?: (data: TodoType) => void;
  DELETETODO?: (id: number) => void;
  TOGGLESTATUS?: (id: number) => void;
  TOGGLEFILTER?: (filter: string) => void;
}
