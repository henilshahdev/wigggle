import * as React from 'react';
import { Widget, WidgetContent } from '../../wigggle/widget';

export default function Weather04() {
  return (
    <Widget>
      <WidgetContent className="flex-col items-start mx-auto">
        <p className="text-6xl">29&deg;</p>
        <p className="text-2xl">Sunny</p>
        <p>Tue Nov 22</p>
      </WidgetContent>
    </Widget>
  );
}
