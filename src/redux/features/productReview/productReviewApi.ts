import { baseApi } from "@/redux/api/baseApi";

const productReviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createProductReview: build.mutation({
      query: ({ id, reviewData }) => ({
        url: `productReviews/${id}`,
        method: "POST",
        data: reviewData,
      }),
      invalidatesTags: ["productReview"],
    }),

    updateProductReview: build.mutation({
      query: ({ id, updatedData }) => ({
        url: `productReviews/${id}`,
        method: "PATCH",
        data: updatedData,
      }),
      invalidatesTags: ["productReview"],
    }),

    deleteProductReview: build.mutation({
      query: (id) => ({
        url: `productReviews/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["productReview"],
    }),
  }),
});

export const {
  useCreateProductReviewMutation,
  useUpdateProductReviewMutation,
  useDeleteProductReviewMutation,
} = productReviewApi;
