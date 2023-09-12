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
    return await getHistoryById(crypto)
      .then(getLast90Days)
      .then(filterHistory)
      .then((data) => {
        setFetchData({ ...fetchData, [crypto]: [...data] });
      })
      .catch((err) => console.log("ERR ", err));
  };

  useEffect(() => {
    Promise.all([getHistoryData(cryptos[0]), getHistoryData(cryptos[1])])
      .then(() => {
        if (Object.values(fetchData).every((d) => d.length > 1)) {
          setFetchStatus(true);
          console.log(fetchData, " *^*^*^*^*^*^*^*^");
        }
      })
      .catch((err) => console.log(err, " !!!! "));
  }, [fetchStatus]);

  return (
    <Grid item sx={{ width: "100%" }}>
      {fetchStatus && <PriceHistory cryptoData={fetchData} />}
    </Grid>
  );
};

export default HistoryContainer;
