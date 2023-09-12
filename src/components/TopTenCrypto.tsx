import { GeneralisedCryptoTypeList } from "../common/types_interfaces";
import ChartWrapper from "./ChartWrapper";

const TopTenCrypto = ({ cryptoData }: GeneralisedCryptoTypeList) => {
  return (
    <ChartWrapper title="Top 10 Cryptocurrencies" variant="h5">
      {cryptoData.map((crypto, i) => (
        <div key={i}>
          {crypto.rank} - {crypto.name}
        </div>
      ))}
    </ChartWrapper>
  );
};

export default TopTenCrypto;
