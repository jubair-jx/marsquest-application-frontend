"use client";
import RUDatePicker from "@/components/Shared/Form/DatePicker";
import RUForm from "@/components/Shared/Form/RUForm";
import RUInput from "@/components/Shared/Form/RUInput";
import { useLocalStorage } from "@/local-storage/useLocalStorage";
import { travelPreferencesSchema } from "@/validation/InputValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const TravelPreferForm = () => {
  const [departureShow, setDepartureShow] = useState<boolean>(false);
  const [returnShow, setReturnShow] = useState<boolean>(false);
  const [selectedDepDate, setSelectedDepDate] = useState<string | undefined>();
  const [selectedRetDate, setSelectedRetDate] = useState<string | undefined>();

  const handleDeptureDateChange = (selectedDate: any) => {
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString();
      setSelectedDepDate(formattedDate);
    }
  };
  const handleReturnDateChange = (selectedDate: any) => {
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString();
      setSelectedRetDate(formattedDate);
    }
  };

  const handleDepartureClose = (state: boolean) => {
    setDepartureShow(state);
  };
  const handleReturnClose = (state: boolean) => {
    setReturnShow(state);
  };

  const { getItem, setItem } = useLocalStorage();
  const defaultValues = getItem("travelInfo") || {};

  const router = useRouter();

  const handleFormSubmit = async (values: FieldValues) => {
    if (
      selectedDepDate === undefined ||
      selectedDepDate === null ||
      selectedDepDate === ""
    ) {
      toast.info("Please select your Departure Date");
      return;
    }
    if (
      selectedRetDate === undefined ||
      selectedRetDate === null ||
      selectedRetDate === ""
    ) {
      toast.info("Please select your Return Date");
      return;
    }
    setItem("travelInfo", {
      ...values,
      departureDate: selectedDepDate,
      returnDate: selectedRetDate,
    });
    router.push("/book-seat/health-safety");
  };

  return (
    <RUForm
      onSubmit={handleFormSubmit}
      resolver={zodResolver(travelPreferencesSchema)}
      defaultValues={defaultValues}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <RUDatePicker
            handleClose={handleDepartureClose}
            show={departureShow}
            handleValueChange={handleDeptureDateChange}
            label="Departure Date"
            name="departureDate"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <RUDatePicker
            handleClose={handleReturnClose}
            show={returnShow}
            handleValueChange={handleReturnDateChange}
            label="Return Date"
            name="returnDate"
          />
        </Grid>
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

export default TravelPreferForm;
