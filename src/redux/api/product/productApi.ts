import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: (storeId) => ({
        url: `/products/${storeId}`,
        method: "GET",
      }),
    }),

    getSingleProduct: build.query({
      query: (id) => ({
        url: `/products/single-product/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productApi;
