import { Widget, WidgetContent, WidgetFooter, WidgetHeader, WidgetTitle } from "../wigggle/widget";

export default function BasicExample() {
	return (
		<Widget>
			<WidgetHeader>
				<WidgetTitle>Title</WidgetTitle>
			</WidgetHeader>
			<WidgetContent>
				<p>Content</p>
			</WidgetContent>
			<WidgetFooter>
				<p>Footer</p>
			</WidgetFooter>
		</Widget>
	);
}
