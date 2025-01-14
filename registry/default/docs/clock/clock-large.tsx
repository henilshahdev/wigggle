import {
  Widget,
  WidgetContent,
  WidgetTitle,
} from '../../wigggle/widget';

export default function ClockDemo() {
  const weatherInfo = [
    {
      id: 1,
      city: 'Mumbai',
      time: 'Tuesday',
      hour: '7:10',
    },
    {
      id: 2,
      city: 'London',
      time: 'Tuesday',
      hour: '1:40',
    },
    {
      id: 3,
      city: 'Vancouver',
      time: 'Monday',
      hour: '17:40',
    },
    {
      id: 4,
      city: 'Seoul',
      time: 'Tuesday',
      hour: '10:40',
    },
  ];

  return (
    <Widget size="large">
      <WidgetContent className="grid grid-cols-2 gap-3">
        {weatherInfo.map((info) => (
          <div
            key={info.id}
            className="w-full flex-center flex-col gap-2"
          >
            <p className="text-muted-foreground">
              {info.city}
            </p>
            <WidgetTitle className="text-2xl">
              {info.time}
            </WidgetTitle>
            <WidgetTitle className="text-4xl tracking-widest">
              {info.hour}
            </WidgetTitle>
          </div>
        ))}
      </WidgetContent>
    </Widget>
  );
}
