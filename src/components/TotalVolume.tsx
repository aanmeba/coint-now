import { ChartData } from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { extractLabel, extractNumber } from "../helpers/helpers";
import { GeneralisedCryptoTypeList } from "../common/types_interfaces";

const TotalVolume = ({ cryptoData }: GeneralisedCryptoTypeList) => {
  const [result, setResult] = useState<ChartData<"bar">>({ datasets: [] });

  const configDataSet = {
    label: "Total Volume",
    fill: true,
  };

  useEffect(() => {
    try {
      setResult({
        labels: extractLabel(cryptoData, "symbol"),
        datasets: [
          { data: extractNumber(cryptoData, "volume"), ...configDataSet },
        ],
      });
    } catch (err) {
      console.log("ERROR --- ", err);
    }
  }, []);

  return (
    <>
      <Bar data={result} />
    </>
  );
};

export default TotalVolume;
