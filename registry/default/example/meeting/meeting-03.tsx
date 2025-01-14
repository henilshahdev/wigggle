import * as React from 'react';
import {
  Widget,
  WidgetContent,
  WidgetFooter,
  WidgetTitle,
} from '../../wigggle/widget';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  CircleIcon,
  MessageCircleIcon,
  PhoneIcon,
  VideoIcon,
} from 'lucide-react';

export default function Meeting03() {
  return (
    <Widget>
      <WidgetContent className="flex-col gap-2">
        <Avatar className="size-14">
          <AvatarImage src="https://github.com/henilshahdev.png" alt="@henil" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <WidgetTitle className="flex items-center">
          <CircleIcon
            color="bg-green-500"
            className="size-2.5 bg-green-500 rounded-full mr-2"
          />
          Henil
        </WidgetTitle>
      </WidgetContent>
      <WidgetFooter className="justify-center gap-2">
        <Button variant="outline" size="icon">
          <VideoIcon />
        </Button>
        <Button variant="outline" size="icon">
          <PhoneIcon />
        </Button>
        <Button variant="outline" size="icon">
          <MessageCircleIcon />
        </Button>
      </WidgetFooter>
    </Widget>
  );
}
