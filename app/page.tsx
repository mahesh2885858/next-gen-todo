"use client";

import AddTodoWidget from "@/components/AddTodoWidget";
import CalenderWidget from "@/components/CalenderWidget";
import DateWidget from "@/components/DateWidget";
import TodoForm from "@/components/TodoForm";
import UpcomingEventReminder from "@/components/UpcomingEventReminder";
import GlobalOverlay from "@/components/globalOverlay";
import useAppContext from "@/customHooks/useAppContext";
import Link from "next/link";
export default function HomePage() {
  const { state, uiState, formState, todoIdToUpdate } = useAppContext();
  const innerComponents = {};
  return (
    <section className="w-full h-calc md:h-calcMd grid grid-cols-2  md:grid-cols-6 md:grid-rows-5 grid-rows-6 p-4 gap-4">
      {/* <div className="w-full  md:h-full  p-8 md:p-12  rounded-md col-span-1  "> */}
      <DateWidget />
      <AddTodoWidget />
      {/* <UpcomingEventReminder /> */}
      <CalenderWidget />
      {/* </div> */}
      <div className="bg-white col-span-full md:col-span-2 md:col-start-1 md:row-start-5 row-span-1 relative text-blue-900 dark:bg-white dark:text-purple-950 p-2 flex flex-col justify-center items-center justify-self-center w-full md:w-11/12 rounded ">
        <Link href={"/ts-playground"}>TS-playground</Link>
      </div>
      {uiState.overlayShown && (
        <GlobalOverlay overlayInnerComponent={<TodoForm />} />
      )}
    </section>
  );
}
