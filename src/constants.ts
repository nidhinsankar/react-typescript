export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_STATUS = "TOGGLE_STATUS";
export const TOGGLE_FILTER = "TOGGLE_FILTER";

export type todoType = {
  id: number;
  todoName: string;
  status: false;
};

export const filterAll = "all";
export const filterActive = "active";
export const filterCompleted = "completed";

export const filterOptions = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Completed", value: "completed" },
];
