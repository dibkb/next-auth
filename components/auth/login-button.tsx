"use client";
import { useRouter } from "next/navigation";
import React from "react";
interface LoginButtonProps {
  children: React.ReactNode;
}
export const LoginButton = ({ children }: LoginButtonProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/auth/login");
  };
  return (
    <div onClick={handleClick} className="w-full">
      {children}
    </div>
  );
};
