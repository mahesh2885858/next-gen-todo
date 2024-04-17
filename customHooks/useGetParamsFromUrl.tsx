import { redirect, useSearchParams } from "next/navigation";
import React from "react";

const useGetParamsFromUrl = () => {
  const { get } = useSearchParams();
  let date = get("date");
  let month = get("month");
  const year = get("year");
  if (!date || !month || !year) return redirect("/");
  month = ("0" + month).slice(-2);
  date = ("0" + date).slice(-2);

  return { dateFromUrl: { date, month, year } };
};

export default useGetParamsFromUrl;
