import React from "react";

export type TDataState = {
  id: string;
  name: string;
  todo: string;
  createdAt: Date;
  updatedAt: Date;
};
export type TUiState = {
  overlayShown: boolean;
  setOverlayShown: React.Dispatch<React.SetStateAction<boolean>>;
};
export type TActionTypes = {
  "ADD-TODO": "add-todo";
};
export type TActions = {
  type: keyof TActionTypes;
  data?: any;
};
export type TContext = {
  state: TDataState[];
  uiState: TUiState;
  dispatch: React.Dispatch<TActions>;
};
