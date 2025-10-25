import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice.js";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 600,
    }),
    getProductDetails: builder.query({
      query: (id) => ({
        url: `${PRODUCTS_URL}/${id}`,
      }),
    }),
    // getProductById: builder.query({
    //   query: (id) => `${PRODUCTS_URL}/${id}`,
    // }),
    // createProduct: builder.mutation({
    //   query: (productData) => ({
    //     url: PRODUCTS_URL,
    //     method: "POST",
    //     body: productData,
    //   }),
    // }),
  }),
});
export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useCreateProductMutation,
} = productApiSlice;
