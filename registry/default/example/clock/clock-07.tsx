import * as React from 'react';
import {
  Widget,
  WidgetContent,
  WidgetTitle,
} from '../../wigggle/widget';
import { MoonIcon, SunIcon } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function Clock07() {
  return (
    <Widget>
      <WidgetContent className="flex-col justify-between gap-3">
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex justify-between items-center">
            <p>Mumbai</p>
            <SunIcon className="size-5" />
          </div>
          <WidgetTitle className="text-xl">
            8:15 AM
          </WidgetTitle>
        </div>
        <Separator />
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex justify-between items-center">
            <p>Vancouver</p>
            <MoonIcon className="size-5" />
          </div>
          <WidgetTitle className="text-xl">
            6:45 PM
          </WidgetTitle>
        </div>
      </WidgetContent>
    </Widget>
  );
}
