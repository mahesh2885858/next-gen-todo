import useAppContext from "@/customHooks/useAppContext";

export default function AddTodoWidget() {
  const { dispatch, state } = useAppContext();
  return (
    <div
      onClick={() => {
        console.log({ state, dispatch });
        dispatch({ type: "ADD-TODO" });
      }}
      className="bg-white hover:cursor-pointer mt-4 relative  text-blue-900  dark:text-purple-950 p-2 flex flex-col w-5/12 md:w-1/4 rounded"
    >
      Add todo {state.length}
      <span className="text-sm">start from here!!</span>
    </div>
  );
}
