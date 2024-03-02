"use client";

import Link from "next/link";
import { Button } from "../ui/button";

interface Backbuttonprops {
  label: string;
  href: string;
}
export const Backbutton = ({ href, label }: Backbuttonprops) => {
  return (
    <Button variant={"link"} size={"sm"} className="w-full text-sm">
      <Link href={href} className="text-slate-500 font-normal">
        {label}
      </Link>
    </Button>
  );
};
