import { z } from 'zod';

export const signupSchema = z.object({
  first_name: z.string()
    .trim() // Removes spaces from the final result
    .min(2, "First name must be at least 2 characters")
    .refine((val) => val.trim().length > 0, "First name cannot be only spaces"),
  
  last_name: z.string()
    .trim()
    .min(2, "Last name must be at least 2 characters")
    .refine((val) => val.trim().length > 0, "Last name cannot be only spaces"),

  email: z.string().email("Invalid email format").toLowerCase().trim(),
  
  password: z.string().trim()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email format").toLowerCase().trim(),
  password: z.string().trim().min(1, "Password is required")
});
