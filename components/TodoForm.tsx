import useAppContext from "@/customHooks/useAppContext";
import React, { useState } from "react";
import TaskList from "./TaskList";

function TodoForm() {
  const { dispatch, state, uiState, todoIdToUpdate, formState } =
    useAppContext();
  const todo = todoIdToUpdate.editId
    ? state.filter((i) => i.id === todoIdToUpdate.editId)[0]
    : null;
  const [inputs, setInputs] = useState({
    todo: "",
    desc: "",
    time: "",
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
    console.log({ formDataObject });
    dispatch({ type: "ADD-TODO", data: formDataObject });
  };
  return (
    <form
      onSubmit={handleAddTodo}
      className=" w-full md:w-1/2  p-2 md:p-4 flex flex-col gap-4 text-lg"
    >
      <input
        type="text"
        name="todo"
        id="todo"
        value={inputs.todo}
        onChange={onChange}
        placeholder="What is your Task??"
        className="bg-transparent border border-white rounded p-2 w-11/12 text-lg"
      />
      <div className=" flex gap-2 md:gap-4 items-center">
        <label htmlFor="time">Choose time of completion:</label>
        <input
          type="datetime-local"
          value={inputs.time}
          onChange={onChange}
          name="time"
          className="bg-transparent border border-white rounded p-1"
          id="time"
        />
      </div>
      <textarea
        className="bg-transparent p-2 rounded border border-white"
        name="desc"
        id="desc"
        value={inputs.desc}
        onChange={onChange}
        cols={20}
        rows={10}
      ></textarea>
      <button className="bg-white text-black p-2 rounded cursor-pointer">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
