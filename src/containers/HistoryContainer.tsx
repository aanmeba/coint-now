import { useEffect, useState } from "react";
import PriceHistory from "../components/PriceHistory";
import { getHistoryById } from "../services/api-services";
import { filterHistory, getLast90Days } from "../helpers/helpers";
import {
  GeneralisedHistoryTypeData,
  cryptos,
} from "../common/types_interfaces";
import { Grid } from "@mui/material";

const HistoryContainer = () => {
  const initialValue = [
    {
      price: 0,
      date: "",
    },
  ];

  const initialObjectValue = cryptos.reduce((prev, curr) => {
    return { ...prev, [curr]: initialValue };
  }, {} as GeneralisedHistoryTypeData);

  const [fetchStatus, setFetchStatus] = useState<boolean>(false);
  const [fetchData, setFetchData] =
    useState<GeneralisedHistoryTypeData>(initialObjectValue);

  const getHistoryData = async (crypto: string) => {
    try {
      const historyData = await getHistoryById(crypto);
      const last90DaysData = getLast90Days(historyData);
      const filteredData = filterHistory(last90DaysData);

      setFetchData({
        ...fetchData,
        [crypto]: [...filteredData],
      });
      return filteredData;
    } catch (err) {
      console.log("ERR ", err);
      throw err;
    }
  };

  useEffect(() => {
    const fetchPromises = cryptos.map((crypto) => getHistoryData(crypto));
    Promise.all(fetchPromises)
      .then(() => {
        setFetchStatus(true);
      })
      .catch((err) => console.log(err, " !!!! "));
  }, []);

  return (
    <Grid item sx={{ width: "100%" }}>
      {fetchStatus && <PriceHistory cryptoData={fetchData} />}
    </Grid>
  );
};

export default HistoryContainer;
