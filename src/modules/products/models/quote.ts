import { Fiat } from './fiat';

export interface Quote {
  [id: string]: Fiat;
}
