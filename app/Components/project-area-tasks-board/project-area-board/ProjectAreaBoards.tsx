"use client";
import React from "react";
import SingleBoard, { Board } from "./SingleBoard";

export default function ProjectAreaBoards() {
  const boards: Board[] = [
    { name: "Yet to start", createdAt: new Date(), tasks: [] },
    { name: "In Progress", createdAt: new Date(), tasks: [] },
    { name: "Completed", createdAt: new Date(), tasks: [] },
  ];
  return (
    <div className="h-full rounded-2xl flex items-center mt-4 gap-3">
      {boards.map((board, idx) => (
        <SingleBoard key={idx} board={board} />
      ))}
    </div>
  );
}
