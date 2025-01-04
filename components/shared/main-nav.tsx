"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";

export function MainNav() {
	const pathname = usePathname();

	return (
		<div className="hidden md:flex md:gap-x-6">
			<nav className="hidden items-center space-x-8 md:flex">
				{docsConfig.mainNav.map((item) => (
					<Link
						key={item.href}
						href={item.href!}
						aria-label={item.title}
						onClick={() => {}}
						target={item.external ? "_blank" : undefined}
						className={cn(
							"flex items-center justify-center link",
							pathname?.startsWith(item.href!) ? "text-foreground" : "text-foreground/60"
						)}
					>
						{item.title}
					</Link>
				))}
			</nav>
		</div>
	);
}
