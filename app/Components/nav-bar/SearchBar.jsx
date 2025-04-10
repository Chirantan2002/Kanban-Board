"use client";
// import React from 'react'
import { Input } from "@/components/ui/input";
import { useTheme } from "next-themes";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "bg-transparent" : "bg-white";
  return (
    <div className="relative">
      <IoSearch className="absolute text-2xl left-3 top-2 text-gray-400" />
      <Input
        className={`${bgColor} pl-10 rounded-3xl h-10 shadow-none`}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
