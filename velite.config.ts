import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { codeImport } from "remark-code-import";
import remarkGfm from "remark-gfm";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";
import { createHighlighter } from "shiki";
import rehypeSlug from "rehype-slug";
import { defineConfig, defineCollection, s } from "velite";

// Configuring code highlighting
const prettyCodeOptions: Options = {
	theme: "github-dark-default",
	getHighlighter: (options) =>
		createHighlighter({
			...options,
		}),
	onVisitLine(node) {
		// Prevent lines from collapsing in `display: grid` mode, and allow empty
		// lines to be copy/pasted
		if (node.children.length === 0) {
			node.children = [{ type: "text", value: " " }];
		}
	},
	onVisitHighlightedLine(node) {
		if (!node.properties.className) {
			node.properties.className = [];
		}
		node.properties.className.push("line--highlighted");
	},
	onVisitHighlightedChars(node) {
		if (!node.properties.className) {
			node.properties.className = [];
		}
		node.properties.className = ["word--highlighted"];
	},
};

const computedFields = <T extends { slug: string }>(data: T) => ({
	...data,
	slugAsParams: data.slug.split("/").slice(1).join("/"),
});

// Docs Collection Schema
const pages = defineCollection({
	name: "Page",
	pattern: "root/***.mdx",
	schema: s
		.object({
			slug: s.path(),
			title: s.string().max(99),
			description: s.string().max(999).optional(),
			date: s.isodate(),
			published: s.boolean().default(true),
			body: s.mdx(),
			toc: s.toc(),
		})
		.transform(computedFields),
});

// Widgets Collection Schema
const widgets = defineCollection({
	name: "Widget",
	pattern: "widgets/***.mdx",
	schema: s
		.object({
			slug: s.path(),
			title: s.string(),
			description: s.string(),
			published: s.boolean().default(true),
			date: s.string().optional(),
			featured: s.boolean().optional().default(false),
			component: s.boolean().optional().default(false),
			toc: s.toc(),
			body: s.mdx(),
		})
		.transform(computedFields),
});

export default defineConfig({
	root: "content",
	output: {
		data: ".velite",
		assets: "public/static",
		base: "/static/",
		name: "[name]-[hash:6].[ext]",
		clean: true,
	},
	collections: { pages, widgets },
	mdx: {
		rehypePlugins: [
			rehypeSlug,
			[rehypePrettyCode, prettyCodeOptions],
			[
				rehypeAutolinkHeadings,
				{
					behaviour: "wrap",
					properties: {
						className: ["subheading-anchor"],
						ariaLabel: "Link to section",
					},
				},
			],
		],
		remarkPlugins: [],
	},
});
