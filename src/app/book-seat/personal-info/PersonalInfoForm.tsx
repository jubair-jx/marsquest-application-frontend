"use client";
import { useLocalStorage } from "@/local-storage/useLocalStorage";
import { personalInfoSchema } from "@/validation/InputValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  dob: z.string().min(1, "Date of Birth is required"),
  nationality: z.string().min(1, "Nationality is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Invalid phone number"),
});

const PersonalInfoForm = ({ nextStep, handleChange, formData }: any) => {
  const { getItem, setItem } = useLocalStorage();
  const defaultValues = getItem("personalInfo") || {};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: zodResolver(personalInfoSchema),
  });

  const router = useRouter();

  const onSubmit = (data: any) => {
    setItem("personalInfo", data);
    router.push("/book-seat/travel-prefer");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input id="fullName" {...register("fullName")} />
        {errors.fullName && <p>{errors.fullName.message}</p>}
      </div>
      <div>
        <label htmlFor="dob">Date of Birth</label>
        <input id="dob" type="date" {...register("dob")} />
        {errors.dob && <p>{errors.dob.message}</p>}
      </div>
      <div>
        <label htmlFor="nationality">Nationality</label>
        <input id="nationality" {...register("nationality")} />
        {errors.nationality && <p>{errors.nationality.message}</p>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input id="phone" type="tel" {...register("phone")} />
        {errors.phone && <p>{errors.phone.message}</p>}
      </div>
      <button type="submit">Next</button>
    </form>
  );
};

export default PersonalInfoForm;
