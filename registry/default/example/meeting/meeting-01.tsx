import * as React from "react";
import {
  Widget,
  WidgetContent,
  WidgetHeader,
  WidgetTitle,
} from "../../wigggle/widget";
import { VideoIcon } from "lucide-react";

export default function Meeting01() {
  return (
    <Widget size="square" design="default" variant="default">
      <WidgetHeader className="flex-col gap-3">
        <div className="flex justify-start items-center">
          <VideoIcon className="size-6 mr-2" />
          <WidgetTitle>Launch Prep</WidgetTitle>
        </div>
      </WidgetHeader>
      <WidgetContent className="items-end flex justify-start">
        <p className="text-3xl font-semibold">09:30 AM</p>
      </WidgetContent>
    </Widget>
  );
}
