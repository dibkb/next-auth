import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { loginSchema } from "@/schemas";
import { getUserByEmail } from "./utils/user";
export default {
  providers: [
    Credentials({
      name: "Credentials",
      async authorize(credentials, req) {
        const validatedPaths = loginSchema.safeParse(credentials);
        if (validatedPaths.success) {
          const { email, password } = validatedPaths.data;
          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;
          const passwordMatch = await bcrypt.compareSync(
            password,
            user.password
          );
          if (passwordMatch) return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
