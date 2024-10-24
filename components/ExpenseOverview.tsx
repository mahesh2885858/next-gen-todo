import React from "react";

const ExpenseOverview = () => {
  return (
    <div className="bg-white transition-all duration-200 ease-linear hover:cursor-pointer  text-blue-900 col-span-2 row-span-2 justify-self-center  dark:text-purple-950 p-2 flex flex-col justify-center items-center w-full md:w-4/5 rounded">
      <svg viewBox="0 0 32 32" className="w-48 h-48">
        <circle
          r="16"
          cx="16"
          cy="16"
          className="text-blue-100"
          strokeDasharray="100 100"
          strokeWidth="32"
          fill="none"
        />
        <circle
          r="16"
          cx="16"
          cy="16"
          className="text-blue-900"
          strokeDasharray="100 100"
          strokeDashoffset="100"
          strokeWidth="32"
          fill="none"
          transform="rotate(-90 16 16)"
        />
        <circle
          r="16"
          cx="16"
          cy="16"
          className="text-blue-500"
          strokeDasharray="100 100"
          strokeDashoffset="0"
          strokeWidth="32"
          fill="none"
          transform="rotate(-90 16 16)"
        />
        <text
          x="16"
          y="12"
          textAnchor="middle"
          className="fill-current text-blue-900"
        >
          Total Budget
        </text>
        <text
          x="16"
          y="16"
          textAnchor="middle"
          className="fill-current text-blue-900"
        >
          RS 100
        </text>
        <text
          x="8"
          y="28"
          textAnchor="middle"
          className="fill-current text-blue-900"
        >
          Spent
        </text>
        <text
          x="8"
          y="32"
          textAnchor="middle"
          className="fill-current text-blue-900"
        >
          RS 100
        </text>
        <text
          x="24"
          y="28"
          textAnchor="middle"
          className="fill-current text-blue-900"
        >
          Remaining
        </text>
        <text
          x="24"
          y="32"
          textAnchor="middle"
          className="fill-current text-blue-900"
        >
          RS 0
        </text>
      </svg>
    </div>
  );
};
export default ExpenseOverview;
