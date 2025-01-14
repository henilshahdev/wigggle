import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  CheckIcon,
  CopyIcon,
} from 'lucide-react';
import { WidgetCustomizerProps } from '@/types';

export default function CodePreview(
  props: WidgetCustomizerProps
) {
  const [copied, setCopied] = useState(false);

  const code = `<Widget
  size="${props.size}"
  design="${props.design}"
  variant="${props.variant}"
>
  <WidgetHeader>
    <WidgetTitle>${props.title}</WidgetTitle>
  </WidgetHeader>
  <WidgetContent>${props.content}</WidgetContent>
  <WidgetFooter>${props.footer}</WidgetFooter>
</Widget>`;

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">
          Generated Code
        </h2>
        <Button
          className="font-normal"
          variant="outline"
          onClick={copyCode}
        >
          {copied ? (
            <CheckIcon
              className=" text-green-500"
              strokeWidth={2}
            />
          ) : (
            <CopyIcon strokeWidth={2} />
          )}
          {copied ? 'Copied!' : 'Copy Code'}
        </Button>
      </div>
      <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}
