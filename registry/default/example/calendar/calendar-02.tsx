import {
  Widget,
  WidgetContent,
  WidgetHeader,
  WidgetTitle,
} from '../../wigggle/widget';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function Calendar02() {
  const currentDate = new Date();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const days = Array.from(
    { length: daysInMonth },
    (_, i) => i + 1
  );
  const fillerDays = Array.from(
    { length: firstDayOfMonth },
    (_, i) => null
  );

  return (
    <Widget className="gap-2" design="mumbai">
      <WidgetHeader className="justify-center">
        <WidgetTitle>
          {monthNames[currentDate.getMonth()]}{' '}
          {currentDate.getFullYear()}
        </WidgetTitle>
      </WidgetHeader>
      <Separator className="h-0.5 rounded-full" />
      <WidgetContent>
        <div className="size-full grid grid-cols-7 gap-1 text-center">
          {[
            'S',
            'M',
            'T',
            'W',
            'T',
            'F',
            'S',
          ].map((day, index) => (
            <div key={index} className="text-xs">
              {day}
            </div>
          ))}
          {fillerDays.map((_, index) => (
            <div
              key={`filler-${index}`}
              className="text-xs"
            >
              &nbsp;
            </div>
          ))}
          {days.map((day) => (
            <div
              key={day}
              className="text-xs text-muted-foreground"
            >
              {day === currentDate.getDate() ? (
                <Badge className="size-4 p-2 flex items-center justify-center">
                  {day}
                </Badge>
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
