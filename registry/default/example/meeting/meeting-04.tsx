"use client";

import * as React from "react";
import { Widget, WidgetContent, WidgetTitle } from "../../wigggle/widget";
import { CircleCheckBigIcon, CircleIcon } from "lucide-react";

export default function Meeting04() {
  const defaultAgenda = [
    { id: "1", task: "Project Updates", isDone: true },
    { id: "2", task: "Code Reviews", isDone: true },
    { id: "3", task: "Deployment", isDone: true },
    { id: "4", task: "Testing", isDone: false },
  ];

  const [agendaList, setAgendaList] = React.useState(defaultAgenda);

  const handleClick = (id: string) => {
    setAgendaList((prevList) =>
      prevList.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task,
      ),
    );
  };

  return (
    <Widget design="mumbai">
      <WidgetContent className="flex-col justify-start gap-3">
        <WidgetTitle className="text-center text-base">
          Meeting Agenda
        </WidgetTitle>
        <div className="w-full flex flex-col gap-3 text-sm">
          {agendaList.map((eachTask) => (
            <div
              onClick={() => {
                handleClick(eachTask.id);
              }}
              key={eachTask.id}
              className="hover:cursor-pointer flex justify-start items-center"
            >
              {eachTask.isDone ? (
                <CircleCheckBigIcon className="text-green-500 size-4 mr-2" />
              ) : (
                <CircleIcon className="size-4 mr-2" />
              )}
              <p className={eachTask.isDone ? "line-through opacity-50" : ""}>
                {eachTask.task}
              </p>
            </div>
          ))}
        </div>
      </WidgetContent>
    </Widget>
  );
}
