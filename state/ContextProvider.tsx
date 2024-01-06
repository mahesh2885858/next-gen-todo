import React, { createContext, useReducer, useState } from "react";
import type { TContext, TDataState } from "@/Types";
import Reducer from "./Reducer";
const initState: TDataState = {
  createdAt: new Date(),
  id: "",
  name: "",
  todo: "",
  updatedAt: new Date(),
};
export const Context = createContext<TContext | null>(null);
const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(Reducer, []);
  const [showOverlay, setShowOVerlay] = useState(false);
  const uiState = {
    overlayShown: showOverlay,
    setOverlayShown: setShowOVerlay,
  };
  return (
    <Context.Provider
      value={{
        dispatch,
        state,
        uiState,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default ContextProvider;
