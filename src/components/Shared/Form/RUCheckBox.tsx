import { Controller, useFormContext } from "react-hook-form";

type TYesNoCheckboxProps = {
  name: string;
  label: string;
};

const RUCheckbox = ({ name, label }: TYesNoCheckboxProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={null}
      render={({ field }) => (
        <div className="flex items-center space-x-4">
          <label className="font-Raleway text-base font-medium">{label}</label>
          <label className="flex items-center">
            <input
              type="radio"
              {...field}
              required={true}
              value="true"
              checked={field.value === true}
              onChange={() => field.onChange(true)}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2">Yes</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              {...field}
              value="false"
              required={true}
              checked={field.value === false}
              onChange={() => field.onChange(false)}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2">No</span>
          </label>
        </div>
      )}
    />
  );
};

export default RUCheckbox;
