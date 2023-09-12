import { useEffect, useState } from "react";
import { getAllData } from "../services/api-services";
import { filterData } from "../helpers/helpers";
import { GeneralisedCryptoType } from "../common/types_interfaces";
import MarketCap from "../components/MarketCap";
import TotalVolume from "../components/TotalVolume";
import TopTenCrypto from "../components/TopTenCrypto";
import { Grid } from "@mui/material";

const CryptoContainer = () => {
  const initialValues = [
    {
      id: "",
      name: "",
      symbol: "",
      rank: 0,
      price: 0,
      marketCap: 0,
      volume: 0,
    },
  ];
  const [fetchData, setFetchData] =
    useState<GeneralisedCryptoType[]>(initialValues);

  const [fetchStatus, setFetchStatus] = useState<boolean>(false);

  const fetchAllData = async () => {
    const { data } = await getAllData();
    return data;
  };

  useEffect(() => {
    fetchAllData()
      .then((data) => {
        const filteredData = filterData(data);
        setFetchData(filteredData);
        setFetchStatus(true);
      })
      .catch((err) => {
        console.log("** ERROR **", err);
        setFetchStatus(false);
      });
  }, []);

  return (
    <>
      {fetchStatus && (
        <>
          <Grid item>
            <TopTenCrypto cryptoData={fetchData} />
          </Grid>
          <Grid item>
            <MarketCap cryptoData={fetchData} />
          </Grid>
          <Grid item>
            <TotalVolume cryptoData={fetchData} />
          </Grid>
          {/* <Grid item>
            <PriceHistory cryptoData={fetchData} />
          </Grid> */}
        </>
      )}
    </>
  );
};

export default CryptoContainer;
