import { GeneralisedCryptoTypeList } from "../common/types_interfaces";

const TopTenCrypto = ({ cryptoData }: GeneralisedCryptoTypeList) => {
  return (
    <div>
      <h3>Top 10 Cryptocurrencies</h3>
      {cryptoData.map((crypto, i) => (
        <div key={i}>
          {crypto.rank} - {crypto.name}
        </div>
      ))}
    </div>
  );
};

export default TopTenCrypto;
