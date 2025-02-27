import * as React from 'react';
import {
  Widget,
  WidgetContent,
  WidgetFooter,
} from '../../wigggle/widget';
import { SunIcon } from 'lucide-react';

export default function Weather01() {
  return (
    <Widget>
      <WidgetContent className="flex-col gap-4">
        <SunIcon
          className="size-10"
          strokeWidth={2}
        />
        <p className="text-4xl">29&deg;</p>
      </WidgetContent>
      <WidgetFooter className="justify-center">
        <p className="text-lg font-semibold">
          Mumbai
        </p>
      </WidgetFooter>
    </Widget>
  );
}
