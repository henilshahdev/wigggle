import { cn } from "@/lib/utils";

export function Steps({ ...props }) {
	return <div className="[&>h3]:step steps mb-6 ml-6 border-l pl-8 [counter-reset:step]" {...props} />;
}

export function Step({ className, ...props }: React.ComponentProps<"h3">) {
	return <h3 className={cn("mt-8 scroll-m-20 tracking-normal", className)} {...props} />;
}
