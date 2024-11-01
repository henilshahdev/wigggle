"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { MenuIcon } from "lucide-react";
import { Icons } from "./icons";

export function MobileNav() {
	const [open, setOpen] = React.useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger className="mr-6" asChild>
				<Button variant="outline" className="md:hidden w-10 h-10">
					<MenuIcon />
					<span className="sr-only">Toggle Menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="pr-0">
				<SheetTitle className="flex gap-3">
					<Icons.gitHub className="size-6" />
					Wigggle
				</SheetTitle>
				<ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
					<div className="flex flex-col space-y-3">
						{docsConfig.mainNav?.map(
							(item) =>
								item.href && (
									<MobileLink key={item.href} href={item.href} onOpenChange={setOpen}>
										{item.title}
									</MobileLink>
								)
						)}
					</div>
					<div className="flex flex-col space-y-2">
						{docsConfig.sidebarNav.map((item, index) => (
							<div key={index} className="flex flex-col space-y-3 pt-6">
								<h4 className="font-medium">{item.title}</h4>
								{item.items?.map((item) => (
									<MobileLink
										key={item.href}
										href={item.href!}
										onOpenChange={setOpen}
										onClick={() => {}}
										className={cn("link")}
									>
										{item.title}
									</MobileLink>
								))}
							</div>
						))}
					</div>
				</ScrollArea>
			</SheetContent>
		</Sheet>
	);
}

interface MobileLinkProps extends LinkProps {
	onOpenChange?: (open: boolean) => void;
	children: React.ReactNode;
	className?: string;
}

function MobileLink({ href, onOpenChange, className, children, ...props }: MobileLinkProps) {
	const router = useRouter();
	return (
		<Link
			href={href}
			onClick={() => {
				router.push(href.toString());
				onOpenChange?.(false);
			}}
			className={cn(className)}
			{...props}
		>
			{children}
		</Link>
	);
}
