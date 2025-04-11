import React from "react";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import { Project, projects } from "./ProjectSelection";
import SingleProjectItem from "./SingleProjectItem"; // Default import

type ProjectCommandItemsProps = {
  selectedProject: Project;
  setSelectedProject: React.Dispatch<React.SetStateAction<Project>>;
};

export default function ProjectCommandItems({
  selectedProject,
  setSelectedProject,
}: ProjectCommandItemsProps) {
  function handleProjectSelection(project: Project) {
    setSelectedProject(project);
  }

  return (
    <Command>
      <CommandInput placeholder="Search a project..." />
      <CommandList className="my-3">
        <CommandEmpty>No results found!</CommandEmpty>
      </CommandList>
      <div className="flex flex-col gap-3">
        {projects.map((project, idx) => (
          <SingleProjectItem
            key={idx}
            project={project}
            onSelectedItem={({ project }) => handleProjectSelection(project)}
            isSelected={selectedProject.name === project.name}
          />
        ))}
      </div>
    </Command>
  );
}
