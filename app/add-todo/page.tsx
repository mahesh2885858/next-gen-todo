"use client";

import TaskList from "@/components/TaskList";
import TodoForm from "@/components/TodoForm";

const AddTodo = () => {
  return (
    <div className="p-4 relative rounded-md  md:h-calcMd text-white flex  flex-col md:flex-row  items-center w-full ">
      <TodoForm />
      <TaskList />
    </div>
  );
};

export default AddTodo;
