import useAppContext from "@/customHooks/useAppContext";
import React, { useState } from "react";

function TodoForm() {
  const { dispatch, state, uiState, todoIdToUpdate, formState } =
    useAppContext();
  const todo = todoIdToUpdate.editId
    ? state.filter((i) => i.id === todoIdToUpdate.editId)[0]
    : null;
  const [inputs, setInputs] = useState({
    title: todo?.name ?? "",
    todo: todo?.todo ?? "",
  });
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputs((p) => ({ ...p, [name]: value }));
  };
  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formDataObject: { [key: string]: any } = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    if (formState.formStatus === "UpdateTodo") {
      dispatch({
        type: "EDIT-TODO",
        data: { ...formDataObject, todoId: todoIdToUpdate.editId },
      });
      formState.setFormStatus("AddNew");
      return;
    }
    dispatch({ type: "ADD-TODO", data: formDataObject });
  };
  return (
    <div className="p-4 rounded-md bg-white text-black flex flex-col gap-4 justify-center items-center w-full shadow-md ">
      TodoForm
      <form
        onSubmit={handleAddTodo}
        className="flex flex-col justify-center items-center gap-4 w-full"
      >
        <input
          onChange={onChange}
          className="p-2 w-4/5 outline-1 border-2"
          required
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          value={inputs.title}
        />
        <textarea
          className="p-2 w-4/5 outline-1 border-2 resize-none "
          required
          onChange={onChange}
          name="todo"
          id="todo"
          placeholder="Todo"
          rows={10}
          value={inputs.todo}
        />

        <button className="bg-blue-500 text-white dark:text-black px-4 p-2 rounded-sm dark:bg-purple-500 ">
          {formState.formStatus === "AddNew" ? "Add" : "Update"}
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
