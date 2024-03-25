import Link from 'next/link';

export { clsx } from 'clsx';

export { DesktopComputerPictogram, DriversLicencePictogram } from '@westpac/ui/pictogram';

export { MastercardAcceptedSymbol, WBCLogo } from '@westpac/ui/symbol';

export { StaticCode } from '../static-code/index';

export { ComponentTitle } from '../document-renderer/component-title';

export * from '../country-flags/index';

export {
  Badge,
  Button,
  Well,
  Alert,
  Breadcrumb,
  BreadcrumbItem,
  Input,
  Select,
  Textarea,
  Tabs,
  TabsPanel,
  Accordion,
  AccordionItem,
  RadioGroup,
  RadioGroupRadio,
  CheckboxGroup,
  CheckboxGroupCheckbox,
  ButtonGroup,
  ButtonGroupButton,
  Switch,
  ProgressBar,
  Link,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableHeaderRow,
  TableRow,
  Collapsible,
  DatePicker,
  List,
  ListItem,
  ErrorMessage,
  FlexiCell,
  FlexiCellBody,
  FlexiCellFooter,
  FlexiCellAdornment,
  FlexiCellHint,
  FlexiCellLabel,
  FlexiCellButton,
  FlexiCellCircle,
  Circle,
  Autocomplete,
  AutocompleteItem,
  Panel,
  PanelBody,
  PanelFooter,
  ButtonDropdown,
  ButtonDropdownHeading,
  InputGroup,
  Modal,
  ModalBody,
  ModalFooter,
  Field,
  ProgressRope,
  VisuallyHidden,
  Pagination,
  Popover,
  Repeater,
  SkipLink,
  Compacta,
  Form,
  FormGroup,
  FormLabel,
  FormHint,
  FormSection,
  FormChitChat,
  Selector,
  SelectorAdornment,
  SelectorBody,
  SelectorButton,
  SelectorCircle,
  SelectorFooter,
  SelectorHint,
  SelectorButtonOption,
  SelectorCheckbox,
  SelectorLabel,
  SelectorLink,
  SelectorRadio,
  Grid,
  GridItem,
  Heading,
  ProgressIndicator,
  BottomSheet,
  Header,
  Footer,
} from '@westpac/ui';

export * from '@westpac/ui/icon';

export { GiftPictogram } from '@westpac/ui/pictogram';
export { Link as NextLink };

export {
  IconSizesDemo,
  AutoAddressDemo,
  ManualAddress,
  InternationalAddress,
  ComplexAddressDemo,
  EmploymentAutocompletePattern,
  EmploymentSelectFullPattern,
  TaxFileNumberPattern,
} from './components/demos';
export { Hr, Body } from './components/utils';

/**
 * Export space related constants
 */
export const SPACING_UNIT = 6;

export const SPACING_SCALE = [
  { value: 0.5, className: 'pr-0.5' },
  { value: 1, className: 'pr-1' },
  { value: 1.5, className: 'pr-1.5' },
  { value: 2, className: 'pr-2' },
  { value: 2.5, className: 'pr-2.5' },
  { value: 3, className: 'pr-3' },
  { value: 3.5, className: 'pr-3.5' },
  { value: 4, className: 'pr-4' },
  { value: 4.5, className: 'pr-4.5' },
  { value: 5, className: 'pr-5' },
  { value: 5.5, className: 'pr-5.5' },
  { value: 6, className: 'pr-6' },
  { value: 6.5, className: 'pr-6.5' },
  { value: 7, className: 'pr-7' },
  { value: 7.5, className: 'pr-7.5' },
  { value: 8, className: 'pr-8' },
  { value: 8.5, className: 'pr-8.5' },
  { value: 9, className: 'pr-9' },
  { value: 9.5, className: 'pr-9.5' },
  { value: 10, className: 'pr-10' },
  { value: 10.5, className: 'pr-10.5' },
  { value: 11, className: 'pr-11' },
  { value: 11.5, className: 'pr-11.5' },
  { value: 12, className: 'pr-12' },
  { value: 12.5, className: 'pr-12.5' },
  { value: 13, className: 'pr-13' },
  { value: 13.5, className: 'pr-13.5' },
  { value: 14, className: 'pr-14' },
  { value: 14.5, className: 'pr-14.5' },
  { value: 15, className: 'pr-15' },
  { value: 15.5, className: 'pr-15.5' },
  { value: 16, className: 'pr-16' },
  { value: 16.5, className: 'pr-16.5' },
  { value: 17, className: 'pr-17' },
  { value: 17.5, className: 'pr-17.5' },
  { value: 18, className: 'pr-18' },
  { value: 18.5, className: 'pr-18.5' },
  { value: 19, className: 'pr-19' },
  { value: 19.5, className: 'pr-19.5' },
  { value: 20, className: 'pr-20' },
  { value: 20.5, className: 'pr-20.5' },
  { value: 21, className: 'pr-21' },
  { value: 21.5, className: 'pr-21.5' },
  { value: 22, className: 'pr-22' },
  { value: 22.5, className: 'pr-22.5' },
  { value: 23, className: 'pr-23' },
  { value: 23.5, className: 'pr-23.5' },
  { value: 24, className: 'pr-24' },
  { value: 24.5, className: 'pr-24.5' },
  { value: 25, className: 'pr-25' },
  { value: 25.5, className: 'pr-25.5' },
  { value: 26, className: 'pr-26' },
  { value: 26.5, className: 'pr-26.5' },
  { value: 27, className: 'pr-27' },
  { value: 27.5, className: 'pr-27.5' },
  { value: 28, className: 'pr-28' },
  { value: 28.5, className: 'pr-28.5' },
  { value: 29, className: 'pr-29' },
  { value: 29.5, className: 'pr-29.5' },
  { value: 30, className: 'pr-30' },
];
export const VARIATION_MARGIN_PADDING = ['', 'x', 'y', 't', 'r', 'b', 'l'];
export const SPACING_DEFAULT_CLASSES = 'h-3 w-0 bg-primary';
