"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function DateWidget() {
  const container = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);
  useGSAP(() => {
    gsap.from([container.current,], { x: -1000, delay: 1, ease: "sine.out" })
  }, { scope: container })
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((p) => p + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div ref={container} className=" bg-white col-span-1 row-span-1 relative text-blue-900 dark:bg-white dark:text-purple-950 p-2 flex flex-col justify-center justify-self-center w-full md:w-4/5 rounded">
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
    </div>
  );
}
