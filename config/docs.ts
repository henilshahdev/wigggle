import {
  MainNavItem,
  SidebarNavItem,
} from '@/types';

export type DocsConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: 'Docs',
      href: '/docs/introduction',
    },
    {
      title: 'Widgets',
      href: '/docs/widgets/weather',
    },
    {
      title: 'Examples',
      href: '/examples',
    },
    {
      title: 'Playground',
      href: '/playground',
    },
  ],
  sidebarNav: [
    {
      title: 'Getting Started',
      items: [
        {
          title: 'Introduction',
          href: '/docs/introduction',
        },
        {
          title: 'Installation',
          href: '/docs/installation',
        },
        {
          title: 'Widget.tsx',
          href: '/docs/widget-tsx',
        },
      ],
    },
    {
      title: 'Widgets',
      items: [
        {
          title: 'Clock',
          href: `/docs/widgets/clock`,
          items: [],
        },
        {
          title: 'Calendar',
          href: `/docs/widgets/calendar`,
          items: [],
        },
        {
          title: 'Weather',
          href: `/docs/widgets/weather`,
          items: [],
        },
      ],
    },
  ],
};
