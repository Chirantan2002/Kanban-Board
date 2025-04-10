"use client";
import { Card } from "@/components/ui/card";
import ProjectAreaHeader from "./ProjectAreaHeader";
import ProjectAreaBoards from "./project-area-board/ProjectAreaBoards";

const ProjectArea = () => {
  return (
    <Card className="shadow-none p-7 rounded-xl px-7 flex flex-col gap-8">
      <ProjectAreaHeader />
      <ProjectAreaBoards />
    </Card>
  );
};

export default ProjectArea;
