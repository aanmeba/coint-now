import { ChartData, Chart, registerables } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { getAllCoins } from "../services/api-services";
import { useEffect, useState } from "react";

Chart.register(...registerables);

interface coinType {
  id: string;
  name: string;
  symbol: string;
  priceUsd: string;
  [key: string]: string;
}

const ChartComp = () => {
  const [result, setResult] = useState<ChartData<"doughnut">>({ datasets: [] });

  const configDataSet = {
    label: "Coin NOW",
    fill: true,
    // lineTension: 0.1,
    // backgroundColor: "rgba(75,192,192,0.4)",
    // borderColor: "rgba(75,192,192,1)",
    // borderCapStyle: "butt",
    // borderDash: [],
    // borderDashOffset: 0.0,
    // borderJoinStyle: "miter",
    // pointBorderColor: "rgba(75,192,192,1)",
    // pointBackgroundColor: "#fff",
    // pointBorderWidth: 1,
    // pointHoverRadius: 5,
    // pointHoverBackgroundColor: "rgba(75,192,192,1)",
    // pointHoverBorderColor: "rgba(220,220,220,1)",
    // pointHoverBorderWidth: 2,
    // pointRadius: 1,
    // pointHitRadius: 10,
  };

  const fetchData = async () => {
    const { data } = await getAllCoins();

    setResult({
      labels: extractData(data, "name"),
      datasets: [{ data: extractPrice(data, "priceUsd"), ...configDataSet }],
    });
  };

  const extractData = (arr: coinType[], key: string) =>
    arr.map((coin) => coin[key]).slice(0, 10);

  const extractPrice = (arr: coinType[], key: string) =>
    arr.map((coin) => +coin[key]).slice(0, 10);

  useEffect(() => {
    try {
      fetchData();
      console.log(result, " ---- result ");
    } catch (err) {
      console.log("ERROR --- ", err);
    }
  }, []);

  return (
    <>
      <Doughnut data={result} />
    </>
  );
};

export default ChartComp;
