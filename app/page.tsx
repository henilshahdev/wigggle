import { WidgetDemo } from '@/components/shared/widget-demo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const page = () => {
  const allWidgets = [
    {
      category: 'clock',
      widgets: [
        'clock-01',
        'clock-02',
        'clock-03',
        'clock-04',
        'clock-05',
        'clock-06',
        'clock-07',
        'clock-08',
        'clock-09',
      ],
    },
    {
      category: 'weather',
      widgets: [
        'weather-01',
        'weather-02',
        'weather-03',
        'weather-04',
        'weather-05',
        'weather-06',
      ],
    },
    {
      category: 'meeting',
      widgets: [
        'meeting-01',
        'meeting-02',
        'meeting-03',
        'meeting-04',
      ],
    },
    {
      category: 'calendar',
      widgets: [
        'calendar-01',
        'calendar-02',
        'calendar-03',
      ],
    },
  ];

  return (
    <div className="container mx-auto flex flex-col gap-6 md:gap-8 px-6 sm:px-0 py-6">
      <div className="flex flex-col gap-6 p-6 border-b-2">
        <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:leading-[1.1]">
          Build your widget library
        </h1>
        <p className="max-w-2xl text-lg font-light text-foreground">
          Fully Open Source widgets that you can
          start using now.
        </p>
        <div className="flex-start gap-4">
          <Link href="/docs/introduction">
            <Button size="sm" variant="secondary">
              Get Started
            </Button>
          </Link>
          <Link href="/playground">
            <Button size="sm" variant="secondary">
              Playground
            </Button>
          </Link>
        </div>
      </div>
      {allWidgets.map((eachWidgetByCategory) => {
        return (
          <div className="w-max flex flex-col gap-3 items-start px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 items-start sm:mx-auto sm:gap-x-16 gap-y-8">
              {eachWidgetByCategory.widgets.map(
                (eachWidget) => (
                  <WidgetDemo
                    key={eachWidget}
                    widgetName={eachWidget}
                    subDirectory={
                      eachWidgetByCategory.category
                    }
                  />
                )
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default page;
