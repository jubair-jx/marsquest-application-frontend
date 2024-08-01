"use client";
import { createApplicant } from "@/actions/createApplicant";
import RUForm from "@/components/Shared/Form/RUForm";
import RUInput from "@/components/Shared/Form/RUInput";
import { useLocalStorage } from "@/local-storage/useLocalStorage";
import { healthSafetySchema } from "@/validation/InputValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Grid } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const HealthSafetyForm = () => {
  const { getItem, setItem } = useLocalStorage();
  const [isLoading, setLoading] = useState<boolean>(false);
  const defaultValues = getItem("healthInfo") || {};
  const [healthDeclaration, setHealthDeclaration] = useState<boolean>(
    defaultValues.healthDeclaration
  );
  const personalInfoData = getItem("personalInfo") || {};
  const travelPreferData = getItem("travelInfo") || {};
  const router = useRouter();
  //main function
  const handleFormSubmit = async (values: FieldValues) => {
    if (healthDeclaration === null || healthDeclaration === undefined) {
      toast.warning(
        "Please accept the health declaration checkbox before submitting."
      );
      return;
    }
    setItem("healthInfo", {
      ...values,
      healthDeclaration,
    });
    const applicantData = {
      ...personalInfoData,
      ...travelPreferData,
      ...values,
      healthDeclaration,
    };
    setLoading(true);
    const res = await createApplicant(applicantData);
    setLoading(true);
    const toastId = toast.loading("Your application is submitting...");
    try {
      if (res?.success === true || res?.statusCode === 200) {
        toast.success(res?.message, { id: toastId });
        setLoading(false);
        router.push("/book-seat/success");
        localStorage.clear();
      } else {
        toast.error(res?.message, { id: toastId });
      }
    } catch (err) {
      console.log(res);
      toast.error(
        res?.message || "Something went wrong, Please try again later",
        { id: toastId }
      );
    }
    // router.push("/book-seat/health-safety");
  };

  return (
    <RUForm
      onSubmit={handleFormSubmit}
      resolver={zodResolver(healthSafetySchema)}
      defaultValues={defaultValues}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <RUInput
            type="text"
            name="emergencyContact"
            label="Emergency Contact Information (ex: Phone Number, Email Address)"
          />
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <RUInput
            type="text"
            name="medicalConditions"
            label="Any Medical Conditions (if applicable)
"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <label className="font-Raleway text-base font-medium">
            Health Declaration
          </label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="true"
                checked={healthDeclaration === true}
                onChange={() => setHealthDeclaration(true)}
                className="form-radio h-5 w-5 text-gray-600"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="false"
                checked={healthDeclaration === false}
                onChange={() => setHealthDeclaration(false)}
                className="form-radio h-5 w-5 text-gray-600"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </Grid>
      </Grid>
      <div className=" space-x-2">
        <Link href={"/book-seat/travel-prefer"}>
          <button className="px-8 font-Kanit text-center mx-auto font-medium mt-3 py-2 text-white text-sm rounded-md bg-orange-600">
            Back
          </button>
        </Link>
        <button
          disabled={isLoading}
          className={`px-8  font-Kanit text-center mx-auto font-medium mt-3 py-2 ${
            isLoading ? "text-gray-50 bg-green-400" : "text-white bg-green-600"
          } text-sm rounded-md `}
          type="submit"
        >
          Submit
        </button>
      </div>
    </RUForm>
  );
};

export default HealthSafetyForm;
