# amvasdev-ui Documentation

Official documentation site for [amvasdev-ui](https://www.npmjs.com/package/amvasdev-ui) - a React component library with DaisyUI styling and custom JavaScript implementations.

## 📚 About

This is a comprehensive documentation website built with Next.js 16 that provides:

- **Component Documentation** - 24+ production-ready components with live examples
- **Hooks Documentation** - 6 custom React hooks for common UI patterns
- **Utilities Documentation** - Helper functions for generating class names
- **Theming Guide** - Complete guide to DaisyUI theme customization
- **Installation Guide** - Step-by-step setup instructions

## 🚀 Quick Start

### Prerequisites

- Node.js 16.x or higher
- npm, yarn, or pnpm

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the documentation site.

### Production

Build for production:

```bash
npm run build
npm start
```

### Linting

Run ESLint:

```bash
npm run lint
```

## 📁 Project Structure

```
├── app/                      # Next.js App Router pages
│   ├── components/          # Component documentation pages
│   ├── hooks/              # Hooks documentation pages
│   ├── utilities/          # Utilities documentation pages
│   ├── theming/            # Theming guide
│   ├── installation/       # Installation guide
│   ├── page.tsx            # Homepage
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── components/             # Shared UI components
│   ├── CustomLink/         # Link styled as button
│   ├── Footer/            # Site footer
│   ├── IconLink/          # Icon link with tooltip
│   ├── Navbar/            # Top navigation bar
│   ├── Searchbar/         # Search functionality
│   └── Sidebar/           # Navigation sidebar
├── data/                   # Static data files
│   ├── components.ts      # Component metadata
│   ├── hooks.ts          # Hooks metadata
│   └── utilities.ts      # Utilities metadata
├── layouts/               # Layout components
│   └── MainLayout.tsx    # Main site layout
└── public/               # Static assets
```

## 🛠️ Technology Stack

- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 + DaisyUI 5.5.5
- **Component Library:** amvasdev-ui 1.0.5
- **Icons:** Lucide React
- **Documentation:** MDX support

## 📖 Documentation Sections

### Components
Comprehensive documentation for all amvasdev-ui components including:
- Button, Input, Modal, Select, Textarea
- Card, Badge, Alert, Progress, Tabs
- Accordion, Toast, Dropdown, Tooltip
- Calendar, ColorPalette, Combobox, DateInput
- HamburgerMenu, IconButton, PasswordInput
- ActionModal, Breadcrumbs

### Hooks
Custom React hooks for common patterns:
- `useClosableContainer` - Manage closable UI elements
- `useThemeChange` - Dynamic theme switching
- `useEventListener` - Event listener management
- `useOnClickOutside` - Outside click detection
- `useToggle` - Boolean state toggling
- `useIsomorphicLayoutEffect` - SSR-compatible layout effects

### Utilities
Helper functions for styling:
- Button utilities (`getButtonClasses`, `getButtonVariant`, `getButtonSize`)
- Input utilities (`getInputClasses`, `getInputVariant`, `getInputSize`)
- Loading utilities (`getLoadingClasses`)
- IconButton utilities (`getIconButtonClasses`)

### Theming
Complete guide to DaisyUI theming including:
- Available themes (15+ built-in themes)
- Theme switching with `useThemeChange`
- Creating custom themes
- Color system reference
- Dark mode support

## 🎨 Features

- **Live Interactive Demos** - All components have working examples
- **Code Examples** - Copy-paste ready code snippets
- **Responsive Design** - Mobile-first approach
- **Theme Switcher** - Try different themes in real-time
- **Search Functionality** - Quick navigation
- **Type Safety** - Full TypeScript support

## 🔗 Links

- **NPM Package:** [amvasdev-ui](https://www.npmjs.com/package/amvasdev-ui)
- **GitHub Repository:** [amvasdev-ui](https://github.com/Amaury-Vasquez/amvasdev-ui)
- **DaisyUI:** [daisyui.com](https://daisyui.com)

## 📝 License

This documentation site is part of the amvasdev-ui project.

## 🙏 Credits

- Built with [DaisyUI](https://daisyui.com) for styling
- Powered by [Next.js](https://nextjs.org)
- Icons by [Lucide](https://lucide.dev)

---

For more information about using amvasdev-ui in your project, visit the documentation at [http://localhost:3000](http://localhost:3000) when running locally.
