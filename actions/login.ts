"use server";
import * as z from "zod";
import { loginSchema, registerSchema } from "@/schemas";
import bcrypt from "bcrypt";
export const register = async (values: z.infer<typeof registerSchema>) => {
  const serverValid = registerSchema.safeParse(values);
  if (!serverValid.success) {
    return {
      error: "Invalid email",
    };
  }
  const { email, password, name } = serverValid.data;
  const hashPw = bcrypt.hashSync(password, 9);
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return {
      error: "Email already in use",
    };
  }
  // create user
  return {
    success: "Welcome back",
  };
};
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
