import useAppContext from "@/customHooks/useAppContext";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";



export default function CalenderWidget() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const [thisMonth, setThisMonth] = useState<number[]>([]);
  const [trackingDate, setTrackingDate] = useState(new Date().getDate());
  const [trackingDay, setTrackingDay] = useState(new Date().getDay());
  const [trackingMonth, setTrackingMonth] = useState(new Date().getMonth() + 1);
  const [trackingYear, setTrackingYear] = useState(new Date().getFullYear());
  const { state } = useAppContext();
  const tasksForThisMonth = state.filter(
    (v, i) =>
      v.targetDate.month === ("0" + trackingMonth).slice(-2) &&
      v.targetDate.year === trackingYear
  );
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
  const container_3 = useRef<HTMLDivElement | null>(null)
  useGSAP(() => {
    gsap.from(container_3.current, { scale: 0, ease: "sine.out", delay: 1.25 })
  }, { scope: container_3 })
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
    <div ref={container_3} className="bg-white p-2 mt-4 gap-2 text-blue-950 dark:text-purple-950 rounded w-full md:w-11/12 grid grid-cols-7 grid-rows-8 col-start-1 row-start-2 col-span-2 row-span-3 justify-self-center ">
      <div className="nav col-start-1 col-span-7 row-start-1 row-span-1 flex w-full my-4  justify-around items-center">
        <span onClick={() => goToPrevOrNextMonth("prev")}>
          <GrFormPrevious className="text-xl hover:cursor-pointer" />
        </span>
        <span onClick={resetCalender}>{months[trackingMonth]}</span>
        <span>{trackingYear}</span>
        <span onClick={() => goToPrevOrNextMonth("next")}>
          <GrFormNext className="text-xl hover:cursor-pointer" />
        </span>
      </div>
      <div className="days col-start-1 col-span-7 row-start-2 pl-4 row-span-1  flex w-full flex-wrap  items-center">
        {days.map((d) => {
          return (
            <span className="flex-1" key={d}>
              {d}
            </span>
          );
        })}
      </div>
      <div className="dates col-start-1 col-span-7 row-start-3 row-span-6 pl-4 flex w-full flex-wrap gap-1 items-center">
        {thisMonth.map((d) => (
          <Link
            href={`/add-todo?date=${d}&month=${trackingMonth}&year=${trackingYear}`}
            title={tasksForThisMonth
              .filter(({ targetDate }) => {
                const { day } = targetDate;
                if (day === ("0" + d).slice(-2)) return true;
                return false;
              })
              .length.toString()}
            className={`${trackingDate === d &&
              trackingMonth === new Date().getMonth() + 1 &&
              trackingYear === new Date().getFullYear()
              ? " dark:bg-purple-400 bg-blue-500 text-white dark:text-black rounded"
              : " "
              } w-[13%] p-1 place-self-center hover:cursor-pointer hover:dark:bg-purple-200`}
          >
            {d ? d : ""}
          </Link>
        ))}
      </div>
    </div>
  );
}
