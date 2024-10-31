import { DocsSidebarNav } from "@/components/shared/all-links-nav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { docsConfig } from "@/config/docs";

import "@/styles/mdx.css";

interface ComponentLayoutProps {
	children: React.ReactNode;
}

const layout = ({ children }: ComponentLayoutProps) => {
	return (
		<div className="flex container mx-auto max-h-[calc(100vh-10rem)]">
			<ScrollArea className="w-80 p-6">
				<DocsSidebarNav items={docsConfig.sidebarNav} />
			</ScrollArea>
			<Separator orientation="vertical" />
			<ScrollArea className="w-full p-6">{children}</ScrollArea>
			<Separator orientation="vertical" />
			<ScrollArea className="w-96 p-6">
				<h2 className="text-lg font-semibold mb-4">Right Column</h2>
				{Array.from({ length: 20 }).map((_, i) => (
					<Card key={i} className="mb-4">
						<CardHeader>
							<CardTitle>Item {i + 1}</CardTitle>
							<CardDescription>This is a sample item</CardDescription>
						</CardHeader>
						<CardContent>
							<p>Some content for item {i + 1}</p>
						</CardContent>
						<CardFooter>
							<Button variant="outline" size="sm">
								Action
							</Button>
						</CardFooter>
					</Card>
				))}
			</ScrollArea>
		</div>
	);
};

export default layout;
