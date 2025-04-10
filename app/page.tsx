"use client";

import React from "react";
import { useTheme } from "next-themes";
import Navbar from "./Components/nav-bar/Navbar";
import ProjectArea from "./Components/project-area-tasks-board/ProjectArea";

const page = () => {
  const { theme } = useTheme();
  const bgColor = theme === "dark" ? "bg-black" : "bg-gray-100";
  return (
    <div className={`${bgColor} border min-h-screen w-full`}>
      <Navbar />
      <div className="grid grid-cols-[3fr_1fr] px-6 mt-8 poppins gap-4">
        <ProjectArea />
      </div>
    </div>
  );
};

export default page;
