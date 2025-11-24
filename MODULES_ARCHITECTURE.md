# Modules Architecture

This document outlines the module-based architecture for the amvasdev-ui documentation site.

## Overview

To support proper SEO with Next.js App Router while maintaining client-side interactivity, we separate page logic into modules under `/modules` directory.

## Architecture

```
app/
  components/
    button/
      page.tsx              # Server component - exports metadata, renders module

modules/
  button-page/
    index.tsx              # Main client component with page content
    BasicUsageExample.tsx  # Button-specific example component
    VariantsExample.tsx    # Button-specific example component
    ...                    # Other button-specific components

components/documentation/   # Shared documentation components
  PageHeader.tsx           # Reusable header (title + description)
  ImportSection.tsx        # Reusable import code block
  ExampleBlock.tsx         # Reusable example with preview + code
  AvailableOptions.tsx     # Reusable list of variants/sizes/etc
  NotesSection.tsx         # Reusable notes list
```

## Pattern

### 1. Page File (Server Component)
**Location:** `app/[category]/[item]/page.tsx`

```tsx
import type { Metadata } from "next";
import ButtonPageModule from "@/modules/button-page";
import { COMPONENTS_DATA } from "@/data/components";

const componentData = COMPONENTS_DATA.button;

export const metadata: Metadata = {
  title: `${componentData.name} | Amvasdev UI`,
  description: componentData.description,
};

export default function ButtonPage() {
  return <ButtonPageModule />;
}
```

### 2. Module Index (Client Component)
**Location:** `modules/button-page/index.tsx`

```tsx
"use client";
import { COMPONENTS_DATA } from "@/data/components";
import PageHeader from "@/components/documentation/PageHeader";
import ImportSection from "@/components/documentation/ImportSection";
import AvailableOptions from "@/components/documentation/AvailableOptions";
import NotesSection from "@/components/documentation/NotesSection";
import BasicUsageExample from "./BasicUsageExample";
import VariantsExample from "./VariantsExample";

const componentData = COMPONENTS_DATA.button;

const ButtonPageModule = () => (
  <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
    <PageHeader
      title={componentData.name}
      description={componentData.description}
    />

    <ImportSection importStatement={componentData.importStatement} />

    <section>
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Examples</h2>
      <div className="space-y-8">
        <BasicUsageExample />
        <VariantsExample />
      </div>
    </section>

    <AvailableOptions
      title="Available Variants"
      options={componentData.variants}
    />

    <NotesSection notes={componentData.notes} />
  </div>
);

export default ButtonPageModule;
```

### 3. Page-Specific Components
**Location:** `modules/button-page/BasicUsageExample.tsx`

```tsx
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

### 4. Shared Documentation Components
**Location:** `components/documentation/PageHeader.tsx`

```tsx
interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader = ({ title, description }: PageHeaderProps) => (
  <div>
    <h1 className="text-2xl md:text-4xl font-bold mb-4">{title}</h1>
    <p className="text-base md:text-lg text-base-content/80">{description}</p>
  </div>
);

export default PageHeader;
```

## Benefits

1. **SEO-Friendly:** Server components can export metadata
2. **Clean Separation:** Client logic separated from page routing
3. **Reusability:** Shared documentation components reduce duplication
4. **Maintainability:** Page-specific components are organized by module
5. **Performance:** Server components render on server, client components only where needed

## Naming Convention

- **Modules:** `{page-name}-page` (e.g., `button-page`, `use-toggle-page`)
- **Module exports:** `{PageName}PageModule` (e.g., `ButtonPageModule`)
- **Page-specific components:** Descriptive names (e.g., `BasicUsageExample`, `VariantsExample`)
- **Shared components:** Generic names (e.g., `PageHeader`, `ExampleBlock`)

## Module Categories

1. **Component Pages:** `modules/[component-name]-page/`
2. **Hook Pages:** `modules/[hook-name]-page/`
3. **Utility Pages:** `modules/[utility-name]-page/`
4. **Index Pages:** `modules/components-index/`, `modules/hooks-index/`, etc.
5. **Other Pages:** `modules/installation-page/`, `modules/theming-page/`
