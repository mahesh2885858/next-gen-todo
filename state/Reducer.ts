import { TState, TActionTypes, TActions } from "@/Types";

const Reducer = (state: TState[], actions: TActions): TState[] => {
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
