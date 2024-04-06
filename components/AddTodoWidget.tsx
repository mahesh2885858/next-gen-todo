import useAppContext from "@/customHooks/useAppContext";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);
export default function AddTodoWidget() {
  const { dispatch, state, uiState, formState, todoIdToUpdate } =
    useAppContext();
  const container_1 = useRef<HTMLAnchorElement | null>(null)
  const date = new Date()
  const day = ("0" + date.getDate()).slice(-2)
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  useGSAP(() => {
    gsap.from(container_1.current, { y: -1000, ease: "sine.out" })
  }, { scope: container_1 })
  return (
    <Link
      ref={container_1}
      href={`/add-todo?date=${day}&month=${month}&year=${year}`}
      className={`bg-white transition-all duration-200 ease-linear hover:cursor-pointer  text-blue-900 col-span-1 row-span-1 justify-self-center  dark:text-purple-950 p-2 flex flex-col justify-center items-center w-full md:w-4/5 rounded`}
    >
      Add todo {state.length}
      <span className="text-sm">start from here!!</span>
    </Link>
  );
}
