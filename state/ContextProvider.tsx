import React, { createContext, useReducer } from "react";
import type { TContext, TState } from "@/Types";
import Reducer from "./Reducer";
const initState: TState = {
  createdAt: new Date(),
  id: "",
  name: "",
  todo: "",
  updatedAt: new Date(),
};
export const Context = createContext<TContext | null>(null);
const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(Reducer, []);

  return (
    <Context.Provider value={{ dispatch, state }}>{children}</Context.Provider>
  );
};
export default ContextProvider;
