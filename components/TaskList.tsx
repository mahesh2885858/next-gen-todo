import React from "react";
import useAppContext from "@/customHooks/useAppContext";
import useGetParamsFromUrl from "@/customHooks/useGetParamsFromUrl";
import { TDataState } from "@/Types";
const TaskList = () => {
  const { state, todoIdToUpdate, dispatch } = useAppContext();
  const { dateFromUrl } = useGetParamsFromUrl();
  const formatDate = (date: string) => {
    const d = new Date(date);
    return new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(d);
  };
  let x: TDataState[] = state;
  if (dateFromUrl) {
    const { date, month, year } = dateFromUrl;
    x = state.filter((s) => {
      if (
        String(s.targetDate.day) === String(date) &&
        String(s.targetDate.month) === month &&
        String(s.targetDate.year) === year
      ) {
        return s;
      }
    });
  }
  return (
    <section className=" p-2 w-full md:w-1/2 flex flex-col gap-4  md:h-full max-h-screen overflow-y-auto ">
      {x.map((todo, i) => {
        return (
          <div key={todo.id} className="flex justify-between">
            <div className=" flex gap-2 items-center  grow">
              <input
                type="checkbox"
                className="hidden"
                name={todo.id}
                id={todo.id}
                onChange={(e) => {
                  if (todo.isItCompleted) return;
                  dispatch({
                    type: "COMPLETE-TODO",
                    data: { todoId: todo.id },
                  });
                }}
                checked={todo.isItCompleted}
              />
              <span
                className={`cursor-pointer ${todo.isItCompleted && " italic line-through"}`}
                onClick={() => {
                  todoIdToUpdate.setEditId(todo.id);
                }}
              >
                {todo.todo}
              </span>
            </div>
            <div
              className={`flex gap-2 justify-self-end ${todo.isItCompleted && "hidden"} `}
            >
              <label
                htmlFor={todo.id}
                className="border rounded p-2 cursor-pointer"
                id={todo.id}
              >
                Done
              </label>

              <span className="text-red-500 border rounded p-2">
                {formatDate(todo.toBeCompletedBy)}
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default TaskList;
