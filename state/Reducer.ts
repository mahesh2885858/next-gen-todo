import { TDataState, TActionTypes, TActions } from "@/Types";

const Reducer = (state: TDataState[], actions: TActions): TDataState[] => {
  const workingState = [...state];
  switch (actions.type) {
    case "ADD-TODO":
      const { description, todo, time } = actions.data;
      const parsedDate = new Date(time);
      workingState.unshift({
        createdAt: new Date(),
        id: String(Date.now()),
        todo: todo,
        updatedAt: new Date(),
        toBeCompletedBy: time,
        description,
        isItCompleted: false,
        targetDate: {
          day: ("0" + parsedDate.getDate()).slice(-2),
          month: ("0" + (parsedDate.getMonth() + 1)).slice(-2),
          year: parsedDate.getFullYear(),
        },
      });
      return workingState;
    case "EDIT-TODO":
      const { todoId, title } = actions.data;
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
