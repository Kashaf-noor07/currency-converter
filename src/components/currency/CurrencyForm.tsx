"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import CurrencyInput from "./CurrencyInput";
import CurrencySelect from "./CurrencySelect";

interface Props {
  currencies: string[];
  result: number;
}

export default function CurrencyForm({ currencies, result }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("PKR");

  useEffect(() => {
    const urlAmount = searchParams.get("amount");
    if (urlAmount !== null) setAmount(urlAmount);
    setFrom(searchParams.get("from") || "USD");
    setTo(searchParams.get("to") || "PKR");
  }, [searchParams]);

  // Auto update with debounce
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace(`/?from=${from}&to=${to}&amount=${amount}`);
    }, 300);
    return () => clearTimeout(timeout);
  }, [amount, from, to, router]);

  const swapCurrencies = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-wrap lg:flex-nowrap">
      {/* Amount Input */}
      <div className="w-full sm:min-w-[140px] sm:flex-1">
        <CurrencyInput value={amount} onChange={setAmount} />
      </div>

      {/* From Currency */}
      <div className="w-full sm:min-w-[160px] sm:flex-1">
        <CurrencySelect
          value={from}
          onChange={setFrom}
          currencies={currencies}
        />
      </div>

      {/* Swap Button */}
      <button
        onClick={swapCurrencies}
        className="self-center text-xl text-gray-500 hover:text-gray-700 transition-colors 
                   rotate-90 sm:rotate-0 px-2"
        aria-label="Swap currencies"
      >
        ⇄
      </button>

      {/* To Currency */}
      <div className="w-full sm:min-w-[160px] sm:flex-1">
        <CurrencySelect
          value={to}
          onChange={setTo}
          currencies={currencies}
        />
      </div>

      {/* Result Display */}
      <div className="w-full sm:min-w-[140px] sm:flex-1">
        <input
          type="text"
          value={result.toFixed(2)}
          disabled
          className="w-full border rounded-md px-4 py-1.5 bg-gray-50 text-gray-600 
                     focus:outline-none cursor-default text-base"
          readOnly
        />
      </div>
    </div>
  );
}