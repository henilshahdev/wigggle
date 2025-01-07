import * as React from "react";
import { Widget, WidgetContent, WidgetTitle } from "../../wigggle/widget";

export default function Clock08() {
  return (
    <Widget>
      <WidgetContent className="flex-col justify-between">
        <div className="w-full flex justify-between items-center gap-2">
          <p className="text-sm">Mumbai</p>
          <WidgetTitle>8:15 AM</WidgetTitle>
        </div>
        <div className="w-full flex justify-between items-center gap-2">
          <p className="text-sm">London</p>
          <WidgetTitle>6:45 PM</WidgetTitle>
        </div>
        <div className="w-full flex justify-between items-center gap-2">
          <p className="text-sm">Tokyo</p>
          <WidgetTitle>8:15 AM</WidgetTitle>
        </div>
        <div className="w-full flex justify-between items-center gap-2">
          <p className="text-sm">Seoul</p>
          <WidgetTitle>6:45 PM</WidgetTitle>
        </div>
      </WidgetContent>
    </Widget>
  );
}
