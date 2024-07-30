"use client";
import RUForm from "@/components/Shared/Form/RUForm";
import RUInput from "@/components/Shared/Form/RUInput";
import { useLocalStorage } from "@/local-storage/useLocalStorage";
import { travelPreferencesSchema } from "@/validation/InputValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";

const HealthSafetyForm = () => {
  const { getItem, setItem } = useLocalStorage();
  const defaultValues = getItem("travelInfo") || {};

  const router = useRouter();

  const handleFormSubmit = async (values: FieldValues) => {
    // setItem("travelInfo", {
    //   ...values,
    //   departureDate: selectedDepDate,
    //   returnDate: selectedRetDate,
    // });
    // router.push("/book-seat/health-safety");
  };

  return (
    <RUForm
      onSubmit={handleFormSubmit}
      resolver={zodResolver(travelPreferencesSchema)}
      defaultValues={defaultValues}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <RUInput
            type="text"
            name="accommodation"
            label="Accommodation Preference (ex: Space Hotel, Martian Base)"
          />
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <RUInput
            type="text"
            name="specialRequests"
            label="Special Requests or Preferences"
          />
        </Grid>
      </Grid>
      <button
        className="px-8 font-Kanit text-center mx-auto font-medium mt-3 py-2 text-white text-sm rounded-md bg-violet-500"
        type="submit"
      >
        Next
      </button>
    </RUForm>
  );
};

export default HealthSafetyForm;
