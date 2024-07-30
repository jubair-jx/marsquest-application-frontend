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

const PersonalInfoForm = () => {
  const [show, setShow] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string | undefined>();

  const handleChange = (selectedDate: any) => {
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString();
      setSelectedDate(formattedDate);
    }
  };

  const handleClose = (state: boolean) => {
    setShow(state);
  };

  const { getItem, setItem } = useLocalStorage();
  const defaultValues = getItem("personalInfo") || {};

  const router = useRouter();

  const handleFormSubmit = async (values: FieldValues) => {
    console.log("Form values:", { ...values, dateOfBirth: selectedDate });
    // setItem("personalInfo", { ...values, dateOfBirth: selectedDate });
    // router.push("/book-seat/travel-prefer");

    try {
      console.log("Form values (try block):", {
        ...values,
        dateOfBirth: selectedDate,
      });
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <RUForm
      resolver={zodResolver(personalInfoSchema)}
      defaultValues={defaultValues}
      onSubmit={handleFormSubmit}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <RUInput type="text" name="fullName" label="Full Name" fullWidth />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <RUDatePicker
            handleClose={handleClose}
            show={show}
            handleValueChange={handleChange}
            label="Date of Birth"
            name="dateOfBirth"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <RUInput
            type="text"
            name="nationality"
            label="Nationality"
            fullWidth
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

export default PersonalInfoForm;
