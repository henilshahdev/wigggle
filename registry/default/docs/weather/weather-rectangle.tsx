import * as React from "react";
import {
  Widget,
  WidgetContent,
  WidgetFooter,
  WidgetHeader,
  WidgetTitle,
} from "../../wigggle/widget";
import { SunIcon } from "lucide-react";

export default function WeatherDemo() {
  const hourlyForecast = [
    { time: "12 PM", temp: 31 },
    { time: "1 PM", temp: 31 },
    { time: "2 PM", temp: 30 },
    { time: "3 PM", temp: 29 },
    { time: "4 PM", temp: 28 },
  ];

  return (
    <Widget size="rectangle" design="default" variant="default">
      <WidgetHeader>
        <WidgetTitle>Mumbai</WidgetTitle>
        <SunIcon className="size-6 fill-current" />
      </WidgetHeader>
      <WidgetContent>
        <div className="w-full flex justify-between items-center">
          <p className="text-4xl">32&deg;</p>
        </div>
      </WidgetContent>
      <WidgetFooter>
        <div className="w-full flex justify-between mt-4">
          {hourlyForecast.map((forecast, index) => (
            <div key={index} className="flex flex-col items-center gap-1">
              <span className="text-sm">{forecast.time}</span>
              <SunIcon className="size-4" strokeWidth={1.5} />
              <span className="text-sm font-medium">{forecast.temp}°</span>
            </div>
          ))}
        </div>
      </WidgetFooter>
    </Widget>
  );
}
