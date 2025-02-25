import { Injectable } from '@nestjs/common';
import { StockInfo } from './interfaces/stock.interface';
import { v4 as uuid } from 'uuid';

const APPLE_DATA = {
  symbol: 'AAPL',
  company: 'Apple Inc.',
  currency: 'USD',
  data: [
    { id: uuid(), date: '2023-03-01', close: 164.9 },
    { id: uuid(), date: '2023-04-01', close: 169.6 },
    { id: uuid(), date: '2023-05-01', close: 180.09 },
    { id: uuid(), date: '2023-06-01', close: 193.97 },
    { id: uuid(), date: '2023-07-01', close: 196.45 },
    { id: uuid(), date: '2023-08-01', close: 181.99 },
    { id: uuid(), date: '2023-09-01', close: 170.69 },
    { id: uuid(), date: '2023-10-01', close: 173.0 },
    { id: uuid(), date: '2023-11-01', close: 189.95 },
    { id: uuid(), date: '2023-12-01', close: 192.53 },
    { id: uuid(), date: '2024-01-01', close: 174.55 },
    { id: uuid(), date: '2024-02-01', close: 178.29 },
  ],
};

@Injectable()
export class StocksService {
  private stockInfo: StockInfo = APPLE_DATA;
  getStocks(): StockInfo {
    return this.stockInfo;
  }
}
