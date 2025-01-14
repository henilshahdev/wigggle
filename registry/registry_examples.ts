import { Registry } from '@/registry/schema';

export const examples: Registry = [
  {
    name: 'basic-example-widget',
    type: 'registry:example',
    registryDependencies: [''],
    files: ['example/basic-example-widget.tsx'],
  },
  {
    name: 'custom-styles-widget',
    type: 'registry:example',
    registryDependencies: [''],
    files: ['example/custom-styles-widget.tsx'],
  },
  {
    name: 'weather-default',
    type: 'registry:example',
    registryDependencies: ['weather'],
    files: ['docs/weather/weather-default.tsx'],
  },
  {
    name: 'weather-rectangle',
    type: 'registry:example',
    registryDependencies: ['weather'],
    files: ['docs/weather/weather-rectangle.tsx'],
  },
  {
    name: 'weather-large',
    type: 'registry:example',
    registryDependencies: ['weather'],
    files: ['docs/weather/weather-large.tsx'],
  },
  {
    name: 'clock-default',
    type: 'registry:example',
    registryDependencies: ['clock'],
    files: ['docs/clock/clock-default.tsx'],
  },
  {
    name: 'clock-rectangle',
    type: 'registry:example',
    registryDependencies: ['clock'],
    files: ['docs/clock/clock-rectangle.tsx'],
  },
  {
    name: 'clock-large',
    type: 'registry:example',
    registryDependencies: ['clock'],
    files: ['docs/clock/clock-large.tsx'],
  },
  {
    name: 'calendar-default',
    type: 'registry:example',
    registryDependencies: ['calendar'],
    files: ['docs/calendar/calendar-default.tsx'],
  },
  {
    name: 'calendar-rectangle',
    type: 'registry:example',
    registryDependencies: ['calendar'],
    files: [
      'docs/calendar/calendar-rectangle.tsx',
    ],
  },
  {
    name: 'calendar-large',
    type: 'registry:example',
    registryDependencies: ['calendar'],
    files: ['docs/calendar/calendar-large.tsx'],
  },
];
