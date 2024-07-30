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
  const [selectedDate, setSelectedDate] = useState();
  const handleChange = (selectedDate: Date) => {
    setSelectedDate(selectedDate);
    console.log(selectedDate);
  };
  const handleClose = (state: boolean) => {
    setShow(state);
  };
  const { getItem, setItem } = useLocalStorage();
  const defaultValues = getItem("personalInfo") || {};

  const router = useRouter();

  const handleFormSubmit = async (values: FieldValues) => {
    // console.log({ values, dateOfBirth });
    // setItem("personalInfo", { ...values, dateOfBirth });
    // router.push("/book-seat/travel-prefer");

    try {
    } catch (err: any) {
      // console.log(err);
    }
  };
  return (
    <RUForm
      resolver={zodResolver(personalInfoSchema)}
      defaultValues={defaultValues}
      onSubmit={handleFormSubmit}
    >
      <Grid container spacing={2} sx={{}}>
        <Grid item xs={12} sm={12} md={12}>
          <RUInput
            type="text"
            name="fullName"
            label="Full Name"
            fullWidth={true}
          />
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
            fullWidth={true}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <RUInput type="email" name="email" label="E-mail" />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <RUInput type="text" name="phone" label="Phone Number" />
        </Grid>
      </Grid>{" "}
      <button
        className="px-8 font-Kanit text-center mx-auto  font-medium mt-3 py-2 text-white text-sm rounded-md bg-violet-500"
        type="submit"
      >
        Next
      </button>
    </RUForm>
  );
};

export default PersonalInfoForm;
