"use client";

import { Social } from "@/components/auth/socail";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backbuttonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}
export const CardWrapper = ({
  children,
  headerLabel,
  backbuttonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-full shadow-none">
      <CardHeader>
        <CardTitle className="text-3xl font-semibold">{headerLabel}</CardTitle>
        <CardDescription>
          {" "}
          Today is a new day. It&apos;s your day. You shape it. Sign in to start
          managing your projects.
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter></CardFooter>
    </Card>
  );
};
