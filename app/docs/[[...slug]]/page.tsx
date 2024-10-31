import { MDXContent } from "@/components/shared/mdx-components";
import { cn } from "@/lib/utils";
import React from "react";
import { notFound } from "next/navigation";

import { pages } from "~content";

import "@/styles/mdx.css";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DashboardTableOfContents } from "@/components/shared/toc";

interface DocPageProps {
	params: {
		slug: string[];
	};
}

async function getDocFromParams({ params }: DocPageProps) {
	const slug = params.slug?.join("/") || "";
	const doc = pages.find((doc) => doc.slugAsParams === slug);

	if (!doc) {
		return null;
	}

	return doc;
}

const page = async ({ params }: DocPageProps) => {
	const doc = await getDocFromParams({ params });

	if (!doc) {
		notFound();
	}

	return (
		<div className="flex flex-row gap-6">
			<div className="flex flex-col">
				<div className="space-y-2">
					<h1 className={cn("scroll-m-20 text-3xl font-bold tracking-tight")}>{doc.title}</h1>
					{doc.description && <p className="text-base text-muted-foreground">{doc.description}</p>}
				</div>
				<div className="flex flex-col gap-0">
					<MDXContent code={doc.body} />
				</div>
			</div>
			<div className="hidden text-sm xl:block">
				<div className="sticky top-2">
					<ScrollArea className="min-w-72">
						{doc.toc && <DashboardTableOfContents toc={doc.toc} />}
					</ScrollArea>
				</div>
			</div>
		</div>
	);
};

export default page;
