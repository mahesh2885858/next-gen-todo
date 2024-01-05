import React from "react";

export type TState = {
  id: string;
  name: string;
  todo: string;
  createdAt: Date;
  updatedAt: Date;
};
export type TActionTypes = {
  "ADD-TODO": "add-todo";
};
export type TActions = {
  type: keyof TActionTypes;
  data?: any;
};
export type TContext = {
  state: TState[];
  dispatch: React.Dispatch<TActions>;
};
