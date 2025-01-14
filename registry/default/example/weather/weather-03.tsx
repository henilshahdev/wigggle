import * as React from 'react';
import {
  Widget,
  WidgetFooter,
  WidgetHeader,
  WidgetTitle,
} from '../../wigggle/widget';
import { SunIcon } from 'lucide-react';

export default function Weather03() {
  return (
    <Widget size="square" design="default" variant="default">
      <WidgetHeader>
        <WidgetTitle className="text-4xl">29&deg;</WidgetTitle>
      </WidgetHeader>

      <WidgetFooter className="flex-col gap-y-1.5 items-end">
        <SunIcon className="size-8" />
        <p className="text-lg font-medium">Mumbai</p>
      </WidgetFooter>
    </Widget>
  );
}
