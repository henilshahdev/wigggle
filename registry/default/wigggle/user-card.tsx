import { BadgeCheckIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const UserCard = () => {
  return (
    <div className="relative flex justify-center items-start gap-4 w-full max-w-sm rounded-3xl border-2 p-6">
      <div className="relative">
        <Image
          src="https://github.com/henilshahdev.png"
          alt="Henil Shah"
          width={128}
          height={128}
          className="size-12 rounded-full"
        />
        <span className="bottom-0 right-0 absolute size-3.5 bg-green-500 border-2 border-white dark:border-background rounded-full"></span>
      </div>
      <div className="flex-1 flex justify-start items-start flex-col">
        <div className="flex justify-start">
          <p className="text-xl font-medium">Henil Shah</p>
          <BadgeCheckIcon className="ml-2 size-5 text-blue-500" />
        </div>
        <p className="text-muted-foreground">henil@gmail.com</p>
      </div>
    </div>
  );
};

export default UserCard;
