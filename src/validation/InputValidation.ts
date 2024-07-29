import { z } from "zod";

// Validation schema for Personal Information
export const personalInfoSchema = z.object({
  fullName: z.string().nonempty("Full Name is required"),
  dob: z.string().nonempty("Date of Birth is required"),
  nationality: z.string().nonempty("Nationality is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().nonempty("Invalid phone number"),
});

// Validation schema for Travel Preferences
export const travelPreferencesSchema = z.object({
  departureDate: z.string().nonempty("Departure Date is required"),
  returnDate: z.string().nonempty("Return Date is required"),
  accommodation: z.enum(["spaceHotel", "martianBase"]),
  specialRequests: z.string().optional(),
});

// Validation schema for Health and Safety
export const healthSafetySchema = z.object({
  healthDeclaration: z.enum(["yes", "no"]),
  emergencyContact: z.string().nonempty("Emergency Contact is required"),
  medicalConditions: z.string().optional(),
});
