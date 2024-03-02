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
        <form onSubmit={form.handleSubmit(() => {})}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe@email.com"></Input>
                </FormControl>
              </FormItem>
            )}
          ></FormField>
        </form>
      </Form>
    </CardWrapper>
  );
};
