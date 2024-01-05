import { useEffect, useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
export default function CalenderWidget() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    {
      name: "Jan",
      days: 31,
    },
    {
      name: "Feb",
      days: 28,
    },
    {
      name: "Mar",
      days: 31,
    },
    {
      name: "Apr",
      days: 30,
    },
    {
      name: "May",
      days: 31,
    },
    {
      name: "Jun",
      days: 30,
    },
    {
      name: "Jul",
      days: 31,
    },
    {
      name: "Aug",
      days: 31,
    },
    {
      name: "Sep",
      days: 30,
    },
    {
      name: "Oct",
      days: 31,
    },
    {
      name: "Nov",
      days: 30,
    },
    {
      name: "Dec",
      days: 31,
    },
  ];
  const [thisMonth, setThisMonth] = useState<number[]>([]);
  const [trackingDate, setTrackingDate] = useState(new Date().getDate());
  const [trackingDay, setTrackingDay] = useState(new Date().getDay());
  const [trackingMonth, setTrackingMonth] = useState(new Date().getMonth() + 1);
  const [trackingYear, setTrackingYear] = useState(new Date().getFullYear());
  const getTheFirstAndLastDayOfMonth = (year: number, month: number) => {
    const firstDayOfMonth = new Date(year, month - 1, 1);
    const lastDayOfMonth = new Date(year, month, 0);
    console.log({ firstDayOfMonth, lastDayOfMonth });
    return [firstDayOfMonth, lastDayOfMonth];
  };
  const resetCalender = () => {
    setTrackingDate(new Date().getDate());
    setTrackingDay(new Date().getDay());
    setTrackingMonth(new Date().getMonth() + 1);
    setTrackingYear(new Date().getFullYear());
  };
  const goToPrevOrNextMonth = (dir: "next" | "prev") => {
    if (!dir) return "please provide direction to move";
    if (dir === "next") {
      if (trackingMonth === 12) {
        setTrackingYear((y) => y + 1);
      }
      setTrackingMonth((p) => {
        if (p === 12) {
          return 1;
        }
        return p + 1;
      });
    } else {
      if (trackingMonth === 1) {
        setTrackingYear((y) => y - 1);
      }
      setTrackingMonth((p) => {
        if (p === 1) {
          return 12;
        } else return p - 1;
      });
    }
  };
  useEffect(() => {
    const arr: number[] = [];
    const [f, l] = getTheFirstAndLastDayOfMonth(trackingYear, trackingMonth);
    const day = new Intl.DateTimeFormat("en-IN", { weekday: "short" }).format(
      f
    );
    if (days.indexOf(day) !== 0) {
      let ind = days.indexOf(day);
      for (let i = 1; i <= ind; i++) {
        arr.push(0);
      }
    }
    for (let i = 1; i <= l.getDate(); i++) {
      arr.push(i);
    }

    setThisMonth(arr);
  }, [trackingMonth]);
  return (
    <div className="bg-white p-2 mt-4 gap-2 text-blue-950 dark:text-purple-950 rounded w-4/5 md:w-2/3 flex flex-col ">
      <div className="nav flex w-full  justify-around items-center">
        <span onClick={() => goToPrevOrNextMonth("prev")}>
          <GrFormPrevious className="text-xl hover:cursor-pointer" />
        </span>
        <span onClick={resetCalender}>{trackingMonth}</span>
        <span>{trackingYear}</span>
        <span onClick={() => goToPrevOrNextMonth("next")}>
          <GrFormNext className="text-xl hover:cursor-pointer" />
        </span>
      </div>
      <div className="days pl-4 flex w-full flex-wrap  items-center">
        {days.map((d) => {
          return (
            <span className="w-1/7" key={d}>
              {d}
            </span>
          );
        })}
      </div>
      <div className="dates pl-4 flex w-full flex-wrap gap-1 items-center">
        {thisMonth.map((d) => (
          <span
            className={`${
              trackingDate === d &&
              trackingMonth === new Date().getMonth() + 1 &&
              trackingYear === new Date().getFullYear()
                ? " dark:bg-purple-400 bg-blue-500 text-white dark:text-black rounded"
                : " "
            } w-[13%] p-1 place-self-center hover:cursor-pointer hover:dark:bg-purple-200`}
          >
            {d ? d : ""}
          </span>
        ))}
      </div>
    </div>
  );
}
