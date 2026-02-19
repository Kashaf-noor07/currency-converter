import { fetchRates } from "@/src/lib/exchange";
import { convertCurrency } from "@/src/lib/convert";
import PopularRates from "@/src/components/currency/PopularRate";
import DetailedConversion from "@/src/components/currency/ExchangeRateInfo";

interface Props {
  searchParams: Promise<{
    currency?: string;
    from?: string;
    to?: string;
    amount?: string;
  }>;
}

export default async function ConvertPage({ searchParams }: Props) {
  const params = await searchParams;

  const currency = params.currency;
  const from = params.from;
  const to = params.to;
  const amount = Number(params.amount || 1);

  // CASE 1: /convert?currency=USD
  if (currency && !from && !to) {
    const data = await fetchRates(currency);

    return (
      <PopularRates
        baseCurrency={currency}
        rates={data.conversion_rates}
      />
    );
  }

  // CASE 2: /convert?from=USD&to=PKR
  if (from && to) {
    const data = await fetchRates(from);

    const result = convertCurrency(
      amount,
      data.conversion_rates[from],
      data.conversion_rates[to]
    );

    return (
      <DetailedConversion
        from={from}
        to={to}
        amount={amount}
        result={result}
        rate={data.conversion_rates[to]}
      />
    );
  }

  return <div className="p-10">Invalid conversion request</div>;
}
