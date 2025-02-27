import Image from 'next/image';
import React from 'react';

const ScoreCard = () => {
  return (
    <div className="relative flex flex-col gap-6 w-96 h-48 rounded-3xl border-2 p-6">
      <div className="w-full h-max flex justify-between items-center">
        <p>La Liga</p>
        <p>16/09/2023</p>
      </div>
      <div className="flex-1 flex justify-between items-center px-2">
        <div className="col-span-2">
          <div className="flex justify-start items-center flex-col gap-1">
            <Image
              src="https://ssl.gstatic.com/onebox/media/sports/logos/paYnEE8hcrP96neHRNofhQ_96x96.png"
              alt="FCB"
              className="size-10"
              width={128}
              height={128}
            />
            <p className="font-medium">
              Barcelona
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 text-4xl">
          <div className="col-span-2 flex-justify-start items-center gap-8">
            5
          </div>
          <p>-</p>
          <div className="col-span-2 flex-justify-end items-center gap-8">
            0
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex justify-end items-center flex-col gap-1">
            <Image
              src="https://ssl.gstatic.com/onebox/media/sports/logos/XDClkrMKtkm3UTP2YKN6oQ_96x96.png"
              alt="RLB"
              className="size-10"
              width={128}
              height={128}
            />
            <p className="font-medium">
              Real Betis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
