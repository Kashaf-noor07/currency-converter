"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

interface Props {
  href: string;
  children: React.ReactNode;
  className? : string;
}

export default function LoadingLinkButton({ href, children, className = ""}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      router.push(href);
    });
  };

  return (
    <button
      onClick={handleClick}
      disabled={isPending}
      className={`px-4 py-2 text-center rounded bg-red-600 hover:bg-red-700 text-white disabled:opacity-70 ${className}`}
    >
      {isPending ? "Processing..." : children}
    </button>
  );
}
