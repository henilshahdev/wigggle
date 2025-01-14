'use client';

import React, { useState, useMemo } from 'react';
import {
  Widget,
  WidgetContent,
  WidgetHeader,
  WidgetTitle,
} from '../../wigggle/widget';
import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const MONTH_NAMES = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export default function CalendarDemo() {
  const [date, setDate] = useState(new Date());
  const year = date.getFullYear();
  const month = date.getMonth();

  const calendarDays = useMemo(() => {
    const daysInMonth = new Date(
      year,
      month + 1,
      0
    ).getDate();
    const firstDayOfMonth = new Date(
      year,
      month,
      1
    ).getDay();
    return Array(firstDayOfMonth)
      .fill(null)
      .concat(
        Array.from(
          { length: daysInMonth },
          (_, i) => i + 1
        )
      );
  }, [year, month]);

  const changeMonth = (increment: number) =>
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(
        newDate.getMonth() + increment
      );
      return newDate;
    });

  const isToday = (day: number | null) => {
    if (day === null) return false;
    const today = new Date();
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  return (
    <Widget size="large">
      <WidgetHeader className="flex-center pb-2">
        <Button
          variant="ghost"
          size="icon"
          className="size-6 p-0"
          onClick={() => changeMonth(-1)}
        >
          <ChevronLeft className="size-6" />
        </Button>
        <WidgetTitle className="text-lg">
          {MONTH_NAMES[month]} {year}
        </WidgetTitle>
        <Button
          variant="ghost"
          size="icon"
          className="size-6 p-0"
          onClick={() => changeMonth(1)}
        >
          <ChevronRight className="size-6" />
        </Button>
      </WidgetHeader>
      <Separator className="h-0.5 rounded-full" />
      <WidgetContent>
        <div className="mt-6 size-full grid grid-cols-7 gap-1 text-center">
          {DAYS.map((day) => (
            <div key={day} className="text-base">
              {day}
            </div>
          ))}
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className="text-sm text-muted-foreground"
            >
              {day && isToday(day) ? (
                <span className="py-2 px-2.5 w-max mx-auto rounded-full bg-primary text-background">
                  {day}
                </span>
              ) : (
                day
              )}
            </div>
          ))}
        </div>
      </WidgetContent>
    </Widget>
  );
}
