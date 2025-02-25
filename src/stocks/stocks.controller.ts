import { Controller, Get } from '@nestjs/common';
import { StocksService } from './stocks.service';

@Controller({})
export class StocksController {
  stocksService: StocksService;

  constructor(stocksService: StocksService) {
    this.stocksService = stocksService;
  }

  @Get('/stocks')
  getStocks() {
    return this.stocksService.getStocks();
  }
}
