"use client";
import * as z from "zod";
import { CardWrapper } from "@/app/auth/card-wrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerSchema } from "@/schemas";
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
import { Button } from "../ui/button";
import { LoginError } from "./login-error";
import { LoginSucces } from "./login-success";
import { login } from "@/actions/login";
import { useState, useTransition } from "react";
export const RegisterForm = () => {
  const [successMessage, setSuccessMessage] = useState<string | undefined>("");
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    setErrorMessage("");
    setSuccessMessage("");
    startTransition(async () => {
      //   login(values).then((res) => {
      //     setSuccessMessage(res.success);
      //     setErrorMessage(res.error);
      //   });
    });
  };
  return (
    <CardWrapper
      headerLabel="Register Now 🎃"
      backbuttonLabel="Already have an account?"
      backButtonHref="/auth/login"
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="John Doe"
                    type="text"
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
          <LoginError message={errorMessage} />
          <LoginSucces message={successMessage} />
          <Button
            className="mt-4"
            variant="default"
            size={"lg"}
            disabled={isPending}
          >
            Create an account
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
