import React from 'react';
import {
  LiveProvider,
  LiveError,
  LivePreview,
} from 'react-live';
import * as LucideIcons from 'lucide-react';
import { WidgetTitle } from '@/registry/default/wigggle/widget';

type JSXEditorProps = {
  code: string;
  onChange: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
};

export const JSXEditor = ({
  code,
}: JSXEditorProps) => {
  const scope = {
    ...LucideIcons,
    WidgetTitle,
  };

  return (
    <div>
      <LiveProvider code={code} scope={scope}>
        <LiveError />
        <LivePreview />
      </LiveProvider>
    </div>
  );
};
