"use client";

import { Card } from "@/components/ui/card";

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
    <Card className="w-[350px]">
      <h3 className="text-4xl font-semibold">Welcome Back 👋</h3>
      <p className="text-sm">
        Today is a new day. It&apos;s your day. You shape it. Sign in to start
        managing your projects.
      </p>
    </Card>
  );
};
