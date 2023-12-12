import { baseApi } from "@/redux/api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: (orderData) => ({
        url: "/orders/create-order",
        method: "POST",
        data: orderData,
      }),
    }),

    getAllOrders: build.query({
      query: (storeId) => ({
        url: `/orders/${storeId}`,
        method: "GET",
      }),
    }),

    getSingleOrder: build.query({
      query: (id) => ({
        url: `/orders/single-order/${id}`,
        method: "GET",
      }),
    }),

    updateOrder: build.mutation({
      query: ({ id, updatedData }) => ({
        url: `/orders/${id}`,
        method: "PATCH",
        data: updatedData,
      }),
    }),

    deleteOrder: build.mutation({
      query: (id) => ({
        url: `/orders/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetAllOrdersQuery,
  useGetSingleOrderQuery,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
} = orderApi;
