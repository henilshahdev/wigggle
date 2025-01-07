import { WidgetDemo } from "@/components/shared/widget-demo";

export default function Page() {
	const allWidgets = [
		{
			category: "weather",
			widgets: ["weather-01", "weather-02", "weather-03", "weather-04", "weather-05", "weather-06"],
		},
	];

	return (
		<div className="container mx-auto flex flex-col gap-6 md:gap-8 px-6 sm:px-0 py-6">
			{allWidgets.map((eachWidgetByCategory) => {
				return (
					<div className="w-full flex flex-col gap-3 items-start px-6">
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 items-start sm:mx-auto sm:gap-x-16 gap-y-8">
							{eachWidgetByCategory.widgets.map((eachWidget) => (
								<WidgetDemo
									key={eachWidget}
									widgetName={eachWidget}
									subDirectory={eachWidgetByCategory.category}
								/>
							))}
						</div>
					</div>
				);
			})}
		</div>
	);
}
