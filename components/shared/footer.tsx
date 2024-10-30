import { siteConfig } from "@/config/site";

export function Footer() {
	return (
		<footer className="flex items-center justify-center h-16 border-t-2">
			<p className="text-balance text-center leading-loose text-muted-foreground">
				Designed & Developed by{" "}
				<a href={siteConfig.links.twitter} target="_blank" rel="noreferrer" className="link">
					Henil Shah
				</a>
				.
			</p>
		</footer>
	);
}
