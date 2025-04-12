"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  MdKeyboardDoubleArrowRight,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { IconType } from "react-icons/lib";
import { IoCheckmark } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Label } from "@radix-ui/react-dropdown-menu";

// Types
type PriorityItem = {
  name: string;
  icon: IconType;
  textColor: string;
  backgroundColor: string;
};

// Data
const PriorityListArray: PriorityItem[] = [
  {
    name: "Low",
    icon: MdKeyboardDoubleArrowRight,
    textColor: "text-green-700",
    backgroundColor: "bg-green-500/10",
  },
  {
    name: "Medium",
    icon: MdKeyboardDoubleArrowRight,
    textColor: "text-yellow-700",
    backgroundColor: "bg-yellow-500/10",
  },
  {
    name: "High",
    icon: MdOutlineKeyboardArrowUp,
    textColor: "text-red-500",
    backgroundColor: "bg-red-500/10",
  },
];

// Main component
const PriorityList = () => {
  const [selectedPriority, setSelectedPriority] = useState<PriorityItem>(
    PriorityListArray[0]
  );

  function renderSelectedPriority() {
    return (
      <div className="flex items-center gap-2">
        <div
          className={`size-6 ${selectedPriority.backgroundColor} rounded-md flex items-center justify-center text-lg`}
        >
          {<selectedPriority.icon />}
        </div>
        <span className={`${selectedPriority.textColor}`}>
          <selectedPriority.name />
        </span>
      </div>
    );
  }

  function renderDropDownMenuItem(priorityItem: PriorityItem) {
    return (
      <div className="flex items-center gap-2">
        <div
          className={`w-auto ${priorityItem.backgroundColor} rounded-md flex items-center justify-center text-lg ${priorityItem.textColor}`}
        >
          <priorityItem.icon />
        </div>
        <span className={`${priorityItem.textColor}`}>{priorityItem.name}</span>
      </div>
    );
  }

  function isDropDownMenuItemChecked(priorityItem: PriorityItem) {
    return (
      <>{priorityItem.name === selectedPriority.name && <IoCheckmark />}</>
    );
  }

  return (
    <div className="w-full">
      <Label className="opacity-75 text-sm font-medium">Priority</Label>
      <div className="mt-2 w-full">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              id="priority-dropdown"
              variant={"outline"}
              className="w-full h-11 flex justify-between"
            >
              {renderSelectedPriority()}
              <IoIosArrowDown className="text-gray-600" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="w-full min-w-[200px] poppins"
          >
            {PriorityListArray.map((priorityItem, idx) => (
              <DropdownMenuItem
                className="flex justify-between items-center"
                onClick={() => {
                  setSelectedPriority(priorityItem);
                }}
                key={idx}
              >
                {renderDropDownMenuItem(priorityItem)}
                {isDropDownMenuItemChecked(priorityItem)}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default PriorityList;
