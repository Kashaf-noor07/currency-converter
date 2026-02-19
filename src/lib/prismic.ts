import * as prismic from "@prismicio/client"

const repositoryName = process.env.NEXT_PUBLIC_PRISMIC_ENDPOINT!

export const client = prismic.createClient(repositoryName, {
  fetchOptions: {
    next: { revalidate: 60 }
  }
})
