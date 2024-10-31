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
			title: "Components",
			href: "/docs/components/marquee",
		},
		{
			title: "Widgets",
			href: "/widgets",
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
					title: "Theming",
					href: "/docs/theming",
					items: [
						{
							title: "Next.js",
							href: `/docs/installation/next`,
							items: [],
						},
						{
							title: "Vite",
							href: `/docs/installation/vite`,
							items: [],
						},
						{
							title: "Remix",
							href: `/docs/installation/remix`,
							items: [],
						},
						{
							title: "Astro",
							href: `/docs/installation/astro`,
							items: [],
						},
						{
							title: "Laravel",
							href: `/docs/installation/laravel`,
							items: [],
						},
						{
							title: "Gatsby",
							href: `/docs/installation/gatsby`,
							items: [],
						},
						{
							title: "Manual",
							href: `/docs/installation/manual`,
							items: [],
						},
					],
				},
				{
					title: "CLI",
					href: "/docs/cli",
					items: [],
				},
			],
		},
		{
			title: "Components",
			items: [
				{
					title: "Marquee",
					href: `/docs/components/marquee`,
					items: [],
				},
				{
					title: "Hero Video Dialog",
					href: `/docs/components/hero-video-dialog`,
					items: [],
					label: "",
				},
				{
					title: "Bento Grid",
					href: `/docs/components/bento-grid`,
					items: [],
				},
				{
					title: "Animated List",
					href: `/docs/components/animated-list`,
					items: [],
				},
			],
		},
	],
};
