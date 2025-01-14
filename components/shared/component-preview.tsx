'use client';

import * as React from 'react';

import { Code2Icon } from 'lucide-react';

import { cn } from '@/lib/utils';

import { Index } from '__registry__';
import { useConfig } from '@/hooks/use-config';
import { styles } from '@/registry/registry-styles';

import LoadingWidget from './LoadingWidget';
import ComponentWrapper from './component-wrapper';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

interface ComponentPreviewProps
  extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  align?: 'center' | 'start' | 'end';
  preview?: boolean;
  description?: string;
  type?: 'widget' | 'example';
}

export function ComponentPreview({
  preview = false,
  name,
  type,
  children,
  className,

  align = 'center',
  description,

  ...props
}: ComponentPreviewProps) {
  const [key, setKey] = React.useState(0);
  const [config] = useConfig();

  const index = styles.findIndex(
    (style) => style.name === config.style
  );
  const Codes = React.Children.toArray(
    children
  ) as React.ReactElement[];

  const Code = Codes[index];

  const Preview = React.useMemo(() => {
    const Component =
      Index[config.style][name]?.component;

    if (!Component) {
      console.error(
        `Component with name "${name}" not found in registry.`
      );
      return (
        <p className="text-sm text-muted-foreground">
          Component{' '}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {name}
          </code>{' '}
          not found in registry.
        </p>
      );
    }

    return <Component />;
  }, [name]);

  return (
    <div
      className={cn(
        'relative my-4 flex flex-col space-y-2 lg:max-w-[120ch]',
        className
      )}
      {...props}
    >
      <Sheet>
        <SheetTrigger asChild>
          <Button
            className="w-max mx-auto md:mx-0 font-normal text-sm"
            variant="ghost"
            size="sm"
          >
            <Code2Icon className="size-4" />
            View Code
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>{name}.tsx</SheetTitle>
          </SheetHeader>
          <div className="mt-3 h-full flex flex-col space-y-4">
            <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:min-h-[650px] [&_pre]:overflow-auto">
              {Code}
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <ComponentWrapper>
        <React.Suspense
          fallback={<LoadingWidget />}
        >
          {Preview}
        </React.Suspense>
      </ComponentWrapper>
    </div>
  );
}
