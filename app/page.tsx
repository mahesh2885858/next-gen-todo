"use client";

import AddTodoWidget from "@/components/AddTodoWidget";
import CalenderWidget from "@/components/CalenderWidget";
import DateWidget from "@/components/DateWidget";
import UpcomingEventReminder from "@/components/UpcomingEventReminder";

export default function HomePage() {
  return (
    <section className="w-full   h-calc md:h-calcMd flex flex-col gap-4 items-center md:flex-row md:gap-6 md:justify-center">
      <div className="w-full h-1/2 md:h-full border p-8 md:p-12  rounded-md  md:w-1/2 ">
        <DateWidget />
        <AddTodoWidget />
        {/* <UpcomingEventReminder /> */}
        <CalenderWidget />
      </div>
      <div className=" h-1/2 md:h-full flex justify-center items-center  w-full md:w-1/2">
        Coming soon...........!
      </div>
    </section>
  );
}
