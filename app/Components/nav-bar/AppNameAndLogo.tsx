"use client";
import React from "react";
import { FaProjectDiagram } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-2">
      {/* Logo */}
      <div className="bg-primary size-10 text-lg text-white rounded-xl flex justify-center items-center">
        <FaProjectDiagram />
      </div>
      {/* Container for the name */}
      <div className="flex gap-1 items-center text-xl">
        <span className="text-xl font-bold">Pro</span>
        <span className="text-xl">Kanban</span>
      </div>
    </div>
  );
};

export default SearchBar;
