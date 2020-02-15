import { Fiat } from './fiat';

export interface CryptoCurrency {
  id: number;
  cmc_rank: number;
  symbol: string;
  fiat: Fiat;
}
