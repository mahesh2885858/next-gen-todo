"use client";

import AddTodoWidget from "@/components/AddTodoWidget";
import CalenderWidget from "@/components/CalenderWidget";
import DateWidget from "@/components/DateWidget";
import TodoForm from "@/components/TodoForm";
import UpcomingEventReminder from "@/components/UpcomingEventReminder";
import GlobalOverlay from "@/components/globalOverlay";
import useAppContext from "@/customHooks/useAppContext";
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
      {/* <div className=" h-1/2 md:h-full flex flex-col gap-4   border rounded-md p-8 md:p-12 w-full md:w-1/2 overflow-y-scroll">
        {state.map((item, index) => {
          return (
            <div
              onClick={() => {
                uiState.setOverlayShown(true);
                formState.setFormStatus("UpdateTodo");
                todoIdToUpdate.setEditId(item.id);
              }}
              className="border rounded p-2 cursor-pointer"
            >
              {item.name}
            </div>
          );
        })}
      </div> */}
      {uiState.overlayShown && (
        <GlobalOverlay overlayInnerComponent={<TodoForm />} />
      )}
    </section>
  );
}
