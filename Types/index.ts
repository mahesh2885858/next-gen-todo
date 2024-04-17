import React from "react";

export type TDataState = {
  id: string;
  description: string;
  todo: string;
  createdAt: Date;
  updatedAt: Date;
  toBeCompletedBy: string;
  isItCompleted: boolean;
  targetDate: {
    day: string;
    month: string;
    year: number;
  };
};
export type TUiState = {
  overlayShown: boolean;
  setOverlayShown: React.Dispatch<React.SetStateAction<boolean>>;
};
export type TActionTypes = {
  "ADD-TODO": "add-todo";
  "EDIT-TODO": "edit-todo";
  "COMPLETE-TODO": "complete-todo";
};
export type TActions = {
  type: keyof TActionTypes;
  data?: any;
};

export type TFormState = {
  formStatus: "AddNew" | "UpdateTodo";
  setFormStatus: React.Dispatch<React.SetStateAction<"AddNew" | "UpdateTodo">>;
};
export type TUpdateTodoId = {
  editId: string | null;
  setEditId: React.Dispatch<React.SetStateAction<string | null>>;
};
export type TContext = {
  state: TDataState[];
  formState: TFormState;
  uiState: TUiState;
  dispatch: React.Dispatch<TActions>;
  todoIdToUpdate: TUpdateTodoId;
};
