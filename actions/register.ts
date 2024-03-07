"use server";
import { db } from "@/lib/db";
import * as z from "zod";
import { registerSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/utils/user";
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
  const newUser = await db.user.create({
    data: {
      name,
      email,
      password: hashPw,
    },
  });
  if (newUser) {
    return {
      success: `Account successfully created for ${newUser.id}`,
    };
  } else {
    return {
      error: `Account could not be created`,
    };
  }
};
