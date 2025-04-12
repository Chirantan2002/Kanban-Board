"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { IoMdSearch } from "react-icons/io";

type ProjectItem = {
  name: string;
  icon: React.ElementType;
};

const ProjectsArray: ProjectItem[] = [
  {
    name: "Project 1",
    icon: MdOutlineCategory,
  },
  {
    name: "Project 2",
    icon: AiFillSafetyCertificate,
  },
];

const ProjectList = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem>(
    ProjectsArray[0]
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filterBySearchQuery = ProjectsArray.filter((project) =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Close drop-down when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Render the selected project
  function renderSelectedProject() {
    const Icon = selectedProject.icon;
    return (
      <div className="flex items-center gap-2">
        <div className="size-7 rounded-md flex items-center justify-center text-lg text-primary bg-primary/10">
          <Icon />
        </div>
      </div>
    );
  }

  // Render each dropdown Item
  function renderDropDownMenuItem(projectItem: ProjectItem) {
    const Icon = projectItem.icon;
    return (
      <div
        className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
        onClick={() => {
          setSelectedProject(projectItem);
          setIsOpen(false); // close after project selection
        }}
      >
        <div className="size-7 bg-primary/10 rounded-md flex items-center justify-center text-[15px] text-primary">
          <Icon />
        </div>
        <span>{projectItem.name}</span>
        {projectItem.name === selectedProject.name && (
          <IoCheckmark className="ml-auto" />
        )}
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="opacity-75 text-sm font-medium">Projects</label>
      <div className="mt-1 w-full">
        <Button
          className="w-full h-11 flex justify-between items-center border"
          variant={"outline"}
          onClick={() => {
            setIsOpen(isOpen);
          }}
        >
          {renderSelectedProject()}
          <IoIosArrowDown className="text-gray-600" />
        </Button>
      </div>

      {isOpen && (
        <div className="absolute overflow-hidden z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-11 p-2 pl-8 text-sm border-b border-gray-200 focus:outline-none overflow-hidden"
            placeholder="Search a project..."
            autoFocus
          />
          <IoMdSearch className="absolute top-[13px] left-2 text-lg text-gray-500" />

          <div className="max-h-60 overflow-y-auto my-2">
            {filterBySearchQuery.map((projectItem, idx) => (
              <div key={idx} className="text-sm">
                {renderDropDownMenuItem(projectItem)}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
