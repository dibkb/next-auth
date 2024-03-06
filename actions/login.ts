"use server";
import * as z from "zod";
import { loginSchema } from "@/schemas";

export const login = async (values: z.infer<typeof loginSchema>) => {
  const serverValid = loginSchema.safeParse(values);
  if (!serverValid) {
    return {
      error: "Invalid email",
    };
  }
  return {
    success: "Welcome back",
  };
};
