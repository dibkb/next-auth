import React from "react";
import Image from "next/image";
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col h-full mt-6 px-6">
      <div className="h-56 relative">
        <Image
          src="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhaW50aW5nfGVufDB8fDB8fHww"
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
