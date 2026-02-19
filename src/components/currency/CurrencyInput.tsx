interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function CurrencyInput({ value, onChange }: Props) {
  return (
    <input
      type="number"
      placeholder="Enter amount"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-gray-200 rounded-md px-4 py-1.5 text-gray-700 
                 placeholder:text-gray-400 focus:outline-none focus:ring-2 
                 focus:ring-blue-500/20 focus:border-gray-400 transition-all"
    />
  );
}