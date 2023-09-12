import { SxProps } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";

export const cryptos = ["bitcoin", "ethereum"];

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

export interface HistoryType {
  priceUsd: string;
  time: number;
  date: string; // Date?
}

export interface GeneralisedHistoryType {
  price: number;
  date: string;
}

// export interface GeneralisedHistoryTypeList {
//   cryptoData: GeneralisedHistoryType[];
// }
export interface GeneralisedHistoryTypeObject {
  cryptoData: GeneralisedHistoryTypeData;
}
export type GeneralisedHistoryTypeData = Record<
  HistoryCryptoKeys,
  GeneralisedHistoryType[]
>;

// Record<(keyof HistoryCryptoKeys), GeneralisedHistoryType[] > {
// bitcoin?: GeneralisedHistoryType[];
// ethereum?: GeneralisedHistoryType[];
// }

export type HistoryCryptoKeys = "bitcoin" | "ethereum";
//   bitcoin: string;
//   ethereum: string;
// }

export interface ChildrenProps {
  children: JSX.Element[] | JSX.Element;
}

export interface ChildrenWithOtherProps extends ChildrenProps {
  title?: string;
  // variant: Partial<TypographyOwnProps>;
  variant?: Variant;
  sx?: SxProps;
}
