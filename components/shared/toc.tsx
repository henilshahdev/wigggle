// @ts-nocheck
"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";
import { usePathname } from "next/navigation";

interface TocProps {
	toc: TocEntry[];
}

export function DashboardTableOfContents({ toc }: TocProps) {
	const itemIds = React.useMemo(
		() =>
			toc
				? toc
						.flatMap((item) => [item.url, item?.items?.map((item) => item.url)])
						.flat()
						.filter(Boolean)
						.map((id) => id?.split("#")[1])
				: [],
		[toc]
	);

	const activeHeading = useActiveItem(itemIds);
	const mounted = useMounted();

	return (
		<div className="w-full h-full space-y-2">
			<p className="font-medium text-base">On This Page</p>
			<Tree tree={toc} activeItem={activeHeading} />
		</div>
	);
}

function useActiveItem(itemIds: string[]) {
	const [activeId, setActiveId] = React.useState(null);

	React.useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id);
					}
				});
			},
			{ rootMargin: `0% 0% -80% 0%` }
		);

		itemIds?.forEach((id) => {
			const element = document.getElementById(id);
			if (element) {
				observer.observe(element);
			}
		});

		return () => {
			itemIds?.forEach((id) => {
				const element = document.getElementById(id);
				if (element) {
					observer.unobserve(element);
				}
			});
		};
	}, []);

	return activeId;
}

interface TreeProps {
	tree: TocEntry[];
	level?: number;
	activeItem?: string;
}

function Tree({ tree, level = 1, activeItem }: TreeProps) {
	console.log(tree);

	return tree?.length ? (
		<ul className={cn("m-0 list-none", { "pl-4": level !== 1 })}>
			{tree.map((item, index) => {
				return (
					<li key={index} className={cn("mt-0 pt-2")}>
						<a
							href={item.url}
							className="inline-block no-underline transition-colors text-muted-foreground hover:text-foreground"
						>
							{item.title}
						</a>
						{console.log(item)}
						{item.items?.length ? (
							<Tree tree={item.items} level={level + 1} activeItem={activeItem} />
						) : null}
					</li>
				);
			})}
		</ul>
	) : null;
}
