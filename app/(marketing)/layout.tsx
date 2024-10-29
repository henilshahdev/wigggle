import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";

export default async function MarketingLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Header />
			<main className="flex-1 px-12">{children}</main>
			<Footer />
		</>
	);
}
