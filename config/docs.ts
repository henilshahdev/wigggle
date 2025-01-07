import { MainNavItem, SidebarNavItem } from "@/types";

export type DocsConfig = {
	mainNav: MainNavItem[];
	sidebarNav: SidebarNavItem[];
};

export const docsConfig: DocsConfig = {
	mainNav: [
		{
			title: "Docs",
			href: "/docs/introduction",
		},
		{
			title: "Widgets",
			href: "/docs/widgets/weather",
		},
	],
	sidebarNav: [
		{
			title: "Getting Started",
			items: [
				{
					title: "Introduction",
					href: "/docs/introduction",
					items: [],
				},
				{
					title: "Widget.tsx",
					href: "/docs/widget-tsx",
				},
			],
		},
		{
			title: "Widgets",
			items: [
				{
					title: "Weather",
					href: `/docs/widgets/weather`,
					items: [],
				},
			],
		},
	],
};
