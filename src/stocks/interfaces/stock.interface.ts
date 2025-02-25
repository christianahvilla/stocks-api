export interface StockData {
  date: string;
  close: number;
  id: string;
}

export interface StockInfo {
  symbol: string;
  company: string;
  currency: string;
  data: StockData[];
}
