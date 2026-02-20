import Link from "next/link";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import LoadingLinkButton from "@/src/components/ui/Button";

interface Props {
  from: string;
  to: string;
  amount: number;
  result: number;
  rate: number;
}

export default function DetailedConversion({
  from,
  to,
  amount,
  result,
  rate,
}: Props) {
  return (
    <main className="min-h-screen bg-white">

      <section className="bg-blue-100 py-20">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          
          <div className="max-w-xl space-y-6">
            <h1 className="text-4xl font-bold text-gray-800">
              {from} to {to}
            </h1>

            <div className="text-2xl font-semibold text-gray-700">
              {amount} {from} = {result.toFixed(2)} {to}
            </div>

          

            <div className="flex items-center">
              <LoadingLinkButton href="/">
                <span className="flex items-center gap-2">
                  <CurrencyDollarIcon className="w-5 h-5" />
                  Compare rates
                </span>
              </LoadingLinkButton>
            </div>
          </div>

        
          <div className="hidden md:block w-96 h-60 bg-gray-200 rounded-lg opacity-50" />
        </div>
      </section>

    
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            {from} to {to} Exchange Rate
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            The current exchange rate from {from} to {to} is {rate}. This means
            for every 1 {from}, you will receive {rate} {to}.
          </p>

          <div className="bg-white shadow-sm  text-black rounded-lg p-6 text-lg font-medium">
            {amount} {from} converts to {result.toFixed(2)} {to}
          </div>

          <Link
            href={`/convert?currency=${from}`}
            className="text-blue-600 hover:underline"
          >
            View all {from} rates →
          </Link>
        </div>
      </section>
    </main>
  );
}
