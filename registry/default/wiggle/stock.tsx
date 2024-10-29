"use client";

import { TrendingUpIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
// import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const Stock = () => {
	// Mock data for the chart
	const chartData = [
		{ time: "9:30", price: 148.5 },
		{ time: "10:00", price: 149.2 },
		{ time: "10:30", price: 149.8 },
		{ time: "11:00", price: 150.1 },
		{ time: "11:30", price: 149.9 },
		{ time: "12:00", price: 150.4 },
		{ time: "12:30", price: 150.25 },
	];

	return (
		<div className="relative flex-normal items-start size-52 flex-col rounded-3xl border-2 p-6">
			<div className="w-full h-max flex-between items-start">
				<div className="w-full h-max flex-start flex-col items-start">
					<p className="font-medium">AAPL</p>
					<p className="text-xs text-muted-foreground">Apple Inc.</p>
				</div>
				<div className="flex-end text-primary">
					<TrendingUpIcon className="h-4 w-4 mr-1" />
					<p className="font-medium">1.86%</p>
				</div>
			</div>
			<div className="block size-full flex-1">
				<Image src="/chart.png" alt="chart" width={120} height={120} className="size-full object-cover" />

				<AreaChart
					accessibilityLayer
					data={chartData}
					margin={{
						left: 12,
						right: 12,
					}}
				>
					<XAxis
						dataKey="month"
						tickLine={false}
						axisLine={false}
						tickMargin={8}
						tickFormatter={(value) => value.slice(0, 3)}
					/>

					<Area
						dataKey="desktop"
						type="natural"
						fill="var(--color-desktop)"
						fillOpacity={0.4}
						stroke="var(--color-desktop)"
					/>
				</AreaChart>
			</div>
			<div className="w-full h-max flex-end">
				<p className="text-4xl font-medium">$150.57</p>
			</div>
		</div>
	);
};

export default Stock;
