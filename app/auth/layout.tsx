import React from "react";
import Image from "next/image";
import { imagesLink } from "@/utils/images";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col h-full mt-6 px-6 gap-y-6">
      <div className="h-56 relative">
        <Image
          src={imagesLink.login}
          fill
          objectFit="cover"
          alt="Picture of the author"
          className="rounded-2xl"
        />
      </div>
      {children}
    </main>
  );
};

export default AuthLayout;
