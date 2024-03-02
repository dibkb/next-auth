"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

export const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-4">
      <Button variant={"outline"} size="lg" className="w-full shadow-none">
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button variant={"outline"} size="lg" className="w-full shadow-none">
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};
