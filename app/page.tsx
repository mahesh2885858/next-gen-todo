"use client";

import AddTodoWidget from "@/components/AddTodoWidget";
import CalenderWidget from "@/components/CalenderWidget";
import DateWidget from "@/components/DateWidget";
import useAppContext from "@/customHooks/useAppContext";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ExpenseOverview from "@/components/ExpenseOverview";
export default function HomePage() {
  const { state, uiState, formState, todoIdToUpdate } = useAppContext();
  const link_container = useRef<HTMLAnchorElement | null>(null);
  useGSAP(
    () => {
      gsap.from(link_container.current, { y: 1000, delay: 1.5 });
    },
    { scope: link_container },
  );
  const innerComponents = {};
  return (
    <section className="w-full h-calc md:h-calcMd grid grid-cols-2  md:grid-cols-6 md:grid-rows-5 grid-rows-6 p-4 gap-4">
      <DateWidget />
      <AddTodoWidget />
      {/* <UpcomingEventReminder /> */}
      <CalenderWidget />

      <Link
        href={"/ts-playground"}
        ref={link_container}
        className="bg-white col-span-full md:col-span-2 md:col-start-1 md:row-start-5 row-span-1 relative text-blue-900 dark:bg-white dark:text-purple-950 p-2 flex flex-col justify-center items-center justify-self-center w-full md:w-11/12 rounded"
      >
        <span>TS-playground</span>
      </Link>

      <ExpenseOverview />
      {/* {uiState.overlayShown && (
        <GlobalOverlay overlayInnerComponent={<TodoForm />} />
      )} */}
    </section>
  );
}
