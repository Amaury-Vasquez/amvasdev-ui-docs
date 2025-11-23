export interface UtilityData {
  name: string;
  description: string;
  importStatement: string;
  functions: FunctionData[];
  examples: ExampleData[];
  notes?: string[];
}

export interface FunctionData {
  name: string;
  signature: string;
  parameters?: ParameterData[];
  returns: string;
  description: string;
}

export interface ParameterData {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

export interface ExampleData {
  title: string;
  description?: string;
  code: string;
}

export const UTILITIES_DATA: Record<string, UtilityData> = {
  button: {
    name: "Button Utilities",
    description:
      "Utility functions for generating button classes with variants, sizes, and styling options.",
    importStatement:
      'import { getButtonClasses, getButtonVariant, getButtonSize } from "amvasdev-ui";',
    functions: [
      {
        name: "getButtonClasses",
        signature: "getButtonClasses(options): string",
        parameters: [
          {
            name: "options",
            type: "{ variant?: ButtonVariant; size?: ButtonSize; outlined?: boolean }",
            required: false,
            description: "Button styling options",
          },
        ],
        returns: "string - Complete button class names",
        description:
          "Returns a complete set of button classes including base styles, variant, size, and outline styles",
      },
      {
        name: "getButtonVariant",
        signature: "getButtonVariant(variant): string",
        parameters: [
          {
            name: "variant",
            type: "ButtonVariant",
            required: true,
            description: "Button color variant",
          },
        ],
        returns: "string - Variant-specific class names",
        description: "Returns only the variant-specific class names",
      },
      {
        name: "getButtonSize",
        signature: "getButtonSize(size): string",
        parameters: [
          {
            name: "size",
            type: "ButtonSize",
            required: true,
            description: "Button size",
          },
        ],
        returns: "string - Size-specific class names",
        description: "Returns only the size-specific class names",
      },
    ],
    examples: [
      {
        title: "Complete Button Classes",
        code: `import { getButtonClasses } from "amvasdev-ui";

const buttonClasses = getButtonClasses({
  variant: "primary",
  size: "lg",
  outlined: true,
});

<button className={buttonClasses}>
  Click me
</button>`,
      },
      {
        title: "Variant Only",
        code: `import { getButtonVariant } from "amvasdev-ui";

const variantClasses = getButtonVariant("primary");

<button className={\`btn \${variantClasses}\`}>
  Primary Button
</button>`,
      },
      {
        title: "Size Only",
        code: `import { getButtonSize } from "amvasdev-ui";

const sizeClasses = getButtonSize("lg");

<button className={\`btn \${sizeClasses}\`}>
  Large Button
</button>`,
      },
      {
        title: "Custom Component",
        code: `import { getButtonClasses } from "amvasdev-ui";
import Link from "next/link";

function CustomLink({ href, children, variant = "primary" }) {
  const classes = getButtonClasses({ variant, size: "md" });

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}`,
      },
    ],
    notes: [
      "Available variants: base, neutral, primary, secondary, accent, info, success, warning, error, ghost, link",
      "Available sizes: xs, sm, md, lg",
    ],
  },
  input: {
    name: "Input Utilities",
    description:
      "Utility functions for generating input classes with variants, sizes, and styling options.",
    importStatement:
      'import { getInputClasses, getInputVariant, getInputSize } from "amvasdev-ui";',
    functions: [
      {
        name: "getInputClasses",
        signature: "getInputClasses(options): string",
        parameters: [
          {
            name: "options",
            type: "{ variant?: InputVariant; size?: InputSize; bordered?: boolean }",
            required: false,
            description: "Input styling options",
          },
        ],
        returns: "string - Complete input class names",
        description:
          "Returns a complete set of input classes including base styles, variant, size, and border styles",
      },
      {
        name: "getInputVariant",
        signature: "getInputVariant(variant): string",
        parameters: [
          {
            name: "variant",
            type: "InputVariant",
            required: true,
            description: "Input color variant",
          },
        ],
        returns: "string - Variant-specific class names",
        description: "Returns only the variant-specific class names",
      },
      {
        name: "getInputSize",
        signature: "getInputSize(size): string",
        parameters: [
          {
            name: "size",
            type: "InputSize",
            required: true,
            description: "Input size",
          },
        ],
        returns: "string - Size-specific class names",
        description: "Returns only the size-specific class names",
      },
    ],
    examples: [
      {
        title: "Complete Input Classes",
        code: `import { getInputClasses } from "amvasdev-ui";

const inputClasses = getInputClasses({
  variant: "primary",
  size: "md",
  bordered: true,
});

<input className={inputClasses} placeholder="Enter text" />`,
      },
      {
        title: "Variant Only",
        code: `import { getInputVariant } from "amvasdev-ui";

const variantClasses = getInputVariant("primary");

<input className={\`input \${variantClasses}\`} />`,
      },
      {
        title: "Size Only",
        code: `import { getInputSize } from "amvasdev-ui";

const sizeClasses = getInputSize("md");

<input className={\`input \${sizeClasses}\`} />`,
      },
      {
        title: "Custom Input Component",
        code: `import { getInputClasses } from "amvasdev-ui";
import { forwardRef } from "react";

const CustomInput = forwardRef(({ variant = "base", size = "md", ...props }, ref) => {
  const classes = getInputClasses({ variant, size, bordered: true });

  return <input ref={ref} className={classes} {...props} />;
});`,
      },
    ],
    notes: [
      "Available variants: base, ghost, primary, secondary, accent, success, info, warning, error",
      "Available sizes: xs, sm, md, lg",
    ],
  },
  loading: {
    name: "Loading Utilities",
    description:
      "Utility functions for generating loading spinner classes with different types and sizes.",
    importStatement: 'import { getLoadingClasses } from "amvasdev-ui";',
    functions: [
      {
        name: "getLoadingClasses",
        signature: "getLoadingClasses(options): string",
        parameters: [
          {
            name: "options",
            type: "{ type?: LoadingType; size?: LoadingSize }",
            required: false,
            description: "Loading spinner options",
          },
        ],
        returns: "string - Loading-specific class names",
        description:
          "Returns the class names for a loading spinner with specified type and size",
      },
    ],
    examples: [
      {
        title: "Basic Loading Spinner",
        code: `import { getLoadingClasses } from "amvasdev-ui";

const loadingClasses = getLoadingClasses({
  type: "spin",
  size: "md",
});

<span className={\`loading \${loadingClasses}\`} />`,
      },
      {
        title: "Different Loading Types",
        code: `import { getLoadingClasses } from "amvasdev-ui";

// Spinning loader
const spinClasses = getLoadingClasses({ type: "spin", size: "lg" });
<span className={\`loading \${spinClasses}\`} />

// Dots loader
const dotsClasses = getLoadingClasses({ type: "dots", size: "md" });
<span className={\`loading \${dotsClasses}\`} />

// Ring loader
const ringClasses = getLoadingClasses({ type: "ring", size: "sm" });
<span className={\`loading \${ringClasses}\`} />`,
      },
      {
        title: "Custom Loading Button",
        code: `import { getLoadingClasses } from "amvasdev-ui";

function LoadingButton({ isLoading, children, ...props }) {
  const loadingClasses = getLoadingClasses({ type: "spin", size: "sm" });

  return (
    <button {...props} disabled={isLoading}>
      {isLoading && <span className={\`loading \${loadingClasses} mr-2\`} />}
      {children}
    </button>
  );
}`,
      },
      {
        title: "Full Page Loader",
        code: `import { getLoadingClasses } from "amvasdev-ui";

function FullPageLoader() {
  const loadingClasses = getLoadingClasses({ type: "infinity", size: "lg" });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-base-100/80">
      <span className={\`loading \${loadingClasses} text-primary\`} />
    </div>
  );
}`,
      },
    ],
    notes: [
      "Available types: spin, dots, ring, ball, bars, infinity",
      "Available sizes: xs, sm, md, lg",
      "Loading spinners use the 'loading' base class from daisyUI",
    ],
  },
  "icon-button": {
    name: "IconButton Utilities",
    description:
      "Utility function for generating icon button classes with the default circular ghost button styling.",
    importStatement: 'import { getIconButtonClasses } from "amvasdev-ui";',
    functions: [
      {
        name: "getIconButtonClasses",
        signature: "getIconButtonClasses(): string",
        returns:
          "string - Icon button class names (circular ghost button styling)",
        description:
          "Returns the default styling for icon buttons: circular ghost button with proper spacing and hover effects",
      },
    ],
    examples: [
      {
        title: "Basic Icon Button",
        code: `import { getIconButtonClasses } from "amvasdev-ui";
import { Settings } from "lucide-react";

const iconButtonClasses = getIconButtonClasses();

<button className={iconButtonClasses}>
  <Settings size={20} />
</button>`,
      },
      {
        title: "With Custom Classes",
        code: `import { getIconButtonClasses } from "amvasdev-ui";
import { Trash } from "lucide-react";
import clsx from "clsx";

const iconButtonClasses = getIconButtonClasses();

<button
  className={clsx(iconButtonClasses, "text-error hover:bg-error hover:text-error-content")}
  onClick={handleDelete}
>
  <Trash size={18} />
</button>`,
      },
      {
        title: "Custom Icon Button Component",
        code: `import { getIconButtonClasses } from "amvasdev-ui";
import clsx from "clsx";

function CustomIconButton({ icon, onClick, className, ...props }) {
  const baseClasses = getIconButtonClasses();

  return (
    <button
      className={clsx(baseClasses, className)}
      onClick={onClick}
      {...props}
    >
      {icon}
    </button>
  );
}`,
      },
      {
        title: "Icon Button with Tooltip",
        code: `import { getIconButtonClasses } from "amvasdev-ui";
import { Edit } from "lucide-react";
import { useState } from "react";

function IconButtonWithTooltip({ icon, tooltip, onClick }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const classes = getIconButtonClasses();

  return (
    <div className="relative">
      <button
        className={classes}
        onClick={onClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {icon}
      </button>
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-base-content text-base-100 text-xs rounded">
          {tooltip}
        </div>
      )}
    </div>
  );
}`,
      },
    ],
    notes: [
      "Returns classes for circular ghost button styling",
      "Includes proper padding, transitions, and hover effects",
      "Designed specifically for icon-only buttons",
    ],
  },
};
