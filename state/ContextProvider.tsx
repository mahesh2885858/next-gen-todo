import React, { createContext, useReducer, useState } from "react";
import type { TContext, TDataState, TFormState } from "@/Types";
import Reducer from "./Reducer";
const initState: TDataState = {
  createdAt: new Date(),
  id: "",
  toBeCompletedBy: new Date(),
  todo: "",
  updatedAt: new Date(),
};
export const Context = createContext<TContext | null>(null);
const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(Reducer, []);
  const [showOverlay, setShowOVerlay] = useState(false);
  const [formStatus, setFormStatus] = useState<"AddNew" | "UpdateTodo">(
    "AddNew"
  );
  const [editId, setEditId] = useState<string | null>(null);
  const uiState = {
    overlayShown: showOverlay,
    setOverlayShown: setShowOVerlay,
  };
  const formState = {
    formStatus,
    setFormStatus,
  };
  const editState = {
    editId,
    setEditId,
  };
  return (
    <Context.Provider
      value={{
        dispatch,
        state,
        uiState,
        formState,
        todoIdToUpdate: editState,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default ContextProvider;
