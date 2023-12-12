import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userSignUp: build.mutation({
      query: (signUnData) => ({
        url: "/auth/sign-up",
        method: "POST",
        data: signUnData,
      }),
    }),

    userSignIn: build.mutation({
      query: (signInData) => ({
        url: "auth/sign-in",
        method: "POST",
        data: signInData,
      }),
    }),

    changePassword: build.mutation({
      query: (passwordData) => ({
        url: "auth/change-password",
        method: "POST",
        data: passwordData,
      }),
    }),
  }),
});

export const {
  useUserSignUpMutation,
  useUserSignInMutation,
  useChangePasswordMutation,
} = authApi;
