import React from "react";
import useAppContext from "@/customHooks/useAppContext";
const TaskList = () => {
  const { state } = useAppContext();
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(date);
  };
  return (
    <section className=" p-2 w-full md:w-1/2 h-full overflow-y-auto ">
      {state.map((todo, i) => {
        return (
          <div key={todo.id} className="flex justify-between">
            <div className=" flex gap-2 items-center  grow">
              <input type="checkbox" name={todo.id} id={todo.id} />
              <span>{todo.todo}</span>
            </div>
            <div className="flex gap-1 justify-self-end ">
              <label
                htmlFor={todo.id}
                className="border rounded p-2 cursor-pointer"
                id={todo.id}
              >
                Done
              </label>

              <span className="text-red-500 border rounded p-2">
                {todo.toBeCompletedBy}
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default TaskList;
