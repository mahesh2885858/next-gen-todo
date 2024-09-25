import React from "react";

const ExpenseOverview = () => {
  return (
    <div className="bg-white transition-all duration-200 ease-linear hover:cursor-pointer  text-blue-900 col-span-2 row-span-2 justify-self-center  dark:text-purple-950 p-2 flex flex-col justify-center items-center w-full md:w-4/5 rounded">
      <div>
        <p>Total Buget: RS 100</p>
      </div>
      <div>
        <p>Spent till: RS 100</p>
      </div>
      <div>
        <p>Remaining: RS 0</p>
      </div>
    </div>
  );
};
export default ExpenseOverview;
