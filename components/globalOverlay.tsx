import useAppContext from "@/customHooks/useAppContext";
type Props = {
  overlayInnerComponent: React.ReactNode;
};
const OverLay = (props: Props) => {
  const { uiState } = useAppContext();
  return (
    <div
      onClick={(e) => {
        uiState.setOverlayShown(false);
      }}
      className="absolute h-screen w-screen top-0 bottom-0 left-0 right-0 bg-black z-1000 bg-opacity-70"
    >
      <div className=" flex h-full justify-center items-center">
        <div
          className="  flex w-4/5 md:w-3/5 justify-center items-center z-[2000]"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {props.overlayInnerComponent}
        </div>
      </div>
    </div>
  );
};
export default OverLay;
