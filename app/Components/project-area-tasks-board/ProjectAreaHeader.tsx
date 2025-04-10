"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { MdOutlineSortByAlpha } from "react-icons/md";
import { SortingDropdown } from "./SortingDropdown";

const ProjectAreaHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <span className="text-2xl font-bold">Projects</span>
        {/* All projects dialogs */}
      </div>
      {/* Sorting label, drop-down, icons */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <MdOutlineSortByAlpha className="text-xl text-gray-500" />
          <span className="text-gray-500 text-sm">Sort</span>
        </div>
        {/* SortingDropdown */}
        <SortingDropdown />
        <Button variant="default" className="rounded-3xl px-4 cursor-pointer">
          Add Task
        </Button>
      </div>
    </div>
  );
};

export default ProjectAreaHeader;
