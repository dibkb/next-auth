"use client";

import { Backbutton } from "@/components/auth/back-button";
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
  description: string;
  backbuttonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}
export const CardWrapper = ({
  children,
  headerLabel,
  description,
  backbuttonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-full shadow-none border-none">
      <CardHeader>
        <CardTitle className="text-3xl font-semibold">{headerLabel}</CardTitle>
        <CardDescription>{description} </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <Backbutton label={backbuttonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};
