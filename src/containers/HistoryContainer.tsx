import { useEffect, useState } from "react";
import PriceHistory from "../components/PriceHistory";
import { getHistoryById } from "../services/api-services";
import { filterHistory, getLast90Days } from "../helpers/helpers";
import { GeneralisedHistoryType } from "../common/types_interfaces";

const HistoryContainer = () => {
  const initialValue = [
    {
      price: 0,
      date: "",
    },
  ];
  const [fetchStatus, setFetchStatus] = useState<boolean>(false);
  const [fetchData, setFetchData] =
    useState<GeneralisedHistoryType[]>(initialValue);

  const cryptos = ["bitcoin", "ethereum"];

  useEffect(() => {
    getHistoryById(cryptos[0])
      .then(getLast90Days)
      .then((data) => {
        const result = filterHistory(data);

        return result;
      })
      .then((data) => {
        setFetchData(data);
        setFetchStatus(true);
      })
      .catch((err) => console.log("ERR ", err));
  }, []);
  return <>{fetchStatus && <PriceHistory cryptoData={fetchData} />}</>;
};

export default HistoryContainer;
