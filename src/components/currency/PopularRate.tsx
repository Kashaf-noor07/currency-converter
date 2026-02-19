import Link from "next/link";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import LoadingLinkButton from "@/src/components/ui/Button";
import { createClient } from "@/src/prismicio";
import { PrismicRichText } from "@prismicio/react";
import { asText } from "@prismicio/client";





interface Props {
  baseCurrency: string;
  rates: Record<string, number>;
}

export default async function PopularRates({ baseCurrency, rates }: Props) {

const client = createClient();
const page = await client.getSingle("popularratepage");


  const popular = ["AUD", "CAD", "CNH", "EUR", "GBP", "HKD", "JPY", "NZD", "SGD"];

  // Dynamic currency name mapping (you can expand this)
  const currencyNames: Record<string, string> = {
    USD: "United States Dollar $",
    EUR: "Euro €",
    GBP: "British Pound £",
    JPY: "Japanese Yen ¥",
    // Add more as needed
  };
  

  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-linear-to-br from-blue-50 to-blue-100 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
              {currencyNames[baseCurrency] || baseCurrency}
            </h1>
            <PrismicRichText
  field={page.data.hero_description_one}
  components={{
    paragraph: ({ children }) => {
      // Convert entire field to plain text
      const rawText = asText(page.data.hero_description_one);

      // Replace dynamic variable
      const replacedText = rawText.replace(
        /{{Currency}}/g,
        baseCurrency
      );

      return (
        <p className="text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
          {replacedText}
        </p>
      );
    },
  }}
/>
            <LoadingLinkButton href="/" >
           
              <span className="flex items-center gap-2">
                <CurrencyDollarIcon className="w-5 h-5" />
                Compare rates
              </span>
            </LoadingLinkButton>
          </div>

          
          
        </div>
      </section>

      {/* POPULAR RATES SECTION */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          {page.data.hero_title_two && (
  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
    {asText(page.data.hero_title_two).replace(
      /{{Currency}}/g,
      baseCurrency
    )}
  </h2>
)}

{page.data.hero_description_two && (
  <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
    {asText(page.data.hero_description_two).replace(
      /{{Currency}}/g,
      baseCurrency
    )}
  </p>
)}


          {/* Grid Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-8">
            {popular.map((cur) => (
              <Link
                key={cur}
                href={`/convert?from=${baseCurrency}&to=${cur}`}
                className="group bg-gray-50 hover:bg-white border border-gray-200 
                         hover:border-blue-200 rounded-xl py-3 px-3 
                         flex items-center justify-center gap-1.5
                         transition-all duration-200 text-sm md:text-base
                         hover:shadow-md"
              >
                <span className="font-medium text-gray-700 group-hover:text-gray-900">
                  {baseCurrency}
                </span>
                <span className="text-gray-400 group-hover:text-blue-400">→</span>
                <span className="font-medium text-gray-700 group-hover:text-gray-900">
                  {cur}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// import { PrismicRichText } from "@prismicio/react";


