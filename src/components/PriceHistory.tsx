import { Line } from "react-chartjs-2";
import { GeneralisedHistoryTypeList } from "../common/types_interfaces";
import { useEffect, useState } from "react";
import { Chart, ChartData, registerables } from "chart.js";

Chart.register(...registerables);

const PriceHistory = ({ cryptoData }: GeneralisedHistoryTypeList) => {
  const [result, setResult] = useState<ChartData<"line">>({ datasets: [] });
  const configDataSet = {
    label: "Price Tracker",
    fill: false,
  };

  const labels = cryptoData.map((e) => e.date);
  const dataInDatasets = cryptoData.map((c) => c.price);

  useEffect(() => {
    try {
      setResult({
        labels,
        datasets: [{ data: dataInDatasets, ...configDataSet }],
      });
    } catch (err) {
      console.log("Caught error", err);
    }
  }, []);

  return (
    <>
      <Line data={result} />
    </>
  );
};

export default PriceHistory;
