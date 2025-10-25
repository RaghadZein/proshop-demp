import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants.js";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Product", "Order"],
  endpoints: (builder) => ({}),
  // getProductById: builder.query({
  //   query: (id) => `${PRODUCTS_URL}/${id}`,
  // }),
  // createOrder: builder.mutation({
  //   query: (orderData) => ({
  //     url: ORDERS_URL,
  //     method: "POST",
  //     body: orderData,
  //   }),
  //     }),
  //   }),
});
export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useCreateOrderMutation,
} = apiSlice;
