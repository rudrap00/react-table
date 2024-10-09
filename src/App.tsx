import { useEffect, useMemo, useState } from "react";
import SliderComponent from "./components/SliderComponent/SliderComponent";
import TableComponent from "./components/TableComponent/TableComponent";
import { MarketData } from "./components/TableComponent/TableComponent.type";
import TableHeader from "./components/TableHeader/TableHeader";
import marketData from "./constants/marketData.json";

function App() {
  const [val, setVal] = useState<number>(10);
  const [value, setValue] = useState<number>(10);
  const [data, setData] = useState<MarketData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  useEffect(() => {
    const sortedData = marketData.sort(
      (a: MarketData, b: MarketData) => a.strike - b.strike
    );

    setData(() =>
      sortedData
        .filter((_: MarketData, i: number) => i % 2 === 0)
        .map((item: MarketData, i: number) => ({
          ...item,
          subRow: [sortedData[i * 2 + 1]],
        }))
    );

    setIsLoading(false);
  }, []);

  const maxValue = useMemo<number>(
    () =>
      data.reduce(
        (acc, item) => Math.max(acc, item.percent_return_1_sigma_max_risk),
        0
      ),
    [data]
  );

  const sortPivot = useMemo<number>(() => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].strike >= 214.29) {
        return i;
      }
    }

    return data.length;
  }, [data]);

  const sortedData = useMemo(() => {
    if (
      sortPivot === 0 ||
      sortPivot === data.length ||
      sortPivot < val / 2 ||
      data.length - sortPivot < val / 2
    ) {
      return data.slice(0, val);
    } else {
      return data.slice(sortPivot - val / 2, sortPivot + val / 2);
    }
  }, [data, sortPivot, val]);

  return (
    <>
      <div className="pt-2 px-4 h-screen flex flex-col">
        <SliderComponent
          value={value}
          val={val}
          showTooltip={showTooltip}
          setValue={setValue}
          setVal={setVal}
          setShowTooltip={setShowTooltip}
        />
        {!isLoading && (
          <div className="relative overflow-hidden flex flex-col">
            <TableHeader />
            <div className="h-128 flex flex-col">
              <TableComponent data={sortedData} maxVal={maxValue} />
            </div>
          </div>
        )}
        {isLoading && <div>Loading Market Data...</div>}
      </div>
    </>
  );
}

export default App;
