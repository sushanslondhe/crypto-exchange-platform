import { useEffect, useRef } from "react";
import { getKlines } from "../utils/httpClients";
import { ChartManager } from "../utils/ChartManager";
import { KLine } from "../utils/types";

export function TradeView({
  market,
  timeFrame,
}: {
  market: string;
  timeFrame: string;
}) {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartManagerRef = useRef<ChartManager>(null);

  const init = async () => {
    let klineData: KLine[] = [];
    try {
      klineData = await getKlines(
        market,
        timeFrame,
        Math.floor((new Date().getTime() - 1000 * 60 * 60 * 24 * 7) / 1000),
        Math.floor(new Date().getTime() / 1000)
      );
    } catch (e) {}

    if (chartRef) {
      if (chartManagerRef.current) {
        chartManagerRef.current.destroy();
      }
      const chartManager = new ChartManager(
        chartRef.current,
        [
          ...klineData?.map((x) => ({
            close: parseFloat(x.close),
            high: parseFloat(x.high),
            low: parseFloat(x.low),
            open: parseFloat(x.open),
            timestamp: new Date(x.end),
          })),
        ].sort((x, y) => (x.timestamp < y.timestamp ? -1 : 1)) || [],
        {
          background: "#0e0f14",
          color: "white",
        }
      );
      //@ts-ignore
      chartManagerRef.current = chartManager;
    }
  };

  useEffect(() => {
    init();
  }, [market, chartRef, timeFrame]);

  return (
    <>
      <div ref={chartRef} style={{ height: "640px", width: "100%" }}></div>
    </>
  );
}
