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
    <section className="w-full h-calc md:h-calcMd flex flex-col gap-4 items-center md:flex-row md:gap-6 md:justify-center">
      <div className="w-full  md:h-full  p-8 md:p-12  rounded-md   ">
        <DateWidget />
        <AddTodoWidget />
        {/* <UpcomingEventReminder /> */}
        <CalenderWidget />
      </div>
      <div>
        <Link href={"/ts-playground"}>TS-playground</Link>
      </div>
      {uiState.overlayShown && (
        <GlobalOverlay overlayInnerComponent={<TodoForm />} />
      )}
    </section>
  );
}
