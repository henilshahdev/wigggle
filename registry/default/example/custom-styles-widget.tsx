import { Button } from '@/components/ui/button';
import {
  Widget,
  WidgetContent,
  WidgetFooter,
  WidgetHeader,
  WidgetTitle,
} from '../wigggle/widget';
import {
  CircleMinusIcon,
  CirclePlusIcon,
} from 'lucide-react';

export default function WeatherDemo() {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <Widget className="border-dashed border-primary">
      <WidgetHeader>
        <WidgetTitle className="w-full flex-between">
          <CircleMinusIcon className="hover:cursor-pointer" />
          <CirclePlusIcon className="hover:cursor-pointer" />
        </WidgetTitle>
      </WidgetHeader>
      <WidgetContent>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </WidgetContent>
      <WidgetFooter>
        <Button
          className="w-full"
          size="sm"
          variant="outline"
        >
          Submit
        </Button>
      </WidgetFooter>
    </Widget>
  );
}
