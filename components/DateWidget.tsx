"use client";

import { useEffect, useState } from "react";

export default function DateWidget() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((p) => p + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <span className=" bg-white relative text-blue-900 dark:bg-white dark:text-purple-950 p-2 flex flex-col w-full md:w-1/3 rounded">
      <span
        title="The world is still intact!!"
        className=" absolute h-3 w-3 top-3  right-3   rounded-full bg-blue-950 dark:bg-purple-950 animate-pulse "
      ></span>
      <span className="md:text-2xl text-xl">
        {new Intl.DateTimeFormat("en-IN", { weekday: "short" }).format(
          new Date()
        )}
      </span>
      <span>
        {new Intl.DateTimeFormat("en-IN", {
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",

          hour12: false,
        }).format(new Date())}
      </span>
    </span>
  );
}
