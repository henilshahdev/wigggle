import { MDXContent } from "@/components/shared/mdx-components";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import React from "react";

import { docs } from "~content";

const page = async () => {
	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center space-x-1 text-sm leading-none text-muted-foreground">
				<div className="truncate">Docs</div>
				<ChevronRightIcon className="size-4" />
				<div className="text-foreground">{docs.title}</div>
			</div>
			<div className="space-y-2">
				<h1 className={cn("scroll-m-20 text-3xl font-bold tracking-tight")}>{docs.title}</h1>
				{docs.description && <p className="text-base text-muted-foreground">{docs.description}</p>}
			</div>
			<MDXContent code={docs.body} />
		</div>
	);
};

export default page;
