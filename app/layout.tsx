import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";

import "./globals.css";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Wigggle",
	description: "Yet another Component Warehouse but with Widgets.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={cn(
					"dark relative min-h-screen w-full h-full flex flex-col justify-center overflow-x-hidden scroll-smooth bg-background text-foreground antialiased",
					outfit.className
				)}
			>
				<TooltipProvider>
					<Header />
					<main className="flex-1 px-12">{children}</main>
					<Footer />
				</TooltipProvider>
			</body>
		</html>
	);
}
