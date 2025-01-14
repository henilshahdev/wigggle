"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarNavItem } from "@/types/index";
import { cn } from "@/lib/utils";

export interface DocsSidebarNavProps {
	items: SidebarNavItem[];
}

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
	const pathname = usePathname();

	return items.length ? (
		<div className="w-full pb-20">
			{items.map((item, index) => (
				<div key={index} className={"pb-4"}>
					<h4 className="mb-1 rounded-md px-2 py-1 text-base font-medium">{item.title}</h4>
					{item?.items && (
						<DocsSidebarNavItems items={item.items} pathname={pathname} groupId={`group-${index}`} />
					)}
				</div>
			))}
		</div>
	) : null;
}

interface DocsSidebarNavItemsProps {
	items: SidebarNavItem[];
	pathname: string | null;
	groupId: string;
}

export function DocsSidebarNavItems({ items, pathname, groupId }: DocsSidebarNavItemsProps) {
	return items?.length ? (
		<div className="flex flex-col text-sm bg-transparent">
			{items.map(
				(item, index) =>
					item.href && (
						<Link
							key={index}
							href={item.href}
							onClick={() => {}}
							className={cn(
								"relative rounded-md py-2 px-4 text-base",
								pathname === item.href ? "font-medium text-foreground" : "text-muted-foreground"
							)}
							target={item.external ? "_blank" : ""}
							rel={item.external ? "noreferrer" : ""}
						>
							{pathname === item.href && (
								<div className="absolute inset-0 rounded-md bg-muted-foreground dark:bg-muted" />
							)}
							<span className="relative z-10 shrink-0">{item.title}</span>
						</Link>
					)
			)}
		</div>
	) : null;
}
