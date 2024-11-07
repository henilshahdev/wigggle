import * as React from "react";
import { Widget, WidgetContent, WidgetFooter, WidgetHeader, WidgetTitle } from "../wigggle/widget";
import { ArrowUpIcon, MoveDownIcon, MoveUpIcon, SunIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function WeatherDemo() {
	const hourlyForecast = [
		{ time: "12 PM", temp: 31 },
		{ time: "1 PM", temp: 31 },
		{ time: "2 PM", temp: 30 },
		{ time: "3 PM", temp: 29 },
		{ time: "4 PM", temp: 28 },
	];

	const weeklyForecast = [
		{ day: "Sun", low: 33, high: 27 },
		{ day: "Mon", low: 33, high: 26 },
		{ day: "Tue", low: 32, high: 27 },
		{ day: "Wed", low: 31, high: 25 },
		{ day: "Thu", low: 33, high: 28 },
	];

	return (
		<Widget size="large" design="default" variant="default">
			<WidgetHeader>
				<WidgetTitle>Mumbai</WidgetTitle>
				<SunIcon className="size-6 fill-current" />
			</WidgetHeader>
			<WidgetContent>
				<div className="w-full flex justify-between items-center">
					<p className="text-4xl">32&deg;</p>
				</div>
			</WidgetContent>
			<WidgetFooter className="flex flex-col mt-2 gap-4">
				<div className="w-full flex justify-between">
					{hourlyForecast.map((forecast, index) => (
						<div key={index} className="flex flex-col items-center gap-2">
							<span className="text-sm">{forecast.time}</span>
							<SunIcon className="size-4" strokeWidth={1.5} />
							<span className="text-sm font-medium">{forecast.temp}°</span>
						</div>
					))}
				</div>
				<div className="w-full flex flex-col justify-between">
					{weeklyForecast.map((forecast, index) => (
						<div key={index} className="h-max grid grid-cols-4 gap-x-12 text-center items-end space-y-2.5">
							<p className="text-sm">{forecast.day}</p>
							<SunIcon className="size-5 mx-auto" strokeWidth={2} />
							<p className="text-sm font-medium flex items-center gap-1.5">
								<MoveUpIcon className="size-4" strokeWidth={2} />
								{forecast.high}°
							</p>
							<p className="text-sm font-medium flex items-center gap-1.5">
								<MoveDownIcon className="size-4" strokeWidth={2} />
								{forecast.low}°
							</p>
						</div>
					))}
				</div>
			</WidgetFooter>
		</Widget>
	);
}
