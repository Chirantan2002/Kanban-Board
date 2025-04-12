"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { BiTask } from "react-icons/bi";
import TaskName from "./sub-components/TaskName";
import TasksDropDown from "./sub-components/TaskDescription";
import ProjectList from "./sub-components/ProjectList";
import PriorityList from "./sub-components/PriorityList";

const TaskDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => setIsOpen(open);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-3xl px-5 cursor-pointer">Add New Task</Button>
      </DialogTrigger>
      <DialogContent className="poppins max-w-3xl">
        <DialogHeader className="">
          <div className="size-10 bg-gray-200 rounded-full flex justify-center items-center">
            <BiTask className="text-xl text-gray-600" />
          </div>
          <div className="pt-2">
            <DialogTitle className="text-lg p-0 h-7">New Task</DialogTitle>
            <DialogDescription className="p-0">
              Fill in the form below to create of modify a task
            </DialogDescription>
          </div>
          <div className="">
            <Separator className="mt-4 left-0 absolute" />
          </div>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="flex flex-col gap-3">
            <TaskName />
            <TasksDropDown />
          </div>
          <div className="flex flex-col gap-[53px]">
            <ProjectList />
            <PriorityList />
          </div>
        </div>
        <div className="">
          <Separator className="mt-4 left-0 absolute" />
        </div>
        <div className="flex items-center gap-1 justify-end mt-6">
          <Button type="button" variant="outline" className="px-5 cursor-pointer"
          onClick={() => {
            // Close the dialog
            handleOpenChange(false);
          }}
          >
            Close
          </Button>
          <Button className="px-5 cursor-pointer">Add New Task</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TaskDialog;
