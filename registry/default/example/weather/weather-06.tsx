import * as React from "react";
import {
  Widget,
  WidgetContent,
  WidgetFooter,
  WidgetHeader,
  WidgetTitle,
} from "../../wigggle/widget";
import { DropletIcon, SunIcon, ThermometerIcon } from "lucide-react";

export default function Weather06() {
  return (
    <Widget size="square" design="default" variant="default">
      <WidgetHeader>
        <WidgetTitle>Mumbai</WidgetTitle>
        <WidgetTitle className="font-normal">4:04</WidgetTitle>
      </WidgetHeader>
      <WidgetContent>
        <SunIcon className="size-9 text-yellow-500" />
      </WidgetContent>
      <WidgetFooter>
        <div className="flex flex-col items-center">
          <div className="w-full h-max flex justify-start items-center">
            <ThermometerIcon className="size-5 mr-1" />
            <p>29&deg;</p>
          </div>
          <div className="w-full h-max flex justify-start items-center">
            <DropletIcon className="size-5 mr-1" />
            <p>9%</p>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <p className="text-4xl">29&deg;</p>
        </div>
      </WidgetFooter>
    </Widget>
  );
}
