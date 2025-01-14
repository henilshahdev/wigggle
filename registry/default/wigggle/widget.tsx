import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const widgetVariants = cva(
  'relative flex flex-col border-2 whitespace-nowrap shadow-md rounded-3xl',
  {
    variants: {
      size: {
        square: 'w-48 h-48',
        rectangle: 'w-80 md:w-96 h-48',
        large: 'w-80 h-80 md:w-96 md:h-96',
      },
      design: {
        default: 'p-6',
        mumbai: 'p-4',
      },
      variant: {
        default: 'bg-background text-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
      },
    },
    defaultVariants: {
      size: 'square',
      design: 'default',
      variant: 'default',
    },
  }
);

export interface WidgetProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof widgetVariants> {
  asChild?: boolean;
}

const Widget = React.forwardRef<HTMLDivElement, WidgetProps>(
  ({ className, size, design, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(widgetVariants({ size, design, variant, className }))}
      {...props}
    />
  )
);
Widget.displayName = 'Widget';

const WidgetHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex-none flex justify-between items-start text-semibold',
      className
    )}
    {...props}
  />
));
WidgetHeader.displayName = 'WidgetHeader';

const WidgetTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('font-semibold leading-none tracking-tight', className)}
    {...props}
  />
));
WidgetTitle.displayName = 'WidgetTitle';

const WidgetContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex-1 flex justify-center items-center', className)}
    {...props}
  />
));
WidgetContent.displayName = 'WidgetContent';

const WidgetFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex-none flex justify-between items-center', className)}
    {...props}
  />
));
WidgetFooter.displayName = 'WidgetFooter';

export {
  Widget,
  WidgetHeader,
  WidgetTitle,
  WidgetContent,
  WidgetFooter,
  widgetVariants,
};
