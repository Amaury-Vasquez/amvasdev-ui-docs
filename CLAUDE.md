# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 documentation site for the `amvasdev-ui` component library. The project uses:

- **Next.js 16** with App Router architecture
- **React 19** (latest version)
- **TypeScript** with strict mode enabled
- **Tailwind CSS v4** for styling

## Key Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:3000

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## Project Structure

This is a Next.js App Router project with the following architecture:

- **`app/`** - Next.js App Router directory

  - `layout.tsx` - Root layout with Geist Sans and Geist Mono fonts
  - `page.tsx` - Homepage/landing page
  - `globals.css` - Global styles with Tailwind CSS imports

- **`next.config.js`** - Next.js configuration

- **`COMPONENT_USAGE_GUIDE.md`** - **CRITICAL CONTEXT FILE**
  - This file contains comprehensive documentation for the `amvasdev-ui` library
  - Reference this file for all component props, hooks, and utilities when creating documentation pages
  - Contains examples for: Button, Input, Modal, Select, Textarea, Card, Badge, Alert, Progress, Tabs, Accordion, Toast, Dropdown, Tooltip, and more
  - Includes hooks documentation: `useNotification`, `useForm`, `useLocalStorage`, `useToggle`, etc.
  - Always check this file before implementing component demos or examples

## Important Configuration

- **Path aliases**: `@/*` maps to the root directory (`tsconfig.json`)
- **TypeScript target**: ES2017 with strict mode enabled
- **Fonts**: Uses Geist Sans and Geist Mono from Google Fonts
- **Styling**: Tailwind CSS v4 with dark mode support via `prefers-color-scheme`

## Coding Standards

### Arrow Function Body Style

**IMPORTANT**: Always use implicit returns for arrow functions when there's no additional logic:

**✅ Correct:**

```tsx
const Component = () => <div>Content</div>;

const items = data.map((item) => item.name);
```

**❌ Incorrect:**

```tsx
const Component = () => {
  return <div>Content</div>;
};

const items = data.map((item) => {
  return item.name;
});
```

**When to use braces:**

- When you need multiple statements or logic before the return
- When you need variable declarations
- When you have conditional logic

**ESLint Rule:** This is enforced by the `arrow-body-style: ["error", "as-needed"]` rule in `eslint.config.mjs`

### Links vs Buttons

**CRITICAL: Never use buttons as links.** Always use proper semantic HTML elements:

**✅ Correct:**

```tsx
// For navigation, use Link or anchor tags
import Link from "next/link";

<Link href="/about">About</Link>
<a href="/contact">Contact</a>

// For icon links, use IconLink component
import IconLink from "@/components/IconLink";

<IconLink
  href="/dashboard"
  icon={<DashboardIcon />}
  tooltip="Dashboard"
/>

// For links styled as buttons, use CustomLink component
import CustomLink from "@/components/CustomLink";

<CustomLink href="/get-started" variant="primary" size="lg">
  Get Started
</CustomLink>
```

**❌ Incorrect:**

```tsx
// Never use buttons with router.push or onClick navigation
import { useRouter } from "next/navigation";

const router = useRouter();

<button onClick={() => router.push("/about")}>About</button>
<IconButton onClick={() => router.push("/dashboard")} />
```

**Why this matters:**

- **Accessibility**: Screen readers understand links vs buttons
- **SEO**: Search engines can crawl and index link relationships
- **User Experience**: Right-click → "Open in new tab" works properly
- **Keyboard Navigation**: Proper tab order and Enter/Space key behavior
- **Semantic HTML**: Buttons are for actions, links are for navigation

**When to use each:**

- **`<Link>` or `<a>`**: Basic navigation to different pages/routes
- **`<CustomLink>`**: Navigation that should look like a button (CTAs, primary actions)
- **`<IconLink>`**: Icon-based navigation with tooltip support
- **`<button>`**: Triggering actions (submit forms, toggle modals, open dropdowns, etc.)

**Available Link Components:**

- **`IconLink`** (`@/components/IconLink`) - Icon with tooltip, styled as circular button
- **`CustomLink`** (`@/components/CustomLink`) - Text link styled as button with variant/size options

### Accessibility - Required aria-label Attributes

**CRITICAL: All interactive elements must have descriptive aria-label attributes for screen reader accessibility.**

**Required for:**

- All `<Link>` elements from Next.js
- All anchor tags (`<a>`)
- All `<button>` elements
- All `CustomLink` components (use `ariaLabel` prop)
- All `IconLink` components (use `ariaLabel` prop)
- All `IconButton` components (use `ariaLabel` prop or `aria-label` attribute)
- Any other interactive elements without visible text

**✅ Correct:**

```tsx
// Next.js Link with aria-label
<Link href="/about" aria-label="Navigate to About page">
  <Icon />
</Link>

// CustomLink with ariaLabel prop
<CustomLink href="/dashboard" variant="primary" ariaLabel="Go to dashboard">
  Dashboard
</CustomLink>

// IconLink with ariaLabel prop
<IconLink
  href="/settings"
  icon={<SettingsIcon />}
  ariaLabel="Navigate to settings"
  tooltip={{ content: "Settings", position: "top" }}
/>

// Button with aria-label
<button onClick={handleClick} aria-label="Close modal">
  <CloseIcon />
</button>

// IconButton with ariaLabel prop
<IconButton
  icon={<MenuIcon />}
  onClick={toggleMenu}
  ariaLabel="Open navigation menu"
/>
```

**❌ Incorrect:**

```tsx
// Missing aria-label on link with only icon
<Link href="/about">
  <Icon />
</Link>

// Missing ariaLabel on CustomLink
<CustomLink href="/dashboard" variant="primary">
  Dashboard
</CustomLink>

// Missing aria-label on button with only icon
<button onClick={handleClick}>
  <CloseIcon />
</button>
```

**Guidelines:**

- **Be descriptive**: Use clear, actionable descriptions (e.g., "Navigate to About page" not just "About")
- **Include context**: Specify what the action will do (e.g., "View amvasdev-ui on NPM" not just "NPM")
- **Avoid redundancy**: If the element already has visible descriptive text, aria-label enhances but doesn't replace it
- **Icon-only elements**: Always require aria-label as there's no visible text for screen readers
- **Dynamic labels**: Use template literals for contextual descriptions (e.g., `` `${isExpanded ? "Collapse" : "Expand"} sidebar` ``)

**Component-Specific Notes:**

- **`CustomLink` and `IconLink`**: These components have a fallback using `getAriaLabelFromHref()` utility, but always provide explicit `ariaLabel` prop for clarity
- **`HamburgerMenu`**: Use `aria-label` attribute (lowercase with hyphen)
- **Collapsible sections**: Include `aria-expanded` attribute along with `aria-label`

**Why this matters:**

- **Accessibility**: Screen reader users rely on aria-labels to understand interactive elements
- **WCAG Compliance**: Meets Web Content Accessibility Guidelines requirements
- **Better UX**: Provides context for all users, including those with visual impairments
- **SEO**: Helps search engines understand page structure and navigation

### Import Organization

Imports are automatically sorted by ESLint in this order:

1. Node.js built-in modules
2. External packages (node_modules)
3. Internal aliased imports (@/)
4. Relative imports (parent/sibling)
5. Index imports

All groups are sorted alphabetically and should have no blank lines between them.

### Naming Conventions

**Static Constants**: Use SCREAMING_SNAKE_CASE for module-level constants that are never reassigned:

**✅ Correct:**

```tsx
export const COMPONENTS_DATA: Record<string, ComponentData> = { ... };
export const API_BASE_URL = "https://api.example.com";
export const MAX_RETRY_ATTEMPTS = 3;
```

**❌ Incorrect:**

```tsx
export const componentsData: Record<string, ComponentData> = { ... };
export const apiBaseUrl = "https://api.example.com";
export const maxRetryAttempts = 3;
```

**Why this matters:**

- Immediately identifies values that should never change
- Distinguishes static data from reactive state or mutable variables
- Follows common JavaScript/TypeScript conventions for constants

**When to use:**

- Static configuration objects that never change
- Hardcoded lookup tables or data structures
- API URLs, magic numbers, or other fixed values
- Enum-like constant collections

## Development Notes

### Device Detection Context

**IMPORTANT**: When you need to detect the device type on the client side, always use the `DeviceContext`:

**✅ Correct:**

```tsx
import { useDevice } from "@/contexts/DeviceContext";

export default function Component() {
  const { isMobile, isTablet, isMobileOrTablet } = useDevice();

  return <div>{isMobile ? <MobileView /> : <DesktopView />}</div>;
}
```

**❌ Incorrect:**

```tsx
// Don't call the hooks directly in components
import useIsMobile from "@/hooks/useIsMobile";

export default function Component() {
  const isMobile = useIsMobile();
  // ...
}
```

**Why this matters:**

- The hooks use `useBreakpoint` which listens to window resize events
- Calling them multiple times creates multiple event listeners
- The context calls the hooks once and shares the values across all components
- Better performance and reduced memory usage

**Available values from `useDevice()`:**

- `isMobile`: boolean - viewport is <= 640px (sm breakpoint)
- `isTablet`: boolean - viewport is >= 640px and < 1024px (sm to lg)
- `isMobileOrTablet`: boolean - viewport is < 1024px (lg breakpoint)

**Context Location:**

- Provider: `DeviceProvider` from `@/contexts/DeviceContext`
- Hook: `useDevice()` from `@/contexts/DeviceContext`
- Must be used within the `DeviceProvider` (already set up in Sidebar)

### Working with amvasdev-ui Library

When creating documentation or examples for `amvasdev-ui` components:

1. Always import the CSS: `import "amvasdev-ui/dist/index.css";` (typically in root layout)
2. Reference `COMPONENT_USAGE_GUIDE.md` for accurate component APIs and props
3. Components support variants, sizes, custom styling, and theme customization
4. The library uses a design system with consistent color variants: `base`, `neutral`, `primary`, `secondary`, `accent`, `info`, `success`, `warning`, `error`, `ghost`, `link`

### Next.js 16 Specifics

- Uses React 19 with the new compiler runtime
- Server Components by default (add `"use client"` directive when needed)
- Automatic font optimization with `next/font`
- Image optimization with `next/image` component

### Styling Patterns

- Tailwind CSS v4 with inline theme configuration in `globals.css`
- CSS variables for theming: `--background`, `--foreground`, `--font-sans`, `--font-mono`
- Dark mode handled automatically via `prefers-color-scheme`

## Code Formatting Standards

### Template Literal Indentation

**CRITICAL**: When writing code examples in template literals, add 2 spaces to each continuation line to ensure proper indentation display:

**✅ Correct:**

```tsx
<code>
  {`import { Button } from "amvasdev-ui";

  function App() {
    return (
      <Button variant="primary">Click me</Button>
    );
  }`}
</code>
```

**❌ Incorrect:**

```tsx
<code>
  {`import { Button } from "amvasdev-ui";
function App() {
  return (
    <Button variant="primary">Click me</Button>
  );
}`}
</code>
```

**Why this matters:**

- Template literals don't preserve source code indentation
- The rendered output will show no indentation without explicit spacing
- Always add 2 spaces at the start of each line after the first one

### Conditional Rendering with Nullish Coalescing

**Prefer nullish coalescing over logical AND** for checking array/object properties:

**✅ Correct:**

```tsx
{
  (data.items?.length ?? 0) > 0 ? <div>Content</div> : null;
}
```

**❌ Incorrect:**

```tsx
{
  data.items?.length && <div>Content</div>;
}
```

## Project Architecture

### Module-Based Architecture for SEO

**CRITICAL**: All documentation pages use a module-based architecture to support SEO metadata while maintaining client-side interactivity.

**Structure:**

```
app/
  components/
    button/
      page.tsx              # Server component - exports metadata, renders module

modules/
  ButtonPage/
    index.tsx              # Main client component with page content
    BasicUsageExample.tsx  # Page-specific example components
    VariantsExample.tsx
    ...

components/documentation/   # Shared documentation components
  PageHeader.tsx
  ImportSection.tsx
  ExampleBlock.tsx
  AvailableOptions.tsx
  NotesSection.tsx
```

**Page Pattern (app/.../page.tsx):**

```tsx
import type { Metadata } from "next";
import ButtonPage from "@/modules/ButtonPage";
import { COMPONENTS_DATA } from "@/data/components";

const componentData = COMPONENTS_DATA.button;

export const metadata: Metadata = {
  title: `${componentData.name} | Amvasdev UI`,
  description: componentData.description,
};

export default function Page() {
  return <ButtonPage />;
}
```

**Module Index Pattern (modules/ButtonPage/index.tsx):**

```tsx
import PageHeader from "@/components/documentation/PageHeader";
import ImportSection from "@/components/documentation/ImportSection";
import { COMPONENTS_DATA } from "@/data/components";
import BasicUsageExample from "./BasicUsageExample";
// ... other imports

const componentData = COMPONENTS_DATA.button;

const ButtonPage = () => (
  <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
    <PageHeader
      title={componentData.name}
      description={componentData.description}
    />
    <ImportSection importStatement={componentData.importStatement} />
    <BasicUsageExample />
    {/* ... more content */}
  </div>
);

export default ButtonPage;
```

**Page-Specific Components (modules/ButtonPage/BasicUsageExample.tsx):**

```tsx
"use client";
import { Button } from "amvasdev-ui";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const BasicUsageExample = () => (
  <ExampleBlock
    title="Basic Usage"
    preview={<Button>Click me</Button>}
    code={`<Button>Click me</Button>`}
  />
);

export default BasicUsageExample;
```

**Naming Conventions:**

- **Modules:** CamelCase (e.g., `ButtonPage`, `UseTogglePage`)
- **Module exports:** Same as folder name (e.g., `ButtonPage`)
- **Page-specific components:** Descriptive names (e.g., `BasicUsageExample`, `VariantsExample`)

**Shared Documentation Components:**

- `PageHeader` - Title and description
- `ImportSection` - Import code block
- `ExampleBlock` - Example with preview and code
- `AvailableOptions` - List of variants/sizes/options
- `NotesSection` - Notes list

**"use client" Directive:**

- Add ONLY to page-specific components that render client components (Button, Input, etc.)
- NOT needed in module index.tsx (child components already have it)
- NOT needed in page.tsx (server component for metadata)
- NOT needed in shared documentation components (they're just presentational)

**Rule:** Only add "use client" to the component that directly uses client-side features. Parent components can remain server components and render client component children.

### Data Files Pattern

All documentation metadata is stored in `/data` directory using SCREAMING_SNAKE_CASE for exports:

**`/data/components.ts`**

```tsx
export const COMPONENTS_DATA: Record<string, ComponentData> = {
  "component-name": {
    name: "ComponentName",
    description: "...",
    importStatement: 'import { ComponentName } from "amvasdev-ui";',
    category: "Category Name",
    variants: ["primary", "secondary", ...],
    sizes: ["sm", "md", "lg"],
    notes: ["Note 1", "Note 2"],
  },
};
```

**`/data/hooks.ts`**

```tsx
export const HOOKS_DATA: Record<string, HookData> = {
  "hook-name": {
    name: "useHookName",
    description: "...",
    importStatement: 'import { useHookName } from "amvasdev-ui";',
    signature: "useHookName(params): returnType",
    parameters: [...],
    returns: { type: "...", description: "..." },
    examples: [...],
    notes: ["Note 1", "Note 2"],
  },
};
```

**`/data/utilities.ts`**

```tsx
export const UTILITIES_DATA: Record<string, UtilityData> = {
  "utility-name": {
    name: "Utility Name",
    description: "...",
    importStatement: 'import { utilityFunction } from "amvasdev-ui";',
    functions: [...],
    examples: [...],
    notes: ["Note 1", "Note 2"],
  },
};
```

### Documentation Page Structure

All documentation pages follow a consistent structure:

**Component Pages** (`/app/components/[slug]/page.tsx`):

1. Import component metadata from `COMPONENTS_DATA`
2. Client component if interactive demos are needed
3. Sections in order:
   - Title and description
   - Import statement
   - Interactive demo (if applicable)
   - Examples with code snippets
   - Available Variants (if applicable)
   - Available Sizes (if applicable)
   - Notes (if applicable)

**Hook Pages** (`/app/hooks/[slug]/page.tsx`):

1. Import hook metadata from `HOOKS_DATA`
2. Always client component for live demos
3. Sections in order:
   - Title and description
   - Import statement
   - Signature
   - Parameters table (if applicable)
   - Returns information (if applicable)
   - Live Demo
   - Examples with code snippets
   - Notes (if applicable)

**Utility Pages** (`/app/utilities/[slug]/page.tsx`):

1. Import utility metadata from `UTILITIES_DATA`
2. Client component for interactive demos
3. Sections in order:
   - Title and description
   - Import statement
   - Functions documentation (with signatures, parameters, returns)
   - Interactive Demo (shows generated classes)
   - Examples with code snippets
   - Notes (if applicable)

### Page Template Pattern

All documentation pages use this pattern:

```tsx
"use client"; // Only if interactive demos are needed
import { Component } from "amvasdev-ui";
import { COMPONENTS_DATA } from "@/data/components";

const componentData = COMPONENTS_DATA["component-slug"];

export default function ComponentPage() {
  return (
    <div className="space-y-8">
      {/* Title */}
      <div>
        <h1 className="text-4xl font-bold mb-4">{componentData.name}</h1>
        <p className="text-lg text-base-content/80">
          {componentData.description}
        </p>
      </div>

      {/* Import */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <div className="mockup-code">
          <pre>
            <code>{componentData.importStatement}</code>
          </pre>
        </div>
      </div>

      {/* Examples */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>
        <div className="space-y-8">{/* Example content */}</div>
      </div>

      {/* Conditional sections using nullish coalescing */}
      {(componentData.variants?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Available Variants</h2>
          {/* Variants display */}
        </div>
      ) : null}

      {(componentData.notes?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Notes</h2>
          <ul className="list-disc list-inside space-y-2 text-base-content/70">
            {componentData.notes?.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
```

## Layout Structure

### MainLayout (`/layouts/MainLayout.tsx`)

The main layout uses a flexbox structure with sidebar navigation:

```tsx
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const MainLayout = ({ children }: MainLayoutProps) => (
  <div className="flex relative">
    <Sidebar />
    <div className="flex flex-col w-full h-svh overflow-y-auto">
      <Navbar className="" />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  </div>
);
```

**Key Layout Classes:**

- Use `h-svh` for small viewport height (not `min-h-screen`)
- Main content uses `flex-1` to fill available space
- Footer automatically sticks to bottom

### Shared Components

**CustomLink** (`/components/CustomLink`):

- Links styled as buttons with variant and size options
- Use for CTAs and primary navigation that should look like buttons
- Supports all button variants (primary, secondary, success, etc.)

**IconLink** (`/components/IconLink`):

- Icon-based links with tooltip support
- Circular ghost button styling
- Use for social links, external resources
- Tooltip positions: "top", "bottom", "left", "right"

**Footer** (`/components/Footer`):

- Four-column grid layout (responsive: 1 → 2 → 4 columns)
- Sections: About, Documentation, Resources, Built With
- Prominent DaisyUI credit with heart icon
- Copyright and tech stack info
- Uses `CURRENT_YEAR` constant for dynamic year

## Common Patterns

### Interactive Demos

For components with customizable options:

```tsx
"use client";
import { useState } from "react";

const VARIANTS = ["primary", "secondary", "success"] as const;
const SIZES = ["sm", "md", "lg"] as const;

export default function Page() {
  const [variant, setVariant] = useState<(typeof VARIANTS)[number]>("primary");
  const [size, setSize] = useState<(typeof SIZES)[number]>("md");

  return (
    <div className="p-6 bg-base-200 rounded-lg space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="label">
            <span className="label-text">Variant</span>
          </label>
          <select
            className="select select-bordered w-full"
            value={variant}
            onChange={(e) => setVariant(e.target.value as any)}
          >
            {VARIANTS.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <p className="font-semibold mb-2">Preview:</p>
        {/* Component preview */}
      </div>
    </div>
  );
}
```

### Code Examples Display

```tsx
<div className="mockup-code">
  <pre>
    <code>
      {`import { Component } from "amvasdev-ui";

  function App() {
    return <Component variant="primary" />;
  }`}
    </code>
  </pre>
</div>
```

### Module-Level Constants

Declare all static data outside the component using SCREAMING_SNAKE_CASE:

```tsx
const AVAILABLE_THEMES = [
  { name: "light", description: "Clean and bright theme" },
  { name: "dark", description: "Dark mode for low-light environments" },
];

const DOCUMENTATION_LINKS = [
  { href: "/components", label: "Components" },
  { href: "/hooks", label: "Hooks" },
];

export default function Page() {
  // Component code
}
```

## Important Reminders

1. **Never use console.log** in documentation examples
2. **Always use "use client"** when component has state or interactive demos
3. **Import order matters** - lucide-react before next/link (enforced by ESLint)
4. **Template literal indentation** - Add 2 spaces to continuation lines
5. **Nullish coalescing** - Use `??` instead of `&&` for conditional rendering
6. **SCREAMING_SNAKE_CASE** - For all module-level constants
7. **Links not buttons** - Use CustomLink for button-styled navigation
8. **Tooltip positions** - Valid values: "top", "bottom", "left", "right" (not "up" or "down")
9. **DaisyUI classes** - Use semantic color names (primary, success, error, etc.)
10. **Responsive design** - Use grid with breakpoints (md:grid-cols-2, lg:grid-cols-3, etc.)
