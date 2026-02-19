import { NextResponse } from "next/server"
import { fetchRates } from "@/src/lib/exchange"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const base = searchParams.get("base") || "USD"

  try {
    const data = await fetchRates(base)

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch rates" },
      { status: 500 }
    )
  }
}
