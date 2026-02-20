import { createClient } from "@/src/prismicio";
import { PrismicRichText } from "@prismicio/react";
import { fetchRates } from "@/src/lib/exchange";
import { convertCurrency } from "@/src/lib/convert";
import CurrencyForm from "@/src/components/currency/CurrencyForm";

import LoadingLinkButton from "@/src/components/ui/Button";

import {
  ExclamationCircleIcon,
  ArrowTurnDownRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

interface HomePageProps {
  searchParams: Promise<{
    from?: string;
    to?: string;
    amount?: string;
  }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;

  const from = params.from || "USD";
  const to = params.to || "PKR";
  const amount = Number(params.amount ?? 0);

  const client = createClient();
  const homepage = await client.getSingle("homepage");

  const data = await fetchRates(from);

  const currencies = Object.keys(data.conversion_rates);

  const result = convertCurrency(
    amount,
    data.conversion_rates[from],
    data.conversion_rates[to],
  );
 

  return (
    <main className="min-h-screen bg-gray-100">
     
      <section className="bg-blue-100 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <PrismicRichText
            field={homepage.data.hero_title}
            components={{
              heading1: ({ children }) => (
                <h1 className="text-4xl font-bold text-gray-800">{children}</h1>
              ),
            }}
          />

          <PrismicRichText
            field={homepage.data.hero_description}
            components={{
              paragraph: ({ children }) => (
                <p className="mt-4 text- text-gray-600">{children}</p>
              ),
            }}
          />
        </div>
      </section>

     
      <section className="relative -mt-16 flex justify-center px-4">
        <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <PrismicRichText
              field={homepage.data.hero_title_two}
              components={{
                heading3: ({ children }) => (
                  <h3 className="text-xl font-semibold text-gray-800">
                    {children}
                  </h3>
                ),
              }}
            />

            <PrismicRichText
              field={homepage.data.hero_title_three}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-gray-500 text-sm">{children}</p>
                ),
              }}
            />
          </div>

        

          <CurrencyForm currencies={currencies} result={result} />

          <div className="mt-10 flex items-center gap-2 text-gray-600">
            <span className="text-lg font-semibold">1.00 USD = 0.74 GBP</span>
            <ExclamationCircleIcon className="w-5 h-5 text-blue-500" />
          </div>

          <div className="flex justify-end mt-2">
            <LoadingLinkButton href={`/convert?currency=${from}`} className="w-1/2">
              View all {from} rates →
            </LoadingLinkButton>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-2xl px-10">
          <PrismicRichText
            field={homepage.data.info_title}
            components={{
              heading2: ({ children }) => (
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  {children}
                </h2>
              ),
            }}
          />

          <PrismicRichText
            field={homepage.data.info_description}
            components={{
              paragraph: ({ children }) => (
                <p className="text-gray-600 leading-relaxed mb-6">{children}</p>
              ),
            }}
          />

          <div className="flex items-center gap-2">
            <button className="inline-flex items-center cursor-pointer gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition">
              <ArrowTurnDownRightIcon className="w-5 h-5 text-white" />
              Find out more
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
