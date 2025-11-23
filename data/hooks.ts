export interface HookData {
  name: string;
  description: string;
  importStatement: string;
  signature: string;
  parameters?: ParameterData[];
  returns?: ReturnData;
  examples: ExampleData[];
  notes?: string[];
}

export interface ParameterData {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

export interface ReturnData {
  type: string;
  description: string;
}

export interface ExampleData {
  title: string;
  description?: string;
  code: string;
}

export const HOOKS_DATA: Record<string, HookData> = {
  "use-closable-container": {
    name: "useClosableContainer",
    description:
      "Hook for managing closable containers like modals, dropdowns, and popovers.",
    importStatement: 'import { useClosableContainer } from "amvasdev-ui";',
    signature:
      "useClosableContainer(ref, onClose, options): { isClosing, handleClose }",
    parameters: [
      {
        name: "ref",
        type: "RefObject<HTMLElement>",
        required: true,
        description: "Reference to the container element",
      },
      {
        name: "onClose",
        type: "() => void",
        required: true,
        description: "Callback function to execute when closing",
      },
      {
        name: "options",
        type: "ClosableContainerOptions",
        required: false,
        description: "Configuration options for the container",
      },
    ],
    returns: {
      type: "{ isClosing: boolean; handleClose: () => void }",
      description: "Object containing closing state and close handler function",
    },
    examples: [
      {
        title: "Basic Usage with Modal",
        code: `import { useClosableContainer } from "amvasdev-ui";
import { useRef } from "react";

function MyModal({ onClose }) {
  const ref = useRef(null);
  const { isClosing, handleClose } = useClosableContainer(ref, onClose, {
    closeTimeout: 300,
    closeOnEsc: true,
    closeOnClickOutside: true,
  });

  return (
    <div
      ref={ref}
      className={isClosing ? "animate-fade-out" : "animate-fade-in"}
    >
      <button onClick={handleClose}>Close</button>
      <p>Modal content</p>
    </div>
  );
}`,
      },
      {
        title: "Dropdown Example",
        code: `import { useClosableContainer } from "amvasdev-ui";
import { useRef, useState } from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { isClosing, handleClose } = useClosableContainer(
    dropdownRef,
    () => setIsOpen(false),
    {
      closeTimeout: 200,
      closeOnEsc: true,
      closeOnClickOutside: true,
    }
  );

  return (
    <div ref={dropdownRef}>
      <button onClick={() => setIsOpen(true)}>Toggle</button>
      {isOpen && (
        <div className={isClosing ? "animate-fade-out" : "animate-fade-in"}>
          <ul>
            <li onClick={handleClose}>Option 1</li>
            <li onClick={handleClose}>Option 2</li>
          </ul>
        </div>
      )}
    </div>
  );
}`,
      },
    ],
    notes: [
      "closeTimeout: Animation duration before calling onClose (default: 280ms)",
      "closeOnEsc: Close when Escape key is pressed (default: true)",
      "closeOnClickOutside: Close when clicking outside (default: true)",
    ],
  },
  "use-theme-change": {
    name: "useThemeChange",
    description: "Hook for changing daisyUI themes dynamically.",
    importStatement: 'import { useThemeChange } from "amvasdev-ui";',
    signature: "useThemeChange(): { changeTheme }",
    returns: {
      type: "{ changeTheme: (theme: string) => void }",
      description: "Object containing the changeTheme function",
    },
    examples: [
      {
        title: "Theme Selector",
        code: `import { useThemeChange } from "amvasdev-ui";

function ThemeSelector() {
  const { changeTheme } = useThemeChange();

  return (
    <select onChange={(e) => changeTheme(e.target.value)}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="emerald">Emerald</option>
      <option value="dracula">Dracula</option>
      <option value="winter">Winter</option>
      <option value="night">Night</option>
      <option value="halloween">Halloween</option>
      <option value="autumn">Autumn</option>
      <option value="business">Business</option>
      <option value="nord">Nord</option>
      <option value="dim">Dim</option>
      <option value="lemonade">Lemonade</option>
      <option value="sunset">Sunset</option>
      <option value="valentine">Valentine</option>
    </select>
  );
}`,
      },
      {
        title: "With ColorPalette Component",
        code: `import { ColorPalette, useThemeChange } from "amvasdev-ui";
import { useState } from "react";

function ThemeSelector() {
  const { changeTheme } = useThemeChange();
  const [currentTheme, setCurrentTheme] = useState("light");

  const handleThemeChange = (theme) => {
    changeTheme(theme);
    setCurrentTheme(theme);
  };

  const themes = ["light", "dark", "cupcake", "emerald", "dracula"];

  return (
    <div className="flex flex-col gap-2">
      {themes.map((theme) => (
        <ColorPalette
          key={theme}
          theme={theme}
          isSelected={currentTheme === theme}
          onClick={() => handleThemeChange(theme)}
          className="cursor-pointer"
        />
      ))}
    </div>
  );
}`,
      },
    ],
    notes: [
      "Supports all daisyUI themes",
      "Theme changes persist in the DOM data-theme attribute",
    ],
  },
  "use-event-listener": {
    name: "useEventListener",
    description: "Hook for adding event listeners with automatic cleanup.",
    importStatement: 'import { useEventListener } from "amvasdev-ui";',
    signature: "useEventListener(eventName, handler, element?, options?): void",
    parameters: [
      {
        name: "eventName",
        type: "string",
        required: true,
        description: "Name of the event to listen to",
      },
      {
        name: "handler",
        type: "(event: Event) => void",
        required: true,
        description: "Event handler function",
      },
      {
        name: "element",
        type: "RefObject<HTMLElement> | undefined",
        required: false,
        description: "Target element (defaults to window)",
      },
      {
        name: "options",
        type: "AddEventListenerOptions",
        required: false,
        description: "Event listener options",
      },
    ],
    examples: [
      {
        title: "Window Events",
        code: `import { useEventListener } from "amvasdev-ui";

function MyComponent() {
  // Listen to window events
  useEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      console.log("Escape key pressed");
    }
  });

  return <div>Press Escape key</div>;
}`,
      },
      {
        title: "Element Events",
        code: `import { useEventListener } from "amvasdev-ui";
import { useRef } from "react";

function MyComponent() {
  const buttonRef = useRef(null);

  // Listen to element events
  useEventListener(
    "click",
    (event) => {
      console.log("Button clicked");
    },
    buttonRef
  );

  return <button ref={buttonRef}>Click me</button>;
}`,
      },
      {
        title: "With Options",
        code: `import { useEventListener } from "amvasdev-ui";

function MyComponent() {
  useEventListener(
    "scroll",
    (event) => {
      console.log("Scrolled");
    },
    undefined,
    { passive: true }
  );

  return <div>Scroll the page</div>;
}`,
      },
    ],
    notes: [
      "Automatically cleans up event listeners on component unmount",
      "Supports all standard DOM events",
    ],
  },
  "use-on-click-outside": {
    name: "useOnClickOutside",
    description: "Hook for detecting clicks outside of an element.",
    importStatement: 'import { useOnClickOutside } from "amvasdev-ui";',
    signature: "useOnClickOutside(ref, handler): void",
    parameters: [
      {
        name: "ref",
        type: "RefObject<HTMLElement>",
        required: true,
        description: "Reference to the element to detect outside clicks",
      },
      {
        name: "handler",
        type: "(event: MouseEvent | TouchEvent) => void",
        required: true,
        description: "Function to call when clicking outside",
      },
    ],
    examples: [
      {
        title: "Dropdown Example",
        code: `import { useOnClickOutside } from "amvasdev-ui";
import { useRef, useState } from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useOnClickOutside(dropdownRef, () => {
    setIsOpen(false);
  });

  return (
    <div ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      {isOpen && <div>Dropdown content</div>}
    </div>
  );
}`,
      },
      {
        title: "Modal Example",
        code: `import { useOnClickOutside } from "amvasdev-ui";
import { useRef } from "react";

function Modal({ onClose }) {
  const modalRef = useRef(null);

  useOnClickOutside(modalRef, onClose);

  return (
    <div className="overlay">
      <div ref={modalRef} className="modal-content">
        <h2>Modal Title</h2>
        <p>Click outside to close</p>
      </div>
    </div>
  );
}`,
      },
    ],
    notes: [
      "Detects both mouse clicks and touch events",
      "Automatically cleans up on component unmount",
    ],
  },
  "use-toggle": {
    name: "useToggle",
    description: "Hook for toggling boolean values.",
    importStatement: 'import { useToggle } from "amvasdev-ui";',
    signature: "useToggle(initialValue): [boolean, () => void]",
    parameters: [
      {
        name: "initialValue",
        type: "boolean",
        required: false,
        description: "Initial boolean value (default: false)",
      },
    ],
    returns: {
      type: "[boolean, () => void]",
      description: "Tuple containing the current value and toggle function",
    },
    examples: [
      {
        title: "Basic Toggle",
        code: `import { useToggle } from "amvasdev-ui";

function ToggleExample() {
  const [isVisible, toggleVisibility] = useToggle(false);
  const [isEnabled, toggleEnabled] = useToggle(true);

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"}
      </button>
      <button onClick={toggleEnabled}>
        {isEnabled ? "Disable" : "Enable"}
      </button>

      {isVisible && <p>This content is visible</p>}
    </div>
  );
}`,
      },
      {
        title: "Sidebar Toggle",
        code: `import { useToggle } from "amvasdev-ui";

function Sidebar() {
  const [isOpen, toggleSidebar] = useToggle(false);

  return (
    <>
      <button onClick={toggleSidebar}>Toggle Sidebar</button>

      <aside className={isOpen ? "open" : "closed"}>
        <nav>
          <a href="/home">Home</a>
          <a href="/about">About</a>
        </nav>
      </aside>
    </>
  );
}`,
      },
      {
        title: "Dark Mode Toggle",
        code: `import { useToggle } from "amvasdev-ui";

function DarkModeToggle() {
  const [isDark, toggleDarkMode] = useToggle(false);

  return (
    <button onClick={toggleDarkMode}>
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}`,
      },
    ],
  },
  "use-isomorphic-layout-effect": {
    name: "useIsomorphicLayoutEffect",
    description:
      "Hook that uses useLayoutEffect on the client and useEffect on the server (for SSR compatibility).",
    importStatement: 'import { useIsomorphicLayoutEffect } from "amvasdev-ui";',
    signature: "useIsomorphicLayoutEffect(effect, deps): void",
    parameters: [
      {
        name: "effect",
        type: "() => void | (() => void)",
        required: true,
        description: "Effect function to run",
      },
      {
        name: "deps",
        type: "DependencyList",
        required: false,
        description: "Dependencies array",
      },
    ],
    examples: [
      {
        title: "Responsive Component",
        code: `import { useIsomorphicLayoutEffect } from "amvasdev-ui";
import { useState } from "react";

function ResponsiveComponent() {
  const [width, setWidth] = useState(0);

  useIsomorphicLayoutEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return <div>Width: {width}px</div>;
}`,
      },
      {
        title: "Scroll Position",
        code: `import { useIsomorphicLayoutEffect } from "amvasdev-ui";
import { useState } from "react";

function ScrollIndicator() {
  const [scrollY, setScrollY] = useState(0);

  useIsomorphicLayoutEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div>Scroll position: {scrollY}px</div>;
}`,
      },
    ],
    notes: [
      "Prevents SSR warnings when using layout effects",
      "Same API as useLayoutEffect",
      "Use this instead of useLayoutEffect for SSR-compatible code",
    ],
  },
};
