import { todoType } from "../constants";

export interface ActionObj {
  type: string;
  payload: todoType | number | string;
}

export const Add_Todo = (actionObj: ActionObj) => ({
  action_type: actionObj.type,
  action_payload: actionObj.payload,
});
export const Delete_Todo = (actionObj: ActionObj) => ({
  action_type: actionObj.type,
  action_payload: actionObj.payload,
});
export const Toggle_Status = (actionObj: ActionObj) => ({
  action_type: actionObj.type,
  action_payload: actionObj.payload,
});

export const Toggle_Filter = (actionObj: ActionObj) => ({
  action_type: actionObj.type,
  action_payload: actionObj.payload,
});
