export async function WidgetDemo({ widgetName }: { widgetName: string }) {
	const Component = (await import(`../../registry/default/example/${widgetName}`)).default;

	return (
		<div className="group/item relative flex flex-col gap-1.5">
			<div className="flex justify-between items-center px-2">
				<p className="text-sm">{widgetName}</p>
			</div>
			<Component />
		</div>
	);
}
