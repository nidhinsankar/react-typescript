import { todoType } from "../constants";

interface todoObj {
  action_type: string;
  action_payload: todoType | number;
}

export const Add_Todo = ({ action_type, action_payload }: todoObj) => ({
  type: action_type,
  payload: action_payload,
});
export const Delete_Todo = ({ action_type, action_payload }: todoObj) => ({
  type: action_type,
  payload: action_payload,
});
export const Toggle_Status = ({ action_type, action_payload }: todoObj) => ({
  type: action_type,
  payload: action_payload,
});
