import {
  BookOpen,
  Boxes,
  Anchor,
  Wrench,
  Palette,
  LucideIcon,
} from "lucide-react";

export interface NavLink {
  href: string;
  label: string;
}

export interface NavSection {
  title: string;
  basePath: string;
  Icon: LucideIcon;
  links: NavLink[];
}

export const NAV_SECTIONS: NavSection[] = [
  {
    title: "Getting Started",
    basePath: "/",
    Icon: BookOpen,
    links: [
      { href: "/", label: "Introduction" },
      { href: "/installation", label: "Installation" },
    ],
  },
  {
    title: "Components",
    basePath: "/components",
    Icon: Boxes,
    links: [
      { href: "/components/action-modal", label: "ActionModal" },
      { href: "/components/badge", label: "Badge" },
      { href: "/components/breadcrumbs", label: "Breadcrumbs" },
      { href: "/components/button", label: "Button" },
      { href: "/components/calendar", label: "Calendar" },
      { href: "/components/checkbox", label: "Checkbox" },
      { href: "/components/color-palette", label: "ColorPalette" },
      { href: "/components/combobox", label: "Combobox" },
      { href: "/components/date-input", label: "DateInput" },
      { href: "/components/dropdown", label: "Dropdown" },
      { href: "/components/hamburger-menu", label: "HamburgerMenu" },
      { href: "/components/icon-button", label: "IconButton" },
      { href: "/components/input", label: "Input" },
      { href: "/components/modal", label: "Modal" },
      { href: "/components/password-input", label: "PasswordInput" },
      { href: "/components/radio-group", label: "RadioGroup" },
      { href: "/components/select", label: "Select" },
      { href: "/components/tooltip", label: "Tooltip" },
    ],
  },
  {
    title: "Hooks",
    basePath: "/hooks",
    Icon: Anchor,
    links: [
      { href: "/hooks/use-closable-container", label: "useClosableContainer" },
      { href: "/hooks/use-event-listener", label: "useEventListener" },
      {
        href: "/hooks/use-isomorphic-layout-effect",
        label: "useIsomorphicLayoutEffect",
      },
      { href: "/hooks/use-on-click-outside", label: "useOnClickOutside" },
      { href: "/hooks/use-theme-change", label: "useThemeChange" },
      { href: "/hooks/use-toggle", label: "useToggle" },
    ],
  },
  {
    title: "Utilities",
    basePath: "/utilities",
    Icon: Wrench,
    links: [
      { href: "/utilities/button", label: "Button Utilities" },
      { href: "/utilities/icon-button", label: "IconButton Utilities" },
      { href: "/utilities/input", label: "Input Utilities" },
      { href: "/utilities/loading", label: "Loading Utilities" },
    ],
  },
  {
    title: "Theming",
    basePath: "/theming",
    Icon: Palette,
    links: [],
  },
];

export const NPM_PACKAGE_URL = "https://www.npmjs.com/package/amvasdev-ui";
export const GITHUB_URL = "https://github.com/amauryvasquez/amvasdev-ui";
