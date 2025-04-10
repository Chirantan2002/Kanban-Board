"use client";

import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";

import SearchBar from "./SearchBar";
import { ModeToggle } from "@/app/mode-toggle";
import AppNameAndLogo from "./AppNameAndLogo";

export default function Navbar() {
  return (
    <div className="poppins p-6 flex justify-between items-center gap-4">
      <div className="flex items-center gap-5">
        <AppNameAndLogo />
        <SearchBar />
      </div>
      <div className="flex gap-4">
        <ModeToggle/>
        {/* <Separator orientation="vertical" className="h-8 w-[2px] bg-black" /> */}
        {/* Create project button */}
        <Button variant="destructive" className="rounded-3xl h-10 cursor-pointer">
          Add New Project
        </Button>
      </div>
    </div>
  );
}
