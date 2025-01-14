import * as React from 'react';
import {
  Widget,
  WidgetContent,
  WidgetTitle,
} from '../../wigggle/widget';

export default function Meeting02() {
  return (
    <Widget design="mumbai">
      <WidgetContent className="flex-col justify-start gap-3">
        <WidgetTitle className="text-center text-sm">
          Upcoming Meetings
        </WidgetTitle>
        <div className="w-full flex flex-col gap-3 text-sm">
          <div className="py-1.5 px-2 rounded-md border flex justify-between items-center">
            <p className="text-xs">
              Weekly Huddle
            </p>
            <p className="font-semibold">9:00</p>
          </div>
          <div className="py-1.5 px-2 rounded-md border flex justify-between items-center">
            <p className="text-xs">Intro to V0</p>
            <p className="font-semibold">11:15</p>
          </div>
          <div className="py-1.5 px-2 rounded-md border flex justify-between items-center">
            <p className="text-xs">Launch Prep</p>
            <p className="font-semibold">3:15</p>
          </div>
        </div>
      </WidgetContent>
    </Widget>
  );
}
