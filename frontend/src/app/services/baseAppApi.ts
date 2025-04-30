import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const baseAppApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["Bets"],
  endpoints: () => ({}),
})
