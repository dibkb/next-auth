"use clinet";

import { CardWrapper } from "@/app/auth/card-wrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome Back 👋"
      backbuttonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      s
    </CardWrapper>
  );
};
