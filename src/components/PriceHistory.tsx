import { Line } from "react-chartjs-2";
import {
  // GeneralisedHistoryTypeList,
  GeneralisedHistoryTypeObject,
  HistoryCryptoKeys,
  cryptos,
} from "../common/types_interfaces";
import { useEffect, useState } from "react";
import { Chart, ChartData, registerables } from "chart.js";
import ChartWrapper from "./ChartWrapper";

Chart.register(...registerables);

const PriceHistory = ({ cryptoData }: GeneralisedHistoryTypeObject) => {
  const [result, setResult] = useState<ChartData<"line">>({ datasets: [] });
  // const configDataSet = {
  //   label: "Price Tracker",
  //   fill: false,
  // };

  console.log("cryptoData ---- ", cryptoData);

  const labels = (key: HistoryCryptoKeys) => cryptoData[key].map((e) => e.date);
  const dataInDatasets = (key: HistoryCryptoKeys) =>
    cryptoData[key].map((c) => c.price);

  useEffect(() => {
    try {
      cryptos.forEach((crypto, i) => {
        console.log(crypto, " ** crypto");
        const newDataset = {
          label: crypto,
          data: dataInDatasets(crypto as HistoryCryptoKeys),
          yAxisID: `y${i}`,
        };

        const newDatasets = [...result.datasets, newDataset];
        setResult({
          labels: labels(crypto as HistoryCryptoKeys),
          datasets: newDatasets,
        });
        // setResult({
        //   labels: labels(crypto as HistoryCryptoKeys),
        //   datasets: [
        //     ...result.datasets,
        //     {
        //       label: crypto,
        //       data: dataInDatasets(crypto as HistoryCryptoKeys),
        //       yAxisID: `y${i}`,
        //     },
        //   ],
        // });
      });
    } catch (err) {
      console.log("Caught error", err);
    }
  }, []);

  console.log(result, " ---- result ");
  // const config = {
  //   type: "line",
  //   data: data,
  //   options: {
  //     responsive: true,
  //     interaction: {
  //       mode: "index",
  //       intersect: false,
  //     },
  //     stacked: false,
  //     plugins: {
  //       title: {
  //         display: true,
  //         text: "Chart.js Line Chart - Multi Axis",
  //       },
  //     },
  //     scales: {
  //       y0: {
  //         type: "linear",
  //         display: true,
  //         position: "left",
  //       },
  //       y1: {
  //         type: "linear",
  //         display: true,
  //         position: "right",

  //         // grid line settings
  //         grid: {
  //           drawOnChartArea: false, // only want the grid lines for one axis to show up
  //         },
  //       },
  //     },
  //   },
  // };

  return (
    <ChartWrapper title="Price Tracker" variant="h5">
      <Line data={result} />
    </ChartWrapper>
  );
};

export default PriceHistory;
