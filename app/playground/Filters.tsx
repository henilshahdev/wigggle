import { WidgetCustomizerProps } from '@/types';

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

interface FiltersProps {
  props: WidgetCustomizerProps;
  onPropChange: (
    key: keyof WidgetCustomizerProps,
    value: string
  ) => void;
}

export const Filters: React.FC<FiltersProps> = ({
  props,
  onPropChange,
}) => {
  const allSelectFilters = [
    {
      id: 1,
      title: 'Size',
      options: ['square', 'rectangle', 'large'],
    },
    {
      id: 2,
      title: 'Variant',
      options: ['default', 'secondary'],
    },
    {
      id: 3,
      title: 'Design',
      options: ['default', 'mumbai'],
    },
  ];

  const allCodeEdits = [
    {
      id: 4,
      title: 'Header',
    },
    {
      id: 5,
      title: 'Content',
    },
    {
      id: 6,
      title: 'Footer',
    },
  ];

  return (
    <div className="w-80 flex-start flex-col gap-4">
      <CardTitle className="text-2xl tracking-wide w-full text-start">
        Filters
      </CardTitle>
      {allSelectFilters.map(
        (eachSelectFilter) => (
          <SelectFilter
            key={eachSelectFilter.id}
            title={eachSelectFilter.title}
            onPropChange={onPropChange}
            options={eachSelectFilter.options}
          />
        )
      )}
      {allCodeEdits.map((eachCodeEdit) => (
        <CodeEdits
          key={eachCodeEdit.id}
          title={eachCodeEdit.title}
          onPropChange={onPropChange}
        />
      ))}
    </div>
  );
};

type SelectFilterProps = {
  title: string;
  onPropChange: (
    key: keyof WidgetCustomizerProps,
    value: string
  ) => void;
  options: string[];
};

export function SelectFilter({
  title,
  onPropChange,
  options,
}: SelectFilterProps) {
  return (
    <div className="w-full flex flex-col">
      <Label
        htmlFor="size"
        className="block text-base font-medium"
      >
        {title}
      </Label>
      <Select
        onValueChange={(value) => {
          onPropChange(
            title.toLowerCase() as keyof WidgetCustomizerProps,
            value
          );
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select size" />
        </SelectTrigger>
        <SelectContent>
          {options.map((eachOption) => (
            <SelectItem
              key={eachOption}
              value={eachOption.toLowerCase()}
            >
              {eachOption}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

type CodeEditsProps = {
  title: string;
  onPropChange: (
    key: keyof WidgetCustomizerProps,
    value: string
  ) => void;
};

function CodeEdits({
  title,
  onPropChange,
}: CodeEditsProps) {
  return (
    <div className="w-full flex flex-col">
      <label
        htmlFor="title"
        className="block text-sm font-medium"
      >
        {title} (JSX)
      </label>
      <Textarea
        id={title.toLowerCase()}
        placeholder="Type JSX here"
        onChange={(e) =>
          onPropChange(
            title.toLowerCase() as keyof WidgetCustomizerProps,
            e.currentTarget.value
          )
        }
        className="w-full h-28 p-2 border rounded-md"
        spellCheck="false"
      />
    </div>
  );
}
