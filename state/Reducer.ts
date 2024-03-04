import { TDataState, TActionTypes, TActions } from "@/Types";

const Reducer = (state: TDataState[], actions: TActions): TDataState[] => {
  const workingState = [...state];
  const { title, todo } = actions.data;
  switch (actions.type) {
    case "ADD-TODO":
      workingState.push({
        createdAt: new Date(),
        id: String(Date.now()),
        name: title,
        todo: todo,
        updatedAt: new Date(),
      });
      return workingState;
    case "EDIT-TODO":
      const { todoId } = actions.data;
      return workingState.map((item, index) => {
        if (item.id !== todoId) return item;
        return {
          ...item,
          name: title,
          todo: todo,
          updatedAt: new Date(),
        };
      });
    default:
      return state;
  }
};
export default Reducer;
