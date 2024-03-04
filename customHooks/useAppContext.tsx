import { Context } from "@/state/ContextProvider";
import { useContext } from "react";

const useAppContext = () => {
  const { dispatch, state, uiState, formState, todoIdToUpdate } =
    useContext(Context)!;
  return { dispatch, state, uiState, formState, todoIdToUpdate };
};
export default useAppContext;
