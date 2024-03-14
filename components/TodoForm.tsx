import useAppContext from "@/customHooks/useAppContext";
import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";
import useGetParamsFromUrl from "@/customHooks/useGetParamsFromUrl";

function TodoForm() {
  const { dispatch, state, uiState, todoIdToUpdate, formState } =
    useAppContext();
  const { dateFromUrl } = useGetParamsFromUrl();
  let defaultDate = "asdf";
  const d = new Date();
  if (dateFromUrl) {
    const { date, month, year } = dateFromUrl!;
    d.setDate(Number(date));
    d.setMonth(Number(month));
    d.setFullYear(Number(year));
    defaultDate = `${year}-${month}-${date}T${("0" + d.getHours()).slice(
      -2
    )}:${("0" + d.getMinutes()).slice(-2)}`;
  } else {
    defaultDate = `${d.getFullYear()}-${("0" + (d.getMonth() + 1)).slice(
      -2
    )}-${("0" + d.getDate()).slice(-2)}T${("0" + d.getHours()).slice(-2)}:${(
      "0" + d.getMinutes()
    ).slice(-2)}`;
  }

  const [inputs, setInputs] = useState({
    todo: "",
    description: "",
    time: defaultDate,
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
  useEffect(() => {
    if ((dateFromUrl && todoIdToUpdate.editId) || todoIdToUpdate.editId) {
      const { description, todo } = state.filter(
        (s) => s.id === todoIdToUpdate.editId
      )[0];
      setInputs({
        description: description,
        todo: todo,
        time: defaultDate,
      });
    }
    return () => {
      todoIdToUpdate.setEditId(null);
    };
  }, [todoIdToUpdate.editId]);
  return (
    <form
      onSubmit={handleAddTodo}
      className=" w-full md:w-1/2  p-2 md:p-4 flex flex-col gap-4 text-lg"
    >
      <input
        required
        type="text"
        name="todo"
        id="todo"
        value={inputs.todo}
        onChange={onChange}
        placeholder="What is your Task??"
        className="bg-transparent border border-white rounded p-2 md:w-11/12 text-lg"
      />
      <div className=" flex flex-col w-full md:w-11/12  gap-2 md:gap-4 items-start">
        <label htmlFor="time">Choose time of completion:</label>
        <input
          required
          type="datetime-local"
          value={inputs.time}
          onChange={onChange}
          name="time"
          className="bg-transparent border border-white rounded p-1 w-full"
          id="time"
        />
      </div>
      <textarea
        className="bg-transparent p-2 rounded border border-white md:w-11/12 "
        name="description"
        id="description"
        value={inputs.description}
        onChange={onChange}
        cols={20}
        rows={10}
      ></textarea>
      <button className="bg-white text-black p-2 rounded cursor-pointer md:w-11/12">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
