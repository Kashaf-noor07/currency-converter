"use client";

import Image from "next/image";
import { currencyMeta } from "@/src/lib/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/Select";

interface Props {
  value: string;
  onChange: (value: string) => void;
  currencies: string[];
}

export default function CurrencySelect({
  value,
  onChange,
  currencies,
}: Props) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full h-11">
        <SelectValue placeholder="Select currency" />
      </SelectTrigger>
      <SelectContent>
        {currencies.map((currency) => {
          const meta = currencyMeta[currency];
          return (
            <SelectItem key={currency} value={currency}>
              <div className="flex items-center gap-2">
                {meta && (
                  <Image
                    src={`https://flagcdn.com/24x18/${meta.countryCode}.png`}
                    alt={meta.name}
                    width={15}
                    height={10}
                    className="object-cover"
                  />
                )}
                <span className="font-medium text-sm">{currency}</span>
                {meta && (
                  <span className="text-gray-500 text-xs truncate max-w-25">
                    {meta.name}
                  </span>
                )}
              </div>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}