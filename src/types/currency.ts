
export type CurrencyCode = string;

export interface ExchangeRateResponse {
  base_code: CurrencyCode;
  conversion_rates: Record<CurrencyCode, number>;
}
