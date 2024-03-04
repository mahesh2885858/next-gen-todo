import useAppContext from "@/customHooks/useAppContext";

export default function AddTodoWidget() {
  const { dispatch, state, uiState, formState, todoIdToUpdate } =
    useAppContext();
  return (
    <div
      onClick={() => {
        uiState.setOverlayShown(true);
        formState.setFormStatus("AddNew");
        todoIdToUpdate.setEditId(null);
      }}
      className={`bg-white transition-all duration-200 ease-linear hover:cursor-pointer mt-4  text-blue-900  dark:text-purple-950 p-2 flex flex-col w-full md:w-1/3 rounded`}
    >
      Add todo {state.length}
      <span className="text-sm">start from here!!</span>
    </div>
  );
}
