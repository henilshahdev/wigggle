import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckIcon, ClipboardIcon } from 'lucide-react';

export function CopyCode({ ctx }: { ctx: React.RefObject<HTMLElement> }) {
  const [clicked, setClick] = React.useState(false);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setClick(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [clicked, setClick]);

  async function onClick() {
    // TODO: account for potential errors?
    await navigator.clipboard.writeText(
      ctx.current?.textContent ?? 'Failed to copy'
    );
    setClick(true);
  }

  const icon = clicked ? (
    <CheckIcon className="h-4 w-4 text-primary" />
  ) : (
    <ClipboardIcon className="h-4 w-4" />
  );
  return (
    <Button
      onClick={onClick}
      className="absolute top-2 right-2 hover:bg-muted-foreground/10"
      variant="ghost"
      size="icon"
    >
      {icon}
    </Button>
  );
}
