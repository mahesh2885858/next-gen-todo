import useAppContext from "@/customHooks/useAppContext";
import Link from "next/link";

export default function AddTodoWidget() {
  const { dispatch, state, uiState, formState, todoIdToUpdate } =
    useAppContext();
  return (
    <Link
      href={"/add-todo"}
      className={`bg-white transition-all duration-200 ease-linear hover:cursor-pointer  text-blue-900 col-span-1 row-span-1 justify-self-center  dark:text-purple-950 p-2 flex flex-col justify-center items-center w-full md:w-4/5 rounded`}
    >
      Add todo {state.length}
      <span className="text-sm">start from here!!</span>
    </Link>
  );
}
