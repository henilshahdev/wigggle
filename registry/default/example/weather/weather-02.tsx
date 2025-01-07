import * as React from "react";
import {
  Widget,
  WidgetContent,
  WidgetHeader,
  WidgetTitle,
} from "../../wigggle/widget";
import { SunIcon } from "lucide-react";

export default function Weather02() {
  return (
    <Widget>
      <WidgetHeader>
        <WidgetTitle>Mumbai</WidgetTitle>
        <SunIcon className="size-5 fill-current" />
      </WidgetHeader>
      <WidgetContent>
        <p className="text-5xl">29&deg;</p>
      </WidgetContent>
    </Widget>
  );
}
