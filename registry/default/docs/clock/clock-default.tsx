'use client';

import * as React from 'react';
import { Widget, WidgetContent, WidgetTitle } from '../../wigggle/widget';

export default function ClockDemo() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const day = days[time.getDay()];

  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  return (
    <Widget>
      <WidgetContent className="flex-col gap-2">
        <WidgetTitle className="text-2xl">{day}</WidgetTitle>
        <WidgetTitle className="text-5xl tracking-widest">
          {hours}:{minutes}
        </WidgetTitle>
      </WidgetContent>
    </Widget>
  );
}
