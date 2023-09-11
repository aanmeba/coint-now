import {
  CryptoType,
  GeneralisedCryptoType,
  HistoryType,
} from "../common/types_interfaces";

export const extractLabel = (arr: GeneralisedCryptoType[], key: string) =>
  arr.map((crypto) => crypto[key]);

export const extractNumber = (arr: GeneralisedCryptoType[], key: string) =>
  arr.map((crypto) => +crypto[key]);

export const convertToBillion = (str: string) => +str / Math.pow(10, 9);

export const convertToMillion = (str: string) => +str / Math.pow(10, 6);

export const convertToDecimal = (num: number, decimal = 2) =>
  +num.toFixed(decimal);

export const filterData = (arr: CryptoType[]) => {
  const topTenArr = arr.slice(0, 10);
  return topTenArr.map((c) => ({
    id: c.id,
    name: c.name,
    symbol: c.symbol,
    rank: +c.rank,
    price: convertToDecimal(+c.priceUsd, 3),
    marketCap: convertToDecimal(convertToBillion(c.marketCapUsd), 2), // in billion
    volume: convertToDecimal(convertToMillion(c.volumeUsd24Hr), 2),
  })); // in million
};

export const formatDate = (date: string) =>
  new Date(date).toLocaleString("en-AU").split(",")[0];

export const getLast90Days = (arr: HistoryType[]) => arr.slice(-90);

export const filterHistory = (arr: HistoryType[]) => {
  return arr.map((el) => ({
    price: +convertToDecimal(+el.priceUsd),
    date: formatDate(el.date),
  }));
};
