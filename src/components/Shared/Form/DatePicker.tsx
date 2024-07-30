import { Controller, useFormContext } from "react-hook-form";
import Datepicker from "tailwind-datepicker-react";

type TRUDatePicker = {
  name: string;
  label: string;
  handleValueChange: any;
  value?: any;
  show: boolean;
  handleClose: any;
};

const RUDatePicker = ({
  name,
  label,
  handleValueChange,
  value,
  show,
  handleClose,
}: TRUDatePicker) => {
  const options = {
    title: { label },
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    clearBtnText: "Clear",
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: {
      background: "bg-gray-700 dark:bg-gray-800",
      todayBtn: "",
      clearBtn: "",
      icons: "",
      text: "",
      disabledText: "bg-red-500",
      input: "",
      inputIcon: "",
      selected: "",
    },
    icons: {
      prev: () => <span>Previous</span>,
      next: () => <span>Next</span>,
    },
    datepickerClassNames: "top-12",
    defaultDate: new Date("2022-01-01"),
    language: "en",
    disabledDates: [],
    weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    inputNameProp: "date",
    inputIdProp: "date",
    inputPlaceholderProp: "Select Date",
    inputDateFormatProp: {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
  };
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <label
            className=" font-Raleway text-base mb-1 font-medium"
            htmlFor={"dob"}
          >
            {label}
          </label>
          <Datepicker
            classNames="w-4/6"
            onChange={handleValueChange}
            show={show}
            setShow={handleClose}
          />{" "}
          {error?.message && (
            <p className="text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">{error?.message}</span>
            </p>
          )}
        </>
      )}
    ></Controller>
  );
};

export default RUDatePicker;
