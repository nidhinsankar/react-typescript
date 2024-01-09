import { todoType } from "../constants";

export interface ActionObj {
  action_type: string;
  action_payload: todoType | number | string;
}

export const Add_Todo = (actionObj: ActionObj) => ({
  type: actionObj.action_type,
  payload: actionObj.action_payload,
});
export const Delete_Todo = (actionObj: ActionObj) => ({
  type: actionObj.action_type,
  payload: actionObj.action_payload,
});
export const Toggle_Status = (actionObj: ActionObj) => ({
  type: actionObj.action_type,
  payload: actionObj.action_payload,
});

export const Toggle_Filter = (actionObj: ActionObj) => ({
  type: actionObj.action_type,
  payload: actionObj.action_payload,
});
