import { TDataState, TActionTypes, TActions } from "@/Types";

const Reducer = (state: TDataState[], actions: TActions): TDataState[] => {
  const workingState = [...state];
  switch (actions.type) {
    case "ADD-TODO":
      console.log("Adding a todo");

      return workingState;

    default:
      return state;
  }
};
export default Reducer;
