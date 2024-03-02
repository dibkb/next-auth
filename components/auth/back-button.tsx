"use client";

import { Button } from "../ui/button";

interface Backbuttonprops {
  label: string;
  href: string;
}
export const Backbutton = ({ href, label }: Backbuttonprops) => {
  return (
    <Button variant={"link"} size={"sm"} className="w-full text-sm">
      <a href={href}>{label}</a>
    </Button>
  );
};
