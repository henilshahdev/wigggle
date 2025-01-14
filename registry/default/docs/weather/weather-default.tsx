import * as React from "react";
import {
  Widget,
  WidgetContent,
  WidgetFooter,
  WidgetHeader,
  WidgetTitle,
} from "../../wigggle/widget";
import { MoveDownIcon, MoveUpIcon, SunIcon } from "lucide-react";

export default function WeatherDemo() {
  return (
    <Widget size="square" design="default" variant="default">
      <WidgetHeader>
        <WidgetTitle>Mumbai</WidgetTitle>
        <SunIcon className="size-4 fill-current" />
      </WidgetHeader>
      <WidgetContent>
        <p className="text-4xl">32&deg;</p>
      </WidgetContent>
      <WidgetFooter>
        <div className="w-full h-max flex justify-start items-center">
          <MoveUpIcon
            fill="currentColor"
            className="size-4 mr-1"
            strokeWidth={4}
          />
          <p>36&deg;</p>
        </div>
        <div className="w-full flex justify-end items-center">
          <MoveDownIcon
            fill="currentColor"
            className="size-4 mr-1"
            strokeWidth={4}
          />
          <p>28&deg;</p>
        </div>
      </WidgetFooter>
    </Widget>
  );
}
