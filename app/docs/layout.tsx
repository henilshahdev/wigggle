import { docsConfig } from "@/config/docs";
import "@/styles/mdx.css";

import { ScrollArea } from "@/components/ui/scroll-area";
import { DocsSidebarNav } from "@/components/shared/all-links-nav";

interface ComponentLayoutProps {
	children: React.ReactNode;
}

const layout = ({ children }: ComponentLayoutProps) => {
	return (
		<div className="flex container mx-auto max-h-[calc(100vh-10rem)]">
			<ScrollArea className="hidden md:block w-80 p-6">
				<DocsSidebarNav items={docsConfig.sidebarNav} />
			</ScrollArea>
			<ScrollArea className="w-full p-6 px-10 md:px-6">{children}</ScrollArea>
		</div>
	);
};

export default layout;
