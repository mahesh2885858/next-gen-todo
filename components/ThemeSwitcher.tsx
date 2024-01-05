"use client";
import { useEffect, useState } from "react";
type Props = {
  darkMode: boolean;
};
export default function ThemeSwitcher(props: Props) {
  const darkMode = props.darkMode;

  return (
    <svg
      // stroke="red"
      className=""
      viewBox="0 0 48 24"
      height="24"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x={0}
        y={0}
        height={22}
        width={48}
        rx={12}
        className={`${
          darkMode
            ? " fill-purple-950 md:fill-purple-200"
            : "fill-blue-950 md:fill-blue-200"
        } transition-all duration-500 `}
      />
      <circle
        cx={darkMode ? 36 : 12}
        cy={11}
        r={8}
        className={`${
          darkMode
            ? " fill-purple-200 md:fill-purple-800"
            : "fill-blue-200 md:fill-blue-800"
        } transition-all duration-500 `}
      />
    </svg>
  );
}
