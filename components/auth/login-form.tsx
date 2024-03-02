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
export const LoginForm = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
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
          onSubmit={form.handleSubmit(() => {})}
          className="flex flex-col gap-y-2"
        >
          <FormField
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
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter password"
                    type="password"
                    className="bg-slate-100 border"
                  ></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
        </form>
      </Form>
    </CardWrapper>
  );
};
