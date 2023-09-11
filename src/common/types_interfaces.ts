export interface CryptoType {
  id: string;
  name: string;
  symbol: string;
  priceUsd: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  rank: string;
}

export interface GeneralisedCryptoType {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  price: number;
  marketCap: number;
  volume: number;
  [key: string]: string | number;
}

export interface GeneralisedCryptoTypeList {
  cryptoData: GeneralisedCryptoType[];
}
