"use server";
export const createApplicant = async (applicantData: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/applicant/create-applicant`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(applicantData),

      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
};
