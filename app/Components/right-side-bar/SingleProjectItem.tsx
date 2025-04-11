import { CommandItem } from "@/components/ui/command";
import { Project, projects } from "./ProjectSelection";
import { IoMdCheckbox, IoMdCheckmark } from "react-icons/io";

export default function SingleProjectItem({
  project,
  isSelected,
  onSelectedItem,
}: {
  project: Project;
  isSelected: boolean;
  onSelectedItem: (args: { project: Project }) => void;
}) {
  const { name: projectName, tasks, icon: ProjectIcon } = project;

  return (
    <CommandItem
      value={projectName}
      onSelect={(value: string) => {
        const findProject = projects.find((proj) => proj.name === value);
        if (findProject) {
          onSelectedItem({ project: findProject });
        }
      }}
      className="cursor-pointer hover:bg-gray-100 rounded-lg p-2 flex items-center gap-2"
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <div className="size-8 bg-primary flex items-center justify-center rounded-md text-white">
            <ProjectIcon />
          </div>
          <div className="flex flex-col">
            <span className="font medium">{projectName}</span>
            <span className="text-[12px] text-gray-500">
              {tasks.length} Tasks
            </span>
          </div>
        </div>
        {isSelected && (
          <div className="text-primary">
            <IoMdCheckmark size={12} />
          </div>
        )}
      </div>
    </CommandItem>
  );
}
