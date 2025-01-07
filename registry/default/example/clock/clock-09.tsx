import * as React from "react";
import { Widget, WidgetContent, WidgetTitle } from "../../wigggle/widget";

export default function Clock09() {
  return (
    <Widget design="mumbai">
      <WidgetContent>
        <div className="size-full grid grid-cols-2 gap-x-4 items-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-sm">Mumbai</p>
            <WidgetTitle>8:15 AM</WidgetTitle>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-sm">London</p>
            <WidgetTitle>6:45 PM</WidgetTitle>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-sm">Tokyo</p>
            <WidgetTitle>8:15 AM</WidgetTitle>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-sm">Seoul</p>
            <WidgetTitle>6:45 PM</WidgetTitle>
          </div>
        </div>
      </WidgetContent>
    </Widget>
  );
}
