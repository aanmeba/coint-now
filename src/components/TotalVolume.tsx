import { ChartData } from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { extractLabel, extractNumber } from "../helpers/helpers";
import { GeneralisedCryptoTypeList } from "../common/types_interfaces";
import ChartWrapper from "./ChartWrapper";

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
    <ChartWrapper
      title="Total Volumn"
      variant="h5"
      sx={{ width: "100%", backgroundColor: "yellow" }}
    >
      <Bar data={result} />
    </ChartWrapper>
  );
};

export default TotalVolume;
