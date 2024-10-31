import * as runtime from "react/jsx-runtime";
import { Accordion, AccordionTrigger, AccordionContent, AccordionItem } from "../ui/accordion";

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

// MDXContent component
export const MDXContent = ({ code, components }: MDXProps) => {
	const Component = useMDXComponent(code);
	return <Component components={{ ...sharedComponents, ...components }} />;
};
