import { cn } from "@/lib/utils";

interface ComponentWrapperProps {
	className?: string;
	children: any;
}
const ComponentWrapper = ({ className, children }: ComponentWrapperProps) => {
	return (
		<div
			className={cn(
				"max-w-screen relative flex flex-col items-center justify-center rounded-xl bg-background p-0 md:border md:p-16",
				className
			)}
		>
			<div className="absolute inset-0 size-full" />
			{children}
		</div>
	);
};

export default ComponentWrapper;
