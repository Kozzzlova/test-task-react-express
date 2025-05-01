import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
export const API_URL = import.meta.env.VITE_API_URL
export const baseAppApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ["Bets"],
  endpoints: () => ({}),
})
