import { Widget, WidgetContent, WidgetTitle } from '../../wigggle/widget';

export default function ClockDemo() {
  return (
    <Widget size="large">
      <WidgetContent className="flex-between gap-3">
        <div className="w-full flex-center flex-col gap-2">
          <p className="text-muted-foreground">Mumbai</p>
          <WidgetTitle className="text-2xl">Tuesday</WidgetTitle>
          <WidgetTitle className="text-4xl tracking-widest">7:10</WidgetTitle>
        </div>
        <div className="w-full flex-center flex-col gap-2">
          <p className="text-muted-foreground">London</p>
          <WidgetTitle className="text-2xl">Tuesday</WidgetTitle>
          <WidgetTitle className="text-4xl tracking-widest">1:40</WidgetTitle>
        </div>
      </WidgetContent>
      <WidgetContent className="flex-between gap-3">
        <div className="w-full flex-center flex-col gap-2">
          <p className="text-muted-foreground">Vancouver</p>
          <WidgetTitle className="text-2xl">Monday</WidgetTitle>
          <WidgetTitle className="text-4xl tracking-widest">17:40</WidgetTitle>
        </div>
        <div className="w-full flex-center flex-col gap-2">
          <p className="text-muted-foreground">Seoul</p>
          <WidgetTitle className="text-2xl">Tuesday</WidgetTitle>
          <WidgetTitle className="text-4xl tracking-widest">10:40</WidgetTitle>
        </div>
      </WidgetContent>
    </Widget>
  );
}
