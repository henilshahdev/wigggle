import React from 'react';
import {
  CloudIcon,
  MoveDownIcon,
  MoveUpIcon,
} from 'lucide-react';

const Weather = () => {
  return (
    <>
      <div className="relative flex justify-between items-start size-52 flex-col rounded-3xl border-2 p-6">
        <div className="w-full h-max flex justify-between items-center">
          <p className="text-lg font-medium">
            Mumbai
          </p>
          <CloudIcon
            fill="currentColor"
            className="size-5"
          />
        </div>
        <div className="w-full flex-1 flex justify-center items-center">
          <p className="text-5xl ">32&deg;</p>
        </div>
        <div className="w-full flex justify-between items-center text-lg">
          <div className="w-full h-max flex justify-start items-center">
            <MoveUpIcon
              fill="currentColor"
              className="size-4 mr-1"
              strokeWidth={4}
            />
            <p>36&deg;</p>
          </div>
          <div className="w-full flex justify-end items-center">
            <MoveDownIcon
              fill="currentColor"
              className="size-4 mr-1"
              strokeWidth={4}
            />
            <p>28&deg;</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
