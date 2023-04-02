import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "9f18215112mshb5f8b662a048d78p1ee5ddjsn451a6dc1856d",
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
};

fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
  .then((response) => response.json())
  .then((response) => console.log("1111111111111111111111111", response))
  .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      console.log(headers);
      headers.set(
        "X-RapidAPI-Key",
        "9f18215112mshb5f8b662a048d78p1ee5ddjsn451a6dc1856d"
      );
      headers.set("X-RapidAPI-Host", "shazam-core.p.rapidapi.com");
      console.log(headers);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/charts/world" }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
