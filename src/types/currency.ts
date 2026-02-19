// export interface CurrencyRate {
//   code: string
//   rate: number
// }

// export interface ConversionResult {
//   from: string
//   to: string
//   amount: number
//   rate: number
//   result: number
// }
export type CurrencyCode = string;

export interface ExchangeRateResponse {
  base_code: CurrencyCode;
  conversion_rates: Record<CurrencyCode, number>;
}
