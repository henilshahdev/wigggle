import Link from "next/link";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/shared/icons";
import { MainNav } from "@/components/shared/main-nav";
import { MobileNav } from "@/components/shared/mobile-nav";
import { buttonVariants } from "@/components/ui/button";

export async function Header() {
	return (
		<header
			className={cn(
				"supports-backdrop-blur:bg-background/90 sticky top-0 z-40 w-full backdrop-blur-lg border-b-2"
			)}
		>
			<div className="container mx-auto flex items-center h-20 px-6 sm:px-0">
				<div className="flex items-center justify-between flex-1 gap-2">
					<MobileNav />
					<div className="w-full flex-1 md:w-auto md:flex-none -mt-1">
						<Link href="/" className="relative flex justify-start items-center space-x-3 w-48">
							<Icons.gitHub className="size-6" />
							<span className="text-2xl">{siteConfig.name}</span>
						</Link>
					</div>
					<MainNav />

					<nav className="w-48 flex justify-end items-center gap-x-1">
						<Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
							<div
								className={cn(
									buttonVariants({
										variant: "ghost",
										size: "icon",
									})
								)}
							>
								<Icons.gitHub className="size-4" />
								<span className="sr-only">GitHub</span>
							</div>
						</Link>
						<Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
							<div
								className={cn(
									buttonVariants({
										variant: "ghost",
										size: "icon",
									})
								)}
							>
								<Icons.twitter className="size-4 fill-current" />
								<span className="sr-only">Twitter</span>
							</div>
						</Link>
					</nav>
				</div>
			</div>
		</header>
	);
}
