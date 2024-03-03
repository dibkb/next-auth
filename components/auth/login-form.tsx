"use client";
import * as z from "zod";
import { CardWrapper } from "@/app/auth/card-wrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "../ui/button";
import { LoginError } from "./login-error";
import { LoginSucces } from "./login-success";
import { login } from "@/actions/login";
import { useState, useTransition } from "react";
export const LoginForm = () => {
  const [successMessage, setSuccessMessage] = useState<string | undefined>("");
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    setErrorMessage("");
    setSuccessMessage("");
    startTransition(async () => {
      login(values);
    });
  };
  return (
    <CardWrapper
      headerLabel="Welcome Back 👋"
      backbuttonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      description="
          Today is a new day. It's your day. You shape it. Sign in to start
          managing your projects."
      showSocial
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-y-2"
        >
          <FormField
            disabled={isPending}
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Example@email.com"
                    type="email"
                    className="bg-slate-100 border"
                  ></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            disabled={isPending}
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="At least 8 characters"
                    type="password"
                    className="bg-slate-100 border"
                  ></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <Link
            href={"auth/forgot"}
            className="text-xs hover:underline text-blue-600 font-medium text-right"
          >
            Forgot Password
          </Link>
          <LoginError message={errorMessage} />
          <LoginSucces message={successMessage} />
          <Button variant="default" size={"lg"} disabled={isPending}>
            Log in
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
