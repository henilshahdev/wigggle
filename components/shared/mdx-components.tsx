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
import { ComponentPreview } from "@/components/shared/component-preview";
import { ComponentSource } from "@/components/shared/component-source";
import { Tabs, TabsTrigger, TabsContent, TabsList } from "@/components/ui/tabs";

const sharedComponents = {
	Accordion,
	AccordionTrigger,
	AccordionContent,
	AccordionItem,
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
				"font-heading mt-6 scroll-m-6 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0",
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
	Tabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => (
		<Tabs className={cn("relative mt-6 w-full", className)} {...props} />
	),
	TabsList: ({ className, ...props }: React.ComponentProps<typeof TabsList>) => (
		<TabsList
			className={cn("w-full justify-start rounded-none border-b bg-transparent p-0", className)}
			{...props}
		/>
	),
	TabsTrigger: ({ className, ...props }: React.ComponentProps<typeof TabsTrigger>) => (
		<TabsTrigger
			className={cn(
				"relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none",
				className
			)}
			{...props}
		/>
	),
	TabsContent: ({ className, ...props }: React.ComponentProps<typeof TabsContent>) => (
		<TabsContent
			className={cn("relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold", className)}
			{...props}
		/>
	),
	Callout,
	Step,
	Steps,
	ComponentPreview,
	ComponentSource,
};

// MDXContent component
export const MDXContent = ({ code, components }: MDXProps) => {
	const Component = useMDXComponent(code);
	return <Component components={{ ...sharedComponents, ...overriddenComponents, ...components }} />;
};
