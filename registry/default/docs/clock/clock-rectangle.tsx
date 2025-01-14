import {
  Widget,
  WidgetContent,
  WidgetTitle,
} from '../../wigggle/widget';

export default function ClockDemo() {
  return (
    <Widget size="rectangle">
      <WidgetContent className="flex-between gap-3">
        <div className="w-full flex-center flex-col gap-2">
          <p className="text-muted-foreground">
            Mumbai
          </p>
          <WidgetTitle className="text-2xl">
            Tuesday
          </WidgetTitle>
          <WidgetTitle className="text-5xl tracking-widest">
            7:10
          </WidgetTitle>
        </div>
        <div className="w-full flex-center flex-col gap-2">
          <p className="text-muted-foreground">
            London
          </p>
          <WidgetTitle className="text-2xl">
            Tuesday
          </WidgetTitle>
          <WidgetTitle className="text-5xl tracking-widest">
            1:40
          </WidgetTitle>
        </div>
      </WidgetContent>
    </Widget>
  );
}
