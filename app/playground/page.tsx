'use client';

import { WidgetCustomizerProps } from '@/types';
import React from 'react';
import { Filters } from './Filters';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Widget,
  WidgetHeader,
  WidgetTitle,
  WidgetContent,
  WidgetFooter,
} from '@/registry/default/wigggle/widget';
import { JSXEditor } from './JSXEditor';
import CodePreview from './CodePreview';
import {
  AppWindowIcon,
  Code2Icon,
} from 'lucide-react';

export default function Playground() {
  const [props, setProps] =
    React.useState<WidgetCustomizerProps>({
      size: 'square',
      design: 'default',
      variant: 'default',
      title: '<WidgetTitle>Title</WidgetTitle>',
      content: '<div>Content</div>',
      footer: '<div>Footer</div>',
    });

  const handlePropsChange = (
    key: keyof WidgetCustomizerProps,
    value: string
  ) => {
    setProps((prevProps) => ({
      ...prevProps,
      [key]: value,
    }));
  };

  return (
    <div className="flex flex-1 gap-6 lg:container mx-auto overflow-hidden p-6">
      <Filters
        onPropChange={handlePropsChange}
        props={props}
      />
      <div className="flex-1 flex flex-col">
        <Tabs
          defaultValue="preview"
          className="w-full"
        >
          <TabsList>
            <TabsTrigger value="preview">
              <AppWindowIcon
                className="size-5 mr-3"
                strokeWidth={1.5}
              />
              Preview
            </TabsTrigger>
            <TabsTrigger value="code">
              <Code2Icon
                className="size-5 mr-3"
                strokeWidth={1.5}
              />
              Code
            </TabsTrigger>
          </TabsList>
          <TabsContent value="preview">
            <div className="flex-1 flex items-center justify-center border-2 border-muted rounded-lg p-16 mb-4">
              <Widget {...props}>
                <WidgetHeader>
                  <WidgetTitle>
                    <JSXEditor
                      code={props.title}
                      onChange={(e) =>
                        handlePropsChange(
                          'title',
                          e.currentTarget.value
                        )
                      }
                    />
                  </WidgetTitle>
                </WidgetHeader>
                <WidgetContent>
                  <JSXEditor
                    code={props.content}
                    onChange={(e) =>
                      handlePropsChange(
                        'content',
                        e.currentTarget.value
                      )
                    }
                  />
                </WidgetContent>
                <WidgetFooter>
                  <JSXEditor
                    code={props.footer}
                    onChange={(e) =>
                      handlePropsChange(
                        'footer',
                        e.currentTarget.value
                      )
                    }
                  />
                </WidgetFooter>
              </Widget>
            </div>
          </TabsContent>
          <TabsContent value="code">
            <div className="flex-1">
              <CodePreview {...props} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
