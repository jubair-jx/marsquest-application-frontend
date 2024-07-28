"use client";
import RUForm from "@/components/Shared/Form/RUForm";
import RUInput from "@/components/Shared/Form/RUInput";
import { userLogin } from "@/services/action/loginUser";
import { storeUserInfo } from "@/services/auth-services";
import { zodResolver } from "@hookform/resolvers/zod";
import PasswordIcon from "@mui/icons-material/Password";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { redirect } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
const validationSchema = z.object({
  email: z.string().min(6, "Must be at least 6 characters long"),
  password: z.string().min(6, "Must be at least 6 characters long"),
});

const LoginPage = () => {
  const onSubmit = async (values: FieldValues) => {
    const res = await userLogin(values);
    try {
      if (res?.data?.accessToken) {
        await userLogin(values);
        toast.success(res?.message);
        storeUserInfo({ accessToken: res?.data?.accessToken });
        redirect("/dashboard/admin/manage-applicant");
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      // toast.error(res?.message);
    }
  };

  return (
    <Box
      sx={{
        px: 4,
        py: 2,
        maxWidth: 600,
        width: "100%",
        border: 2,
        borderColor: "#EEEEEE",
        boxShadow: 0.99,
        borderRadius: 2,
        mx: "auto",
        mt: {
          xs: 2,
          md: 5,
        },
      }}
    >
      <Stack alignItems="center" justifyContent="center">
        <Box
          sx={{
            "& svg": {
              width: 100,
              height: 100,
            },
          }}
        >
          <PasswordIcon sx={{ color: "#FFA62F" }} />
        </Box>
        <Typography
          variant="h5"
          fontWeight={600}
          sx={{ mb: 2, mt: -1.5, fontFamily: "Kanit" }}
        >
          Login
        </Typography>
      </Stack>
      <RUForm
        onSubmit={onSubmit}
        defaultValues={{ email: "", password: "" }}
        resolver={zodResolver(validationSchema)}
      >
        <Grid>
          <Grid item xs={12} sm={12} md={6}>
            <RUInput
              name="email"
              type="email"
              label="E-mail"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <RUInput
              name="password"
              type="password"
              label="Password"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          sx={{
            width: "100%",
            my: 2,
            background: "#DC5F00",
            color: "#FFFF",
            ":hover": {
              background: "#FF9A00",
            },
          }}
        >
          Login
        </Button>
      </RUForm>
    </Box>
  );
};

export default LoginPage;
