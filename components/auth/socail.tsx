"use client";

import { FaGithub, FaGoogle } from "react-icons/fa";
import { Button } from "../ui/button";

export const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-4">
      <Button variant={"outline"} size="lg" className="w-full">
        <FaGoogle className="h-5 w-5" />
      </Button>
      <Button variant={"outline"} size="lg" className="w-full">
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};
