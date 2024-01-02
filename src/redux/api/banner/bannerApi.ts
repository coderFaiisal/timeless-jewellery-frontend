import { baseApi } from "../baseApi";

const bannerApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllBanners: build.query({
      query: (storeId) => ({
        url: `/banners/${storeId}`,
        method: "GET",
      }),
      providesTags: ["banner"],
    }),
  }),
});

export const { useGetAllBannersQuery } = bannerApi;
