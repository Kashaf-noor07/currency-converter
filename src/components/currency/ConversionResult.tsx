interface Props {
  amount: number;
  from: string;
  to: string;
  result: number;
}

export default function CurrencyResult({
  amount,
  from,
  to,
  result,
}: Props) {
  return (
    <div className="mt-10">
      <h1 className="text-xl text-gray-600 font-bold">
        {amount} {from} = {result.toFixed(2)} {to}
      </h1>
    </div>
  );
}


 {/* <CurrencyResult
      amount={amount}
      from={from}
      to={to}
      result={result}
    /> */}