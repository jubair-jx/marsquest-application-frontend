"use client";
import RUDatePicker from "@/components/Shared/Form/DatePicker";
import RUForm from "@/components/Shared/Form/RUForm";
import RUInput from "@/components/Shared/Form/RUInput";
import { useLocalStorage } from "@/local-storage/useLocalStorage";
import { personalInfoSchema } from "@/validation/InputValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const TravelPreferForm = () => {
  const [show, setShow] = useState<boolean>(false);
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

  const handleClose = (state: boolean) => {
    setShow(state);
  };

  const { getItem, setItem } = useLocalStorage();
  const defaultValues = getItem("travelPreferences") || {};

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
    // setItem("travelPreferences", { ...values, dateOfBirth: selectedDate });
    // router.push("/book-seat/travel-prefer");
  };

  return (
    <RUForm
      onSubmit={handleFormSubmit}
      resolver={zodResolver(personalInfoSchema)}
      defaultValues={defaultValues}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <RUDatePicker
            handleClose={handleClose}
            show={show}
            handleValueChange={handleDeptureDateChange}
            label="Departure Date"
            name="departureDate"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <RUDatePicker
            handleClose={handleClose}
            show={show}
            handleValueChange={handleReturnDateChange}
            label="Return Date"
            name="returnDate"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <RUInput
            type="text"
            name="accommodation"
            label="Accommodation Preference"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <RUInput type="email" name="email" label="E-mail" />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <RUInput type="text" name="phone" label="Phone Number" />
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
