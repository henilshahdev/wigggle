import React from "react";
import { notFound } from "next/navigation";

import "@/styles/mdx.css";
import { cn } from "@/lib/utils";

import { pages, widgets } from "~content";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MDXContent } from "@/components/shared/mdx-components";
import { DashboardTableOfContents } from "@/components/shared/toc";

interface DocPageProps {
	params: {
		slug: string[];
	};
}

async function getDocFromParams({ params }: DocPageProps) {
	const slug = params.slug?.join("/") || "";

	// check if the slug is for a widget or a page
	if (params.slug[0] === "widgets") {
		const widgetSlug = params.slug.slice(1).join("/");
		const widget = widgets.find((widget) => widget.slugAsParams === widgetSlug);

		if (!widget) {
			return null;
		}

		return widget;
	} else {
		const doc = pages.find((doc) => doc.slugAsParams === slug);

		if (!doc) {
			return null;
		}

		return doc;
	}
}

const page = async ({ params }: DocPageProps) => {
	const doc = await getDocFromParams({ params });

	if (!doc) {
		notFound();
	}

	return (
		<main className="relative lg:gap-10 xl:grid xl:grid-cols-[1fr_300px]">
			<div className="mx-auto w-full min-w-0 pb-16">
				<div className="flex flex-col gap-6">
					<div className="space-y-2">
						<h1 className={cn("scroll-m-20 text-3xl font-medium tracking-tight")}>{doc.title}</h1>
						{doc.description && <p className="text-lg text-muted-foreground">{doc.description}</p>}
					</div>
					<div className="flex flex-col">
						<MDXContent code={doc.body} />
					</div>
				</div>
			</div>
			<div className="hidden text-sm xl:block">
				<div className="sticky top-0">
					<ScrollArea className="min-w-72">
						{doc.toc && <DashboardTableOfContents toc={doc.toc} />}
					</ScrollArea>
				</div>
			</div>
		</main>
	);
};

export default page;
