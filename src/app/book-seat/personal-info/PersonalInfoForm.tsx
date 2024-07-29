"use client";
import RUForm from "@/components/Shared/Form/RUForm";
import RUInput from "@/components/Shared/Form/RUInput";
import { useLocalStorage } from "@/local-storage/useLocalStorage";
import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";

const PersonalInfoForm = ({ nextStep, handleChange, formData }: any) => {
  const { getItem, setItem } = useLocalStorage();
  const defaultValues = getItem("personalInfo") || {};

  const router = useRouter();

  const handleFormSubmit = async (values: FieldValues) => {
    setItem("personalInfo", values);
    router.push("/book-seat/travel-prefer");

    try {
    } catch (err: any) {
      // console.log(err);
    }
  };
  return (
    <RUForm
      defaultValues={{
        password: "",
        user: {
          name: "",
          email: "",
          username: "",
          bio: "",
          profession: "",
          contactNumber: "",
          address: "",
        },
      }}
      onSubmit={handleFormSubmit}
    >
      <Grid container spacing={2} sx={{}}>
        <Grid item xs={12} sm={12} md={12}>
          <RUInput
            type="text"
            name="fullName"
            sx={{
              fontFamily: "Kanit",

              width: "60%",
              color: "white",
              backgroundColor: "whitesmoke",
              borderRadius: "8px",
            }}
            label="Full Name"
            fullWidth={true}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <RUInput
            type="name"
            name="user.username"
            sx={{
              fontFamily: "Kanit",

              width: "60%",
              color: "white",
              backgroundColor: "whitesmoke",
              borderRadius: "8px",
            }}
            label="Username"
            fullWidth={true}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <RUInput
            type="text"
            name="nationality"
            sx={{
              fontFamily: "Kanit",

              width: "60%",
              color: "white",
              backgroundColor: "whitesmoke",
              borderRadius: "8px",
            }}
            label="Nationality"
            fullWidth={true}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <RUInput
            type="email"
            name="email"
            label="E-mail"
            sx={{
              fontFamily: "Kanit",

              width: "60%",
              color: "white",
              backgroundColor: "whitesmoke",
              borderRadius: "8px",
            }}
            fullWidth={true}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <RUInput
            type="text"
            name="phone"
            label="Phone Number"
            sx={{
              fontFamily: "Kanit",

              width: "60%",
              color: "white",
              backgroundColor: "whitesmoke",
              borderRadius: "8px",
            }}
            fullWidth={true}
          />
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
