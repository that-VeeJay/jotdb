import { z } from "zod/v4";

export const RegisterSchema = z
  .object({
    display_name: z.string().min(1, "Display name is required"),
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

export const LoginSchema = z.object({
  email: z
    .email({ message: "Please enter a valid email address" })
    .min(1, { message: "Email is required" })
    .trim(),
  password: z.string().min(1, { message: "Password is required" }),
});
