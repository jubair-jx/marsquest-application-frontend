import { z } from "zod";

// Validation schema for Personal Information

export const personalInfoSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  /// assuming dateOfBirth is handled separately
  nationality: z.string().min(1, "Nationality is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone Number is required"),
});

// Validation schema for Travel Preferences
export const travelPreferencesSchema = z.object({
  accommodation: z.string().min(3, "Accomondation is required"),
  specialRequests: z.string().optional(),
});

// Validation schema for Health and Safety
export const healthSafetySchema = z.object({
  emergencyContact: z.string().nonempty("Emergency Contact is required"),
  medicalConditions: z.string().optional(),
});
