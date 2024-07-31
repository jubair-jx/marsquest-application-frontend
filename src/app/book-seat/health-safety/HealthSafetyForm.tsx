"use client";
import RUForm from "@/components/Shared/Form/RUForm";
import RUInput from "@/components/Shared/Form/RUInput";
import { useLocalStorage } from "@/local-storage/useLocalStorage";
import { useCreateApplicantMutation } from "@/redux/api/applicantApi";
import { healthSafetySchema } from "@/validation/InputValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Grid } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const HealthSafetyForm = () => {
  const [createApplicant] = useCreateApplicantMutation();
  const { getItem, setItem } = useLocalStorage();
  const defaultValues = getItem("healthInfo") || {};
  const [healthDeclaration, setHealthDeclaration] = useState<boolean>(
    defaultValues.healthDeclaration
  );
  const personalInfoData = getItem("personalInfo") || {};
  const travelPreferData = getItem("travelInfo") || {};

  const router = useRouter();

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
    console.log(applicantData);
    // const res = await createApplicant(applicantData).unwrap();
    // try {
    //   if (res?.id) {
    //     toast.success("Your application is created successfully!!!");
    //   } else {
    //     // toast.error(
    //     //   res?.message || "Something went wrong, Please try again later"
    //     // );
    //   }
    // } catch (err) {
    //   // console.log(res);
    //   toast.error(
    //     res?.message || "Something went wrong, Please try again later"
    //   );
    // }
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
          className="px-8 font-Kanit text-center mx-auto font-medium mt-3 py-2 text-white text-sm rounded-md bg-green-600"
          type="submit"
        >
          Submit
        </button>
      </div>
    </RUForm>
  );
};

export default HealthSafetyForm;
