import { z } from "zod";

export const checkoutSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
  zipCode: z.string().min(3, "Zip code is invalid"),
  tel: z.string().min(10, "Phone number is required"),
  paymentMethod: z.enum(["bank", "cod"], {
    errorMap: () => ({ message: "Please select a payment method" }),
  }),
});