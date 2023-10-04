import { NavItem } from './sidebar';

export const DEFAULT_NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Home' },
  {
    label: 'Components',
    children: [
      { href: '/components/button', label: 'Button' },
      { href: '/components/typography', label: 'Typography' },
      { href: '/components/colors', label: 'Colors' },
      { href: '/components/input', label: 'Input' },
      { href: '/components/select', label: 'Select' },
      { href: '/components/textarea', label: 'Textarea' },
      { href: '/components/breadcrumb', label: 'Breadcrumb' },
      { href: '/components/alert', label: 'Alert' },
      { href: '/components/radio-group', label: 'Radio Group' },
      { href: '/components/tabs', label: 'Tabs' },
      { href: '/components/accordion', label: 'Accordion' },
      { href: '/components/icons', label: 'Icons' },
      { href: '/components/checkbox-group', label: 'Checkbox Group' },
      { href: '/components/button-group', label: 'Button Group' },
      { href: '/components/switch', label: 'Switch' },
      { href: '/components/progress-bar', label: 'Progress Bar' },
      { href: '/components/link', label: 'Link' },
      { href: '/components/table', label: 'Table' },
      { href: '/components/collapsible', label: 'Collapsible' },
      { href: '/components/date-picker', label: 'Date Picker' },
      { href: '/components/list', label: 'List' },
      { href: '/components/flexi-cell', label: 'Flexi Cell' },
      { href: '/components/autocomplete', label: 'Autocomplete' },
      { href: '/components/panel', label: 'Panel' },
      { href: '/components/button-dropdown', label: 'Button Dropdown' },
      { href: '/components/input-field', label: 'Input Field' },
      { href: '/components/modal', label: 'Modal' },
      { href: '/components/popover', label: 'Popover' },
      { href: '/components/progress-rope', label: 'Progress Rope' },
      { href: '/components/compacta', label: 'Compacta' },
      { href: '/components/repeater', label: 'Repeater' },
    ],
  },
];
