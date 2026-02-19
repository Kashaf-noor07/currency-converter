export interface ExchangeResponse {
  base_code: string
  conversion_rates: Record<string, number>
}

const BASE_URL = "https://v6.exchangerate-api.com/v6"

export async function fetchRates(base: string) {
  const response = await fetch(
    `${BASE_URL}/${process.env.EXCHANGE_API_KEY}/latest/${base}`,
    {
      next: { revalidate: 60 },
    }
  )

  if (!response.ok) {
    const errorText = await response.text()
    console.error("API Error:", errorText)
    throw new Error("Failed to fetch exchange rates")
  }

  return response.json()
}
