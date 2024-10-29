import React from "react";
import { CloudIcon, MoveDownIcon, MoveUpIcon } from "lucide-react";

const WeatherCard = () => {
	return (
		<>
			<div className="relative flex-between items-start size-52 flex-col rounded-3xl border-2 p-6">
				<div className="w-full h-max flex-between">
					<p className="text-lg font-medium">Burnaby</p>
					<CloudIcon fill="currentColor" className="size-5" />
				</div>
				<div className="w-full flex-1 flex-center">
					<p className="text-5xl -mt-1">16&deg;</p>
				</div>
				<div className="w-full flex-between text-lg">
					<div className="w-full h-max flex-center">
						<MoveUpIcon fill="currentColor" className="size-4 mr-1" strokeWidth={4} />
						<p>12&deg;</p>
					</div>
					<div className="w-full flex-center">
						<MoveDownIcon fill="currentColor" className="size-4 mr-1" strokeWidth={4} />
						<p>7&deg;</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default WeatherCard;
