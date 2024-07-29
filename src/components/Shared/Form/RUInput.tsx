import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputField = {
  name: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  type?: string;
  label?: string;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
};

const RUInput = ({
  size = "small",
  type = "text",
  label,
  fullWidth,
  name,
  sx,
  placeholder,
  required = true,
}: TInputField) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className=" flex flex-col">
          <label
            className=" font-Raleway text-base mb-1 font-medium"
            htmlFor={label}
          >
            {label}
          </label>
          <TextField
            sx={{ ...sx }}
            placeholder={label}
            required={required}
            {...field}
            label={label}
            type={type}
            variant="outlined"
            size={size}
            fullWidth={fullWidth}
            error={!!error?.message}
            helperText={error?.message}
          />
        </div>
      )}
    />
  );
};

export default RUInput;
