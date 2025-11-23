export interface ComponentData {
  name: string;
  description: string;
  importStatement: string;
  category: string;
  props?: PropData[];
  variants?: string[];
  sizes?: string[];
  examples: ExampleData[];
  notes?: string[];
}

export interface PropData {
  name: string;
  type: string;
  required: boolean;
  default?: string;
  description: string;
}

export interface ExampleData {
  title: string;
  description?: string;
  code: string;
}

export const COMPONENTS_DATA: Record<string, ComponentData> = {
  button: {
    name: "Button",
    description:
      "The Button component supports various sizes, variants, loading states, and styling options.",
    importStatement: 'import { Button } from "amvasdev-ui";',
    category: "Form",
    variants: [
      "base",
      "neutral",
      "primary",
      "secondary",
      "accent",
      "info",
      "success",
      "warning",
      "error",
      "ghost",
      "link",
    ],
    sizes: ["xs", "sm", "md", "lg"],
    props: [
      {
        name: "variant",
        type: "ButtonVariant",
        required: false,
        default: "base",
        description: "Color variant of the button",
      },
      {
        name: "size",
        type: "ButtonSize",
        required: false,
        default: "md",
        description: "Size of the button",
      },
      {
        name: "isLoading",
        type: "boolean",
        required: false,
        default: "false",
        description: "Show loading state",
      },
      {
        name: "loadingStyles",
        type: "{ type: LoadingType; size: LoadingSize }",
        required: false,
        description: "Customize loading animation",
      },
      {
        name: "disabledOnLoading",
        type: "boolean",
        required: false,
        default: "true",
        description: "Disable button when loading",
      },
      {
        name: "outlined",
        type: "boolean",
        required: false,
        default: "false",
        description: "Use outlined style",
      },
      {
        name: "className",
        type: "ClassValue",
        required: false,
        description: "Additional CSS classes",
      },
    ],
    examples: [
      {
        title: "Basic Usage",
        code: `<Button>Click me</Button>`,
      },
      {
        title: "Variants",
        description: "Buttons come in multiple color variants",
        code: `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="error">Error</Button>
<Button variant="ghost">Ghost</Button>`,
      },
      {
        title: "Sizes",
        description: "Choose from four different sizes",
        code: `<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`,
      },
      {
        title: "Loading State",
        code: `<Button isLoading>Loading...</Button>
<Button
  isLoading
  loadingStyles={{ type: "dots", size: "sm" }}
  disabledOnLoading={false}
>
  Custom Loading
</Button>`,
      },
      {
        title: "Outlined Style",
        code: `<Button variant="primary" outlined>Outlined Primary</Button>
<Button variant="error" outlined>Outlined Error</Button>`,
      },
    ],
    notes: [
      "Loading types: spin, dots, ring, ball, bars, infinity",
      "All standard HTML button props are supported",
    ],
  },
  input: {
    name: "Input",
    description:
      "The Input component provides form inputs with labels, icons, validation, and various styling options.",
    importStatement: 'import { Input } from "amvasdev-ui";',
    category: "Form",
    variants: [
      "base",
      "ghost",
      "primary",
      "secondary",
      "accent",
      "success",
      "info",
      "warning",
      "error",
    ],
    sizes: ["xs", "sm", "md", "lg"],
    examples: [
      {
        title: "Basic Usage",
        code: `<Input id="username" label="Username" />`,
      },
      {
        title: "With Icons",
        description: "Add icons to the left or right side",
        code: `import { Search, User } from "lucide-react";

<Input
  id="search"
  label="Search"
  leftIcon={<Search size={16} />}
  placeholder="Search..."
/>

<Input
  id="profile"
  label="Profile"
  rightIcon={<User size={16} />}
/>`,
      },
      {
        title: "Variants and Sizes",
        code: `<Input id="email" variant="primary" size="lg" />
<Input id="error-input" variant="error" errorMessage="This field is required" />`,
      },
      {
        title: "Required Field",
        code: `<Input id="required" label="Required Field" required />`,
      },
    ],
  },
  "password-input": {
    name: "PasswordInput",
    description:
      "Password input field with toggle visibility functionality built-in.",
    importStatement: 'import { PasswordInput } from "amvasdev-ui";',
    category: "Form",
    examples: [
      {
        title: "Basic Usage",
        code: `<PasswordInput
  id="password"
  label="Password"
  placeholder="Enter your password"
/>`,
      },
    ],
  },
  modal: {
    name: "Modal",
    description:
      "The Modal component provides a flexible dialog with customizable close behavior and action buttons.",
    importStatement: 'import { Modal } from "amvasdev-ui";',
    category: "Overlay",
    examples: [
      {
        title: "Basic Modal",
        code: `import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

      {isOpen && (
        <Modal
          onClose={() => setIsOpen(false)}
          title="Confirmation"
          closeOnClickOutside={true}
          closeOnEsc={true}
          showCloseButton={true}
        >
          <p>Are you sure you want to continue?</p>
        </Modal>
      )}
    </>
  );
}`,
      },
      {
        title: "Modal with Action Buttons",
        code: `<Modal
  onClose={() => setIsOpen(false)}
  title="Delete Item"
  cancelButton={{
    children: "Cancel",
    variant: "ghost",
  }}
  confirmButton={{
    children: "Delete",
    variant: "error",
    onClick: () => console.log("Deleted!"),
  }}
  closeOnCancel={true}
  closeOnConfirm={true}
>
  <p>This action cannot be undone.</p>
</Modal>`,
      },
    ],
  },
  select: {
    name: "Select",
    description:
      "The Select component provides a custom dropdown select with controlled state.",
    importStatement: 'import { Select } from "amvasdev-ui";',
    category: "Form",
    sizes: ["xs", "sm", "md", "lg"],
    examples: [
      {
        title: "Basic Usage",
        code: `import { useState } from "react";

function App() {
  const [selectedOption, setSelectedOption] = useState();

  const options = [
    { id: "1", text: "Option 1" },
    { id: "2", text: "Option 2" },
    { id: "3", text: "Option 3" },
  ];

  return (
    <Select
      id="select"
      label="Choose an option"
      options={options}
      onChange={setSelectedOption}
      value={selectedOption}
      placeholder="Select an option"
    />
  );
}`,
      },
      {
        title: "With Validation",
        code: `<Select
  id="select"
  options={options}
  onChange={setSelectedOption}
  size="lg"
  bordered={true}
  errorMessage="This field is required"
  required
/>`,
      },
    ],
  },
  combobox: {
    name: "Combobox",
    description:
      "The Combobox component provides searchable dropdown functionality with custom options.",
    importStatement: 'import { Combobox } from "amvasdev-ui";',
    category: "Form",
    examples: [
      {
        title: "Basic Usage",
        code: `import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: "1", text: "Apple" },
    { id: "2", text: "Banana" },
    { id: "3", text: "Cherry" },
    { id: "4", text: "Date" },
  ];

  return (
    <Combobox
      id="fruits"
      name="fruits"
      label="Select a fruit"
      options={options}
      value={value}
      onChange={setValue}
      selectedOption={selectedOption}
      onSelect={setSelectedOption}
      placeholder="Search fruits..."
      optionLimit={5}
    />
  );
}`,
      },
      {
        title: "With Custom Content",
        code: `const optionsWithContent = [
  {
    id: "1",
    text: "Apple",
    content: (
      <div>
        <strong>Apple</strong> - Red fruit
      </div>
    ),
  },
];`,
      },
    ],
  },
  checkbox: {
    name: "Checkbox",
    description:
      "The Checkbox component provides a styled checkbox input with label support and variants.",
    importStatement: 'import { Checkbox } from "amvasdev-ui";',
    category: "Form",
    variants: [
      "base",
      "primary",
      "secondary",
      "accent",
      "success",
      "warning",
      "info",
      "error",
    ],
    sizes: ["xs", "sm", "md", "lg"],
    examples: [
      {
        title: "Basic Usage",
        code: `<Checkbox id="terms" label="I agree to the terms and conditions" />`,
      },
      {
        title: "Required Field",
        code: `<Checkbox id="terms" label="I agree to the terms and conditions" required />`,
      },
      {
        title: "With Variants and Sizes",
        code: `<Checkbox id="accept" label="Accept" variant="primary" size="lg" />
<Checkbox id="confirm" label="Confirm" variant="success" size="md" />`,
      },
      {
        title: "With Error Message",
        code: `<Checkbox
  id="terms"
  label="I agree to the terms and conditions"
  errorMessage="You must accept the terms"
  required
/>`,
      },
    ],
  },
  "radio-group": {
    name: "RadioGroup",
    description:
      "The RadioGroup component provides a controlled radio button group with various styling options.",
    importStatement: 'import { RadioGroup } from "amvasdev-ui";',
    category: "Form",
    variants: [
      "base",
      "primary",
      "secondary",
      "accent",
      "success",
      "warning",
      "info",
      "error",
    ],
    sizes: ["xs", "sm", "md", "lg"],
    examples: [
      {
        title: "Basic Usage",
        code: `import { useState } from "react";

function App() {
  const [selectedOption, setSelectedOption] = useState();

  const options = [
    { id: "yes", name: "Yes" },
    { id: "no", name: "No" },
    { id: "maybe", name: "Maybe", label: "Maybe Later" },
  ];

  return (
    <RadioGroup
      id="confirmation"
      options={options}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      orientation="horizontal"
      size="md"
      variant="primary"
    />
  );
}`,
      },
      {
        title: "Vertical Orientation",
        code: `<RadioGroup
  id="choice"
  options={options}
  selectedOption={selectedOption}
  setSelectedOption={setSelectedOption}
  orientation="vertical"
/>`,
      },
    ],
  },
  calendar: {
    name: "Calendar",
    description:
      "The Calendar component provides a date picker interface using react-day-picker with daisyUI styling.",
    importStatement: 'import { Calendar } from "amvasdev-ui";',
    category: "Form",
    examples: [
      {
        title: "Basic Usage",
        code: `import { useState } from "react";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Calendar
      selectedDate={selectedDate}
      onDateChange={setSelectedDate}
    />
  );
}`,
      },
      {
        title: "With Date Range",
        code: `<Calendar
  selectedDate={selectedDate}
  onDateChange={setSelectedDate}
  fromDate={new Date(2024, 0, 1)}
  toDate={new Date(2024, 11, 31)}
/>`,
      },
    ],
  },
  "date-input": {
    name: "DateInput",
    description:
      "The DateInput component provides a form input with integrated calendar picker functionality.",
    importStatement: 'import { DateInput } from "amvasdev-ui";',
    category: "Form",
    sizes: ["sm", "md", "lg"],
    examples: [
      {
        title: "Basic Usage",
        code: `import { useState } from "react";

function App() {
  const [selectedDate, setSelectedDate] = useState();

  return (
    <DateInput
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
      label="Birth Date"
      placeholder="Select your birth date"
    />
  );
}`,
      },
      {
        title: "With Validation",
        code: `<DateInput
  selectedDate={selectedDate}
  setSelectedDate={setSelectedDate}
  label="Event Date"
  required
  errorMessage="Please select a date"
/>`,
      },
      {
        title: "With Date Constraints",
        code: `<DateInput
  selectedDate={selectedDate}
  setSelectedDate={setSelectedDate}
  label="Appointment Date"
  fromDate={new Date()}
  toDate={new Date(2024, 11, 31)}
/>`,
      },
    ],
  },
  tooltip: {
    name: "Tooltip",
    description:
      "The Tooltip component displays positioned tooltip content around a trigger element. It supports four positions: top, down, left, and right.",
    importStatement: 'import { Tooltip } from "amvasdev-ui";',
    category: "Overlay",
    examples: [
      {
        title: "Basic Usage",
        code: `<span className="relative">
  Hover me
  <Tooltip content="This is a helpful tooltip" position="top" />
</span>`,
      },
      {
        title: "All Positions",
        code: `<span className="relative">
  Top
  <Tooltip content="Top tooltip" position="top" />
</span>

<span className="relative">
  Down
  <Tooltip content="Down tooltip" position="down" />
</span>

<span className="relative">
  Left
  <Tooltip content="Left tooltip" position="left" />
</span>

<span className="relative">
  Right
  <Tooltip content="Right tooltip" position="right" />
</span>`,
      },
    ],
    notes: [
      "The Tooltip component must be placed inside a container with relative positioning",
      "For buttons with tooltips, use the IconButton component's tooltip prop",
    ],
  },
  dropdown: {
    name: "Dropdown",
    description:
      "The Dropdown component provides a customizable dropdown menu with trigger element.",
    importStatement: 'import { Dropdown } from "amvasdev-ui";',
    category: "Overlay",
    examples: [
      {
        title: "Basic Usage",
        code: `<Dropdown triggerElement={<span>Menu</span>}>
  <li>
    <a>Profile</a>
  </li>
  <li>
    <a>Settings</a>
  </li>
  <li>
    <a>Logout</a>
  </li>
</Dropdown>`,
      },
      {
        title: "With Unstyled Trigger",
        code: `<Dropdown
  triggerElement={<span>Custom Trigger</span>}
  unstyledTrigger={true}
  position="right"
>
  <li><a>Option 1</a></li>
  <li><a>Option 2</a></li>
</Dropdown>`,
      },
    ],
  },
  breadcrumbs: {
    name: "Breadcrumbs",
    description:
      "The Breadcrumbs component displays navigation breadcrumbs with customizable options.",
    importStatement: 'import { Breadcrumbs } from "amvasdev-ui";',
    category: "Navigation",
    examples: [
      {
        title: "Basic Usage",
        code: `<Breadcrumbs
  id="nav-breadcrumbs"
  options={[
    <a href="/">Home</a>,
    <a href="/products">Products</a>,
    <span>Current Page</span>,
  ]}
/>`,
      },
      {
        title: "Using Router Links",
        code: `import { Link } from "react-router-dom";

<Breadcrumbs
  id="router-breadcrumbs"
  options={[
    <Link to="/">Home</Link>,
    <Link to="/products">Products</Link>,
    <span>Product Details</span>,
  ]}
/>`,
      },
    ],
  },
  "action-modal": {
    name: "ActionModal",
    description:
      "The ActionModal component provides a pre-styled modal for confirmation actions with various types.",
    importStatement: 'import { ActionModal } from "amvasdev-ui";',
    category: "Overlay",
    examples: [
      {
        title: "Success Modal",
        code: `import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ActionModal
      type="success"
      title="Success!"
      description="Your action was completed successfully."
      onConfirm={() => {
        console.log("Confirmed");
        setIsOpen(false);
      }}
      closeModal={() => setIsOpen(false)}
      showClose={true}
    />
  );
}`,
      },
      {
        title: "Warning Modal",
        code: `<ActionModal
  type="warning"
  title="Are you sure?"
  description="This action cannot be undone."
  onConfirm={handleDelete}
  confirmButtonText="Delete"
  cancelButtonText="Cancel"
  showCancelButton={true}
  onCancel={() => setIsOpen(false)}
/>`,
      },
      {
        title: "Error Modal with Loading",
        code: `<ActionModal
  type="error"
  title="Error occurred"
  description="Failed to complete the operation."
  onConfirm={handleRetry}
  isPending={isLoading}
  confirmButtonText="Retry"
  showCancelButton={true}
/>`,
      },
    ],
    notes: ["Available types: success, warning, info, error"],
  },
  "color-palette": {
    name: "ColorPalette",
    description:
      "The ColorPalette component displays a theme preview with color swatches. It's commonly used for theme selection interfaces.",
    importStatement: 'import { ColorPalette } from "amvasdev-ui";',
    category: "Display",
    examples: [
      {
        title: "Basic Usage",
        code: `<ColorPalette theme="emerald" />`,
      },
      {
        title: "Theme Selector",
        code: `import { useState } from "react";

function ThemeSelector() {
  const [selectedTheme, setSelectedTheme] = useState("light");

  const themes = ["light", "dark", "cupcake", "emerald", "dracula"];

  return (
    <div className="flex flex-col gap-2">
      {themes.map((theme) => (
        <ColorPalette
          key={theme}
          theme={theme}
          isSelected={selectedTheme === theme}
          onClick={() => setSelectedTheme(theme)}
          className="cursor-pointer"
        />
      ))}
    </div>
  );
}`,
      },
    ],
  },
  "icon-button": {
    name: "IconButton",
    description:
      "The IconButton component provides a circular ghost button optimized for displaying icons, with optional tooltip support.",
    importStatement: 'import { IconButton } from "amvasdev-ui";',
    category: "Button",
    examples: [
      {
        title: "Basic Usage",
        code: `import { Settings } from "lucide-react";

<IconButton
  icon={<Settings size={20} />}
  onClick={() => console.log("Settings clicked")}
/>`,
      },
      {
        title: "With Tooltip",
        code: `import { Edit, Trash } from "lucide-react";

<IconButton
  icon={<Edit size={18} />}
  tooltip="Edit item"
  onClick={handleEdit}
/>

<IconButton
  icon={<Trash size={18} />}
  tooltip={{ content: "Delete", position: "left" }}
  onClick={handleDelete}
/>`,
      },
      {
        title: "With Custom Tooltip Content",
        code: `<IconButton
  icon={<Trash size={18} />}
  tooltip={{
    content: (
      <div className="flex flex-col">
        <span className="font-bold">Delete</span>
        <span className="text-xs">Cannot be undone</span>
      </div>
    ),
    position: "down",
  }}
  onClick={handleDelete}
/>`,
      },
    ],
  },
  badge: {
    name: "Badge",
    description:
      "The Badge component displays small status indicators or labels with various styles and sizes.",
    importStatement: 'import { Badge } from "amvasdev-ui";',
    category: "Display",
    variants: [
      "neutral",
      "primary",
      "secondary",
      "accent",
      "info",
      "success",
      "warning",
      "error",
    ],
    sizes: ["xs", "sm", "md", "lg", "xl"],
    examples: [
      {
        title: "Basic Usage",
        code: `<Badge>Default</Badge>`,
      },
      {
        title: "Variants",
        code: `<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>`,
      },
      {
        title: "Sizes",
        code: `<Badge size="xs">Extra Small</Badge>
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>
<Badge size="xl">Extra Large</Badge>`,
      },
      {
        title: "Border Types",
        code: `<Badge borderType="outline" variant="primary">Outlined</Badge>
<Badge borderType="dash" variant="secondary">Dashed</Badge>
<Badge borderType="none">No Border</Badge>`,
      },
      {
        title: "Soft Style",
        code: `<Badge variant="success" soft>Soft Success</Badge>`,
      },
    ],
    notes: ["Available border types: none, outline, dash"],
  },
  "hamburger-menu": {
    name: "HamburgerMenu",
    description:
      "The HamburgerMenu component provides a mobile-friendly menu with an icon button trigger.",
    importStatement: 'import { HamburgerMenu } from "amvasdev-ui";',
    category: "Navigation",
    examples: [
      {
        title: "Basic Usage",
        code: `import { Menu as MenuIcon } from "lucide-react";

<HamburgerMenu icon={MenuIcon}>
  <li><a>Profile</a></li>
  <li><a>Settings</a></li>
  <li><a>Logout</a></li>
</HamburgerMenu>`,
      },
      {
        title: "With Custom Position",
        code: `<HamburgerMenu icon={MenuIcon} position="right">
  <li><a>Option 1</a></li>
  <li><a>Option 2</a></li>
</HamburgerMenu>`,
      },
      {
        title: "Custom Icon Size and Styling",
        code: `<HamburgerMenu
  icon={MenuIcon}
  iconSize={24}
  iconButtonClassName="text-primary"
  menuClassName="min-w-48"
>
  <li><a>Dashboard</a></li>
  <li><a>Analytics</a></li>
  <li><a>Reports</a></li>
</HamburgerMenu>`,
      },
    ],
    notes: ["Available positions: left, right"],
  },
};
