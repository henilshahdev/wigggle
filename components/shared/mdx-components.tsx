// @ts-nocheck
"use client";

import { cloneElement, useRef } from "react";

import * as runtime from "react/jsx-runtime";
import { Accordion, AccordionTrigger, AccordionContent, AccordionItem } from "../ui/accordion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Callout } from "@/components/shared/callout";
import { Step, Steps } from "@/components/shared/steps";
import { CopyCode } from "@/components/shared/copy-code";

const sharedComponents = {
	Accordion,
	AccordionTrigger,
	AccordionContent,
	AccordionItem,
	Callout,
	Step,
	Steps,
};

// parse the Velite generated MDX code into a React component function
const useMDXComponent = (code: string) => {
	const fn = new Function(code);
	return fn({ ...runtime }).default;
};

interface MDXProps {
	code: string;
	components?: Record<string, React.ComponentType>;
}

const overriddenComponents = {
	h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h1 className={cn("font-heading mt-2 scroll-m-20 text-4xl font-bold", className)} {...props} />
	),
	h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h2
			className={cn(
				"font-heading mt-12 scroll-m-6 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0",
				className
			)}
			{...props}
		/>
	),
	LinkedCard: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
		<Link
			className={cn(
				"flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10",
				className
			)}
			{...props}
		/>
	),
	pre: (props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => {
		const codeRef = useRef<HTMLElement>(null);

		return (
			<pre className="relative" {...props}>
				<CopyCode ctx={codeRef} />
				{cloneElement(props.children as ReactElement, { ref: codeRef })}
			</pre>
		);
	},
};

// MDXContent component
export const MDXContent = ({ code, components }: MDXProps) => {
	const Component = useMDXComponent(code);
	return <Component components={{ ...sharedComponents, ...overriddenComponents, ...components }} />;
};
