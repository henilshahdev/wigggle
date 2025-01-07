export async function WidgetDemo({ subDirectory, widgetName }: { subDirectory: string; widgetName: string }) {
	const Component = (await import(`../../registry/default/example/${subDirectory}/${widgetName}`)).default;

	return (
		<div className="relative flex flex-col gap-1.5">
			<div className="flex justify-between items-center px-2">
				<p className="text-sm">{widgetName}</p>
			</div>
			<Component />
		</div>
	);
}
