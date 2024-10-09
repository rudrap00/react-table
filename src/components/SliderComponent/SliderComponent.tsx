import { Slider } from "@/components/ui/slider";
import { ISliderComponentProps } from "./SliderComponent.type";

const SliderComponent = ({
  value,
  val,
  showTooltip,
  setVal,
  setValue,
  setShowTooltip,
}: ISliderComponentProps) => {
  return (
    <>
      <div className="font-medium">
        <label>Filter</label>
        <div className="relative w-[150px] py-2 flex gap-1">
          0
          <div
            className="absolute bottom-9 px-2 py-1 bg-white text-black border-gray-300 border-[1px] shadow-lg text-sm rounded transition-opacity duration-300 ease-in-out"
            style={{
              left: `${value * 6 + 12}px`,
              opacity: showTooltip ? 1 : 0,
            }}
          >
            {value}
          </div>
          <Slider
            className="w-full"
            onValueChange={(e) => setValue(e[0])}
            onPointerDown={() => setShowTooltip(true)}
            onPointerUp={() => {
              setShowTooltip(false);
              setVal(() => value);
            }}
            min={0}
            max={15}
            defaultValue={[val]}
          />
          15
        </div>
      </div>
    </>
  );
};

export default SliderComponent;
