import { Quote } from './quote';

export interface CryptoCurrency {
  id: number;
  cmc_rank: number;
  name: string;
  circulating_supply: number;
  total_supply: number;
  symbol: string;
  quotes?: Quote[];
  quote?: Quote;
}
