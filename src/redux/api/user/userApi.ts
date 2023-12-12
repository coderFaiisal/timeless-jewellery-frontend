import { baseApi } from "@/redux/api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUserProfile: build.query({
      query: () => ({
        url: "/users/my-profile",
        method: "GET",
      }),
    }),

    updateUserProfile: build.mutation({
      query: (updatedData) => ({
        url: "/users/my-profile",
        method: "PATCH",
        data: updatedData,
      }),
    }),

    deleteUserProfile: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
  useDeleteUserProfileMutation,
} = userApi;
