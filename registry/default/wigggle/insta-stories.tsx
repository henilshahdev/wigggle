'use client';

import React, {
  useState,
  useEffect,
} from 'react';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import Image from 'next/image';

const stories = [
  {
    id: 1,
    content: 'Enjoying a beautiful sunset!',
  },
  {
    id: 2,
    content: 'Just finished a great workout!',
  },
  {
    id: 3,
    content: 'Trying out a new recipe today!',
  },
  {
    id: 4,
    content:
      'Exploring a hidden gem in the city!',
  },
];

const InstaStories = () => {
  const [currentStory, setCurrentStory] =
    useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress(
          (prevProgress) => prevProgress + 1
        );
      } else {
        setProgress(0);
        setCurrentStory(
          (prevStory) =>
            (prevStory + 1) % stories.length
        );
      }
    }, 50); // 5 seconds per story (50ms * 100)

    return () => clearInterval(timer);
  }, [progress]);

  return (
    <Card className="w-[375px] h-[667px] overflow-hidden relative rounded-md">
      <CardContent className="p-0 h-full">
        <div className="absolute top-0 left-0 right-0 z-10 flex p-2 gap-1">
          {stories.map((_, index) => (
            <div
              key={index}
              className="h-1 bg-muted-foreground flex-1 rounded-full overflow-hidden"
            >
              <div
                className="h-full bg-foreground transition-all duration-50 ease-linear"
                style={{
                  width: `${index === currentStory ? progress : index < currentStory ? 100 : 0}%`,
                }}
              />
            </div>
          ))}
        </div>
        <div className="absolute top-6 left-4 z-10 flex items-center gap-2">
          <Image
            src="https://github.com/t3dotgg.png"
            alt="T3"
            width={48}
            height={48}
            className="size-10 rounded-full"
          />
          <span className="text-sm">t3dotgg</span>
        </div>
        <div className="h-full flex items-center justify-center bg-background">
          <p className="text-2xl font-bold text-center px-8">
            {stories[currentStory].content}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default InstaStories;
