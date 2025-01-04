"use client";

import * as React from "react";
import { Index } from "__registry__";
import { LoaderCircleIcon } from "lucide-react";

import { useConfig } from "@/hooks/use-config";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ComponentWrapper from "./component-wrapper";
import { styles } from "@/registry/registry-styles";
import LoadingWidget from "./LoadingWidget";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
	name: string;
	align?: "center" | "start" | "end";
	preview?: boolean;
	description?: string;
	type?: "widget" | "example";
}

export function ComponentPreview({
	preview = false,
	name,
	type,
	children,
	className,

	align = "center",
	description,

	...props
}: ComponentPreviewProps) {
	const [key, setKey] = React.useState(0);
	const [config] = useConfig();

	const index = styles.findIndex((style) => style.name === config.style);
	const Codes = React.Children.toArray(children) as React.ReactElement[];

	const Code = Codes[index];

	const Preview = React.useMemo(() => {
		const Component = Index[config.style][name]?.component;

		if (!Component) {
			console.error(`Component with name "${name}" not found in registry.`);
			return (
				<p className="text-sm text-muted-foreground">
					Component{" "}
					<code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">{name}</code>{" "}
					not found in registry.
				</p>
			);
		}

		return <Component />;
	}, [name]);

	return (
		<div className={cn("relative mb-4 flex flex-col space-y-2 lg:max-w-[120ch]", className)} {...props}>
			<Tabs defaultValue="preview" className="relative mr-auto w-full">
				{!preview && (
					<div className="flex items-center justify-between pb-3">
						<TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
							<TabsTrigger
								value="preview"
								className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
							>
								Preview
							</TabsTrigger>
							<TabsTrigger
								value="code"
								className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
							>
								Code
							</TabsTrigger>
						</TabsList>
					</div>
				)}
				<TabsContent value="preview" className="relative rounded-md" key={key}>
					<ComponentWrapper>
						<React.Suspense fallback={<LoadingWidget />}>{Preview}</React.Suspense>
					</ComponentWrapper>
				</TabsContent>
				<TabsContent value="code">
					<div className="flex flex-col space-y-4">
						<div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[550px] [&_pre]:overflow-auto">
							{Code}
						</div>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
}
