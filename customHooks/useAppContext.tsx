import { Context } from "@/state/ContextProvider";
import { useContext } from "react";

const useAppContext = () => {
  const { dispatch, state } = useContext(Context)!;
  return { dispatch, state };
};
export default useAppContext;
