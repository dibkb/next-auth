"use server";
import * as z from "zod";
import { loginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";
import { AuthError } from "next-auth";
import { getUserByEmail } from "@/utils/user";

export const login = async (values: z.infer<typeof loginSchema>) => {
  const serverValid = loginSchema.safeParse(values);
  if (!serverValid.success) {
    return {
      error: "Invalid email ",
    };
  }
  const { email, password } = serverValid.data;
  const existingUser = await getUserByEmail(email);
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Email does not exist!" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default: {
          return { error: "Something went wrong" };
        }
      }
    }
    throw error;
  }
};
