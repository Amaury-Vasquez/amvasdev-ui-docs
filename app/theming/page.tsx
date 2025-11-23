"use client";
import { useState } from "react";
import { useThemeChange, ColorPalette, Button } from "amvasdev-ui";
import Link from "next/link";

const AVAILABLE_THEMES = [
  { name: "light", description: "Clean and bright theme" },
  { name: "dark", description: "Dark mode for low-light environments" },
  { name: "cupcake", description: "Soft pastel colors" },
  { name: "emerald", description: "Professional green theme" },
  { name: "dracula", description: "Dark theme with vibrant colors" },
  { name: "winter", description: "Cool blue-tinted theme" },
  { name: "night", description: "Deep dark theme" },
  { name: "halloween", description: "Orange and purple spooky theme" },
  { name: "autumn", description: "Warm earthy tones" },
  { name: "business", description: "Professional corporate theme" },
  { name: "nord", description: "Arctic inspired color palette" },
  { name: "dim", description: "Dimmed dark theme" },
  { name: "lemonade", description: "Fresh yellow theme" },
  { name: "sunset", description: "Warm sunset colors" },
  { name: "valentine", description: "Pink romantic theme" },
];

const COLOR_SYSTEM = [
  { name: "base-100", description: "Primary background color" },
  { name: "base-200", description: "Secondary background color" },
  { name: "base-300", description: "Tertiary background color" },
  { name: "base-content", description: "Foreground content color" },
  { name: "primary", description: "Primary brand color" },
  { name: "secondary", description: "Secondary brand color" },
  { name: "accent", description: "Accent color for highlights" },
  { name: "neutral", description: "Neutral color for UI elements" },
  { name: "info", description: "Informational messages" },
  { name: "success", description: "Success states" },
  { name: "warning", description: "Warning states" },
  { name: "error", description: "Error states" },
];

export default function ThemingPage() {
  const { changeTheme } = useThemeChange();
  const [currentTheme, setCurrentTheme] = useState("light");

  const handleThemeChange = (theme: string) => {
    changeTheme(theme);
    setCurrentTheme(theme);
  };

  return (
    <div className="space-y-12 p-4 md:p-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-4">Theming Guide</h1>
        <p className="text-lg text-base-content/80">
          Learn how to customize and apply themes in amvasdev-ui. Built on
          DaisyUI's theming system, you can easily switch between pre-built
          themes or create your own custom themes.
        </p>
      </div>

      {/* Quick Theme Switcher */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Try Different Themes</h2>
        <p className="text-base-content/80">
          Click on any theme below to see it applied to this page:
        </p>
        <div className="p-6 bg-base-200 rounded-lg space-y-2">
          <p className="font-semibold mb-3">Current Theme: {currentTheme}</p>
          {AVAILABLE_THEMES.map((theme) => (
            <ColorPalette
              key={theme.name}
              theme={theme.name}
              isSelected={currentTheme === theme.name}
              onClick={() => handleThemeChange(theme.name)}
              className="cursor-pointer"
            />
          ))}
        </div>
      </section>

      {/* Using useThemeChange Hook */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Using the useThemeChange Hook</h2>
        <p className="text-base-content/80">
          The easiest way to implement theme switching in your application:
        </p>
        <div className="mockup-code">
          <pre>
            <code>
              {`import { useThemeChange, ColorPalette } from "amvasdev-ui";
  import { useState } from "react";

  function ThemeSwitcher() {
    const { changeTheme } = useThemeChange();
    const [currentTheme, setCurrentTheme] = useState("light");

    const handleThemeChange = (theme) => {
      changeTheme(theme);
      setCurrentTheme(theme);
    };

    const themes = ["light", "dark", "cupcake", "emerald"];

    return (
      <div>
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
  }`}
            </code>
          </pre>
        </div>
      </section>

      {/* Available Themes */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Available Themes</h2>
        <p className="text-base-content/80">
          amvasdev-ui supports all DaisyUI built-in themes:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {AVAILABLE_THEMES.map((theme) => (
            <div key={theme.name} className="p-4 bg-base-200 rounded-lg">
              <h3 className="font-semibold mb-1">{theme.name}</h3>
              <p className="text-sm text-base-content/70">{theme.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Color System */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Color System</h2>
        <p className="text-base-content/80">
          All themes follow a consistent color system with semantic color names:
        </p>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Color Name</th>
                <th>Description</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              {COLOR_SYSTEM.map((color) => (
                <tr key={color.name}>
                  <td className="font-mono">{color.name}</td>
                  <td>{color.description}</td>
                  <td>
                    <div
                      className={`w-16 h-8 rounded border border-base-content/20 bg-${color.name}`}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Manual Theme Setup */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Manual Theme Configuration</h2>
        <p className="text-base-content/80">
          If you prefer to set up themes without the hook, you can configure
          them directly:
        </p>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            1. Configure tailwind.config.js
          </h3>
          <div className="mockup-code">
            <pre>
              <code>
                {`/** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    plugins: [require("daisyui")],
    daisyui: {
      themes: ["light", "dark", "cupcake", "emerald", "dracula"],
      // Or include all themes:
      // themes: true,
    },
  };`}
              </code>
            </pre>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">
            2. Set Theme on HTML Element
          </h3>
          <div className="mockup-code">
            <pre>
              <code>
                {`// In your root layout or _document.tsx
  <html lang="en" data-theme="light">
    <body>{children}</body>
  </html>

  // Or dynamically change theme:
  document.documentElement.setAttribute("data-theme", "dark");`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Custom Themes */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Creating Custom Themes</h2>
        <p className="text-base-content/80">
          You can create your own custom themes by defining CSS variables:
        </p>
        <div className="mockup-code">
          <pre>
            <code>
              {`// tailwind.config.js
  module.exports = {
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#570df8",
            secondary: "#f000b8",
            accent: "#37cdbe",
            neutral: "#3d4451",
            "base-100": "#ffffff",
            info: "#3abff8",
            success: "#36d399",
            warning: "#fbbd23",
            error: "#f87272",
          },
        },
      ],
    },
  };`}
            </code>
          </pre>
        </div>
      </section>

      {/* Component Variants */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Component Variant System</h2>
        <p className="text-base-content/80">
          All components support consistent color variants that automatically
          adapt to the active theme:
        </p>
        <div className="p-6 bg-base-200 rounded-lg space-y-4">
          <div className="flex flex-wrap gap-2">
            <Button variant="base">Base</Button>
            <Button variant="neutral">Neutral</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="accent">Accent</Button>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="info">Info</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="error">Error</Button>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>
      </section>

      {/* Dark Mode */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Dark Mode Support</h2>
        <p className="text-base-content/80">
          Implement automatic dark mode based on system preferences:
        </p>
        <div className="mockup-code">
          <pre>
            <code>
              {`// Detect system preference
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    changeTheme("dark");
  } else {
    changeTheme("light");
  }

  // Listen for changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      changeTheme(e.matches ? "dark" : "light");
    });`}
            </code>
          </pre>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Best Practices</h2>
        <div className="space-y-4">
          <div className="p-6 bg-base-200 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              Use Semantic Color Names
            </h3>
            <p className="text-base-content/70">
              Always use semantic color names (primary, success, error) instead
              of specific color values. This ensures your UI adapts correctly to
              different themes.
            </p>
          </div>

          <div className="p-6 bg-base-200 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              Persist User Preferences
            </h3>
            <p className="text-base-content/70">
              Store the user's theme choice in localStorage so it persists across
              sessions.
            </p>
          </div>

          <div className="p-6 bg-base-200 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              Test with Multiple Themes
            </h3>
            <p className="text-base-content/70">
              Test your application with both light and dark themes to ensure
              proper contrast and readability.
            </p>
          </div>

          <div className="p-6 bg-base-200 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Provide a Theme Toggle</h3>
            <p className="text-base-content/70">
              Give users an easy way to switch between themes, preferably in an
              accessible location like the header or settings menu.
            </p>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="space-y-4 pb-12">
        <h2 className="text-3xl font-bold">Related Resources</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link
            href="/hooks/use-theme-change"
            className="p-6 bg-base-200 rounded-lg hover:bg-base-300 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">useThemeChange Hook</h3>
            <p className="text-base-content/70">
              Learn about the hook for programmatic theme switching.
            </p>
          </Link>
          <Link
            href="/components/color-palette"
            className="p-6 bg-base-200 rounded-lg hover:bg-base-300 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">ColorPalette Component</h3>
            <p className="text-base-content/70">
              Display theme previews with the ColorPalette component.
            </p>
          </Link>
          <a
            href="https://daisyui.com/docs/themes/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-base-200 rounded-lg hover:bg-base-300 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">DaisyUI Themes</h3>
            <p className="text-base-content/70">
              Official DaisyUI documentation for themes and customization.
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}
