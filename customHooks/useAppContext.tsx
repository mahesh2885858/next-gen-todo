import { Context } from "@/state/ContextProvider";
import { useContext } from "react";

const useAppContext = () => {
  const { dispatch, state, uiState } = useContext(Context)!;
  return { dispatch, state, uiState };
};
export default useAppContext;
