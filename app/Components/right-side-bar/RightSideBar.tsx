"use client";
import { Card } from "@/components/ui/card";
import ProjectSelectionDropdown from "./ProjectSelection";
import CircularProgress from "./CircularProgress";
import TaskStats from "./TaskStats";

export default function RightSideBar() {
  return (
    <Card className="shadow-none p-6 rounded-3xl max-h-[640px]">
      <div className="flex flex-col gap-8">
        <ProjectSelectionDropdown />
        <CircularProgress />
        <TaskStats />
      </div>
    </Card>
  );
}
