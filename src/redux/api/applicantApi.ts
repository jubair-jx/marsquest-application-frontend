import { tagTypes } from "../tagTypes/tagTypes";
import { baseApi } from "./baseApi";
const AUTH_URL = "/auth";

export const applicantApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createApplicant: build.mutation({
      query: (applicantData) => ({
        url: `/applicant/create-applicant`,
        method: "POST",
        data: applicantData,
      }),
      invalidatesTags: [tagTypes.applicant],
    }),
    getApplicants: build.query({
      query: () => ({
        url: `/applicant`,
        method: "GET",
      }),
      providesTags: [tagTypes.applicant],
    }),
  }),
});

export const { useCreateApplicantMutation, useGetApplicantsQuery } =
  applicantApi;
