import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoMdArrowDown } from "react-icons/io";
import { IoArrowUp } from "react-icons/io5";

const options = ["A-Z", "Z-A"];

export function SortingDropdown() {
  const [selectedOption, setSelectedOption] = React.useState("A-Z");
  return (
    <DropdownMenu>
      {/* trigger-btn */}
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <span className="font-medium text-sm">{selectedOption}</span>
          {selectedOption === "A-Z" ? (
            <IoMdArrowDown className="text-sm" />
          ) : (
            <IoArrowUp className="text-sm" />
          )}
        </Button>
      </DropdownMenuTrigger>

      {/* drop-down content options */}
      <DropdownMenuContent className="w-20 poppins">
        {options.map((option, idx) => (
          <DropdownMenuCheckboxItem
            key={idx}
            className="h-9"
            checked={option === selectedOption}
            onCheckedChange={() => setSelectedOption(option)}
          >
            {option}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
      {/* */}
    </DropdownMenu>
  );
}
