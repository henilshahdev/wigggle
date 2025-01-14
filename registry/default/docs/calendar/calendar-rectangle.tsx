import {
  Widget,
  WidgetContent,
  WidgetTitle,
} from '../../wigggle/widget';
import { Badge } from '@/components/ui/badge';

export default function CalendarDemo() {
  const today = new Date();
  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

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

  const meetings = [
    {
      id: 'm1',
      title: 'Standup',
      time: '9:00',
    },
    {
      id: 'm2',
      title: 'Intro to V0',
      time: '11:15',
    },
    {
      id: 'm3',
      title: 'Launch Prep',
      time: '3:15',
    },
  ];

  return (
    <Widget size="rectangle">
      <WidgetContent className="grid grid-cols-2 gap-2">
        <div className="flex-start flex-col gap-2">
          <p className="text-muted-foreground">
            {dayNames[today.getDay()]}
          </p>
          <h2 className="text-5xl font-bold">
            {today.getDate()}
          </h2>
          <p className="text-muted-foreground">
            {monthNames[today.getMonth()]}
          </p>
          <Badge variant="outline">
            {today.getFullYear()}
          </Badge>
        </div>
        <div className="flex-start flex-col gap-2">
          <WidgetTitle className="text-center text-sm">
            Upcoming Meetings
          </WidgetTitle>
          <div className="w-full flex flex-col gap-3 text-sm">
            {meetings.map((meeting) => (
              <div
                key={meeting.id}
                className="py-1.5 px-2 rounded-md border flex justify-between items-center hover:cursor-pointer hover:bg-secondary transition-colors duration-300"
              >
                <p className="text-xs">
                  {meeting.title}
                </p>
                <p className="font-semibold">
                  {meeting.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </WidgetContent>
    </Widget>
  );
}
