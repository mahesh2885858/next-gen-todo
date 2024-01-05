type SVGProps = {
  IsOpened: boolean;
};
export default function HamMenuWithAnimation(props: SVGProps) {
  const { IsOpened } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      className=" hover:cursor-pointer z-50 relative"
    >
      <rect
        stroke="white"
        className={`text-white rounded-sm transition-all duration-500 stroke-blue-200 fill-blue-200 ${
          IsOpened ? " rotate-45 origin-[50%]" : " "
        }`}
        x={3}
        y={IsOpened ? 12.5 : 7.5}
        height={1}
        width={18}
      ></rect>
      <rect
        className={`text-white rounded-sm stroke-blue-200 duration-500 fill-blue-200 "`}
        x={IsOpened ? 12 : 3}
        y={12.5}
        height={1}
        width={IsOpened ? 1 : 18}
      />{" "}
      <rect
        className={`text-white rounded-sm transition-all duration-500 stroke-blue-200 fill-blue-200 ${
          IsOpened ? " -rotate-45 origin-[50%]" : " "
        }`}
        x={3}
        y={IsOpened ? 12.5 : 17.5}
        height={1}
        width={18}
      />
    </svg>
  );
}
