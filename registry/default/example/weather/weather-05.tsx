import * as React from 'react';
import {
  Widget,
  WidgetContent,
  WidgetHeader,
  WidgetTitle,
} from '../../wigggle/widget';
import { MoveDownIcon, MoveUpIcon, SunIcon } from 'lucide-react';

export default function Weather05() {
  return (
    <Widget size="square" design="default" variant="default">
      <WidgetHeader className="flex-col gap-3">
        <WidgetTitle>Mumbai</WidgetTitle>
        <div className="flex flex-col">
          <div className="flex items-center gap-x-2">
            <SunIcon className="size-8 fill-current" />
            <p className="text-4xl">29&deg;</p>
          </div>
          <p className="text-muted-foreground">Feels Like 28&deg;</p>
        </div>
      </WidgetHeader>
      <WidgetContent className="items-end">
        <div className="w-full h-max flex justify-start items-center">
          <MoveUpIcon
            fill="currentColor"
            className="size-4 mr-1"
            strokeWidth={4}
          />
          <p>32&deg;</p>
        </div>
        <div className="w-full flex justify-end items-center">
          <MoveDownIcon
            fill="currentColor"
            className="size-4 mr-1"
            strokeWidth={4}
          />
          <p>28&deg;</p>
        </div>
      </WidgetContent>
    </Widget>
  );
}
