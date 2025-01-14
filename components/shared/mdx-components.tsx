// @ts-nocheck
'use client';

import { cloneElement, useRef } from 'react';

import * as runtime from 'react/jsx-runtime';
import {
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
} from '../ui/accordion';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Callout } from '@/components/shared/callout';
import { Step, Steps } from '@/components/shared/steps';
import { CopyCode } from '@/components/shared/copy-code';
import { ComponentPreview } from '@/components/shared/component-preview';
import { ComponentSource } from '@/components/shared/component-source';
import { StyleWrapper } from '@/components/shared/style-wrapper';
import { Tabs, TabsTrigger, TabsContent, TabsList } from '@/components/ui/tabs';

const sharedComponents = {
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
};

// parse the Velite generated MDX code into a React component function
const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

interface MDXProps {
  code: string;
  components?: Record<string, React.ComponentType>;
}

const overriddenComponents = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        'font-heading mt-2 scroll-m-20 text-4xl font-semibold',
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        'font-heading mt-6 scroll-m-6 border-b-2 pb-2 text-2xl font-medium tracking-tight first:mt-0',
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        'font-heading mt-8 scroll-m-20 text-xl font-medium tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        'font-heading mt-8 scroll-m-20 text-lg font-medium tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        'mt-8 scroll-m-20 text-lg font-medium tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        'mt-8 scroll-m-20 text-base font-medium tracking-tight',
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn('py-2 leading-7 [&:not(:first-child)]:mt-2', className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn('ml-6 list-disc', className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn('ml-6 list-decimal', className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={cn('mt-2 first:mt-3', className)} {...props} />
  ),
  a: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <a className={cn('w-max link', className)} {...props} />
  ),
  Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link className={cn('w-max link', className)} {...props} />
  ),
  pre: (
    props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>
  ) => {
    const codeRef = useRef<HTMLElement>(null);

    return (
      <pre
        className="mt-6 relative overflow-auto max-h-96 text-wrap"
        {...props}
      >
        <CopyCode ctx={codeRef} />
        {cloneElement(props.children as ReactElement, { ref: codeRef })}
      </pre>
    );
  },
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="mt-3 mb-6 w-full overflow-auto rounded-lg border-2 border-border">
      <table
        className={cn('my-0 w-full overflow-hidden', className)}
        {...props}
      />
    </div>
  ),
  thead: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead
      className={cn(
        'border-b-2 last:border-b-0 odd:bg-background even:bg-background/50',
        className
      )}
      {...props}
    />
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn(
        'border-b-2 last:border-b-0 odd:bg-background even:bg-background/50',
        className
      )}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        'text-balance border-r-2 border-border p-4 text-left font-mono text-sm font-semibold tracking-tight text-secondary-foreground last:border-r-0 bg-zinc-950 dark:bg-zinc-900',
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        'border-r-2 border-border p-4 text-sm text-secondary-foreground last:border-r-0 [&[align=center]]:text-center [&[align=right]]:text-right text-wrap',
        className
      )}
      {...props}
    />
  ),
  LinkedCard: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn(
        'flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10',
        className
      )}
      {...props}
    />
  ),
  Tabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => (
    <Tabs className={cn('relative mt-6 w-full', className)} {...props} />
  ),
  TabsList: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsList>) => (
    <TabsList
      className={cn(
        'w-full justify-start rounded-none border-b bg-transparent p-0',
        className
      )}
      {...props}
    />
  ),
  TabsTrigger: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsTrigger>) => (
    <TabsTrigger
      className={cn(
        'relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none',
        className
      )}
      {...props}
    />
  ),
  TabsContent: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsContent>) => (
    <TabsContent
      className={cn(
        'relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold',
        className
      )}
      {...props}
    />
  ),
  Callout,
  Step,
  Steps,
  ComponentPreview,
  ComponentSource,
};

// MDXContent component
export const MDXContent = ({ code, components }: MDXProps) => {
  const Component = useMDXComponent(code);
  return (
    <Component
      components={{
        ...sharedComponents,
        ...overriddenComponents,
        ...components,
      }}
    />
  );
};
