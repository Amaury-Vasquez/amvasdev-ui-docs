import CustomLink from "@/components/CustomLink";
import Link from "next/link";

export default function InstallationPage() {
  return (
    <div className="space-y-12 p-4 md:p-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-4">Installation</h1>
        <p className="text-lg text-base-content/80">
          Get started with amvasdev-ui in your React project. Follow these steps
          to install and configure the library.
        </p>
      </div>

      {/* Prerequisites */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Prerequisites</h2>
        <p className="text-base-content/80">
          Before installing amvasdev-ui, ensure you have the following:
        </p>
        <ul className="list-disc list-inside space-y-2 text-base-content/80 ml-4">
          <li>Node.js 16.x or higher</li>
          <li>React 18.x or higher</li>
          <li>A React project (Next.js, Vite, Create React App, etc.)</li>
        </ul>
      </section>

      {/* Installation */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Install the Package</h2>
        <p className="text-base-content/80">
          Install amvasdev-ui using your preferred package manager:
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">npm</h3>
            <div className="mockup-code">
              <pre>
                <code>npm install amvasdev-ui</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">yarn</h3>
            <div className="mockup-code">
              <pre>
                <code>yarn add amvasdev-ui</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">pnpm</h3>
            <div className="mockup-code">
              <pre>
                <code>pnpm add amvasdev-ui</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Setup */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Import Styles</h2>
        <p className="text-base-content/80">
          Import the CSS file in your application's entry point or root layout:
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Next.js App Router</h3>
            <p className="text-base-content/70 mb-2">
              Add the import to your root layout file (
              <code className="px-2 py-1 bg-base-300 rounded text-sm">
                app/layout.tsx
              </code>
              ):
            </p>
            <div className="mockup-code">
              <pre>
                <code>
                  {`import "amvasdev-ui/dist/index.css";

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Next.js Pages Router</h3>
            <p className="text-base-content/70 mb-2">
              Add the import to{" "}
              <code className="px-2 py-1 bg-base-300 rounded text-sm">
                pages/_app.tsx
              </code>
              :
            </p>
            <div className="mockup-code">
              <pre>
                <code>
                  {`import "amvasdev-ui/dist/index.css";
  import type { AppProps } from "next/app";

  export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
  }`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Vite</h3>
            <p className="text-base-content/70 mb-2">
              Add the import to your main entry file (
              <code className="px-2 py-1 bg-base-300 rounded text-sm">
                src/main.tsx
              </code>
              ):
            </p>
            <div className="mockup-code">
              <pre>
                <code>
                  {`import React from "react";
  import ReactDOM from "react-dom/client";
  import "amvasdev-ui/dist/index.css";
  import App from "./App";

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Create React App</h3>
            <p className="text-base-content/70 mb-2">
              Add the import to{" "}
              <code className="px-2 py-1 bg-base-300 rounded text-sm">
                src/index.tsx
              </code>
              :
            </p>
            <div className="mockup-code">
              <pre>
                <code>
                  {`import React from "react";
  import ReactDOM from "react-dom/client";
  import "amvasdev-ui/dist/index.css";
  import App from "./App";

  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Tailwind CSS Configuration */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Tailwind CSS Configuration</h2>
        <p className="text-base-content/80">
          amvasdev-ui uses Tailwind CSS and DaisyUI for styling. If you don't
          already have Tailwind CSS installed, follow these steps:
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              1. Install Tailwind CSS and DaisyUI
            </h3>
            <div className="mockup-code">
              <pre>
                <code>npm install -D tailwindcss daisyui</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              2. Initialize Tailwind CSS
            </h3>
            <div className="mockup-code">
              <pre>
                <code>npx tailwindcss init</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              3. Configure tailwind.config.js
            </h3>
            <p className="text-base-content/70 mb-2">
              Add DaisyUI to your Tailwind configuration:
            </p>
            <div className="mockup-code">
              <pre>
                <code>
                  {`/** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    plugins: [require("daisyui")],
    daisyui: {
      themes: ["light", "dark", "cupcake", "emerald", "dracula"],
    },
  };`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              4. Add Tailwind Directives to CSS
            </h3>
            <p className="text-base-content/70 mb-2">
              Add these directives to your global CSS file (
              <code className="px-2 py-1 bg-base-300 rounded text-sm">
                globals.css
              </code>
              ):
            </p>
            <div className="mockup-code">
              <pre>
                <code>
                  {`@tailwind base;
  @tailwind components;
  @tailwind utilities;`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div className="alert alert-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>
            If you already have Tailwind CSS and DaisyUI configured in your
            project, you can skip this section.
          </span>
        </div>
      </section>

      {/* Verify Installation */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Verify Installation</h2>
        <p className="text-base-content/80">
          Test that everything is working correctly by using a component:
        </p>
        <div className="mockup-code">
          <pre>
            <code>
              {`import { Button } from "amvasdev-ui";

  function App() {
    return (
      <div className="p-8">
        <Button variant="primary">Hello amvasdev-ui!</Button>
      </div>
    );
  }`}
            </code>
          </pre>
        </div>
        <p className="text-base-content/70">
          If you see a styled button when you run your application, the
          installation was successful!
        </p>
      </section>

      {/* TypeScript Support */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">TypeScript Support</h2>
        <p className="text-base-content/80">
          amvasdev-ui is written in TypeScript and includes full type
          definitions. No additional setup is required for TypeScript projects.
          You'll get automatic type checking and autocomplete in your IDE.
        </p>
        <div className="mockup-code">
          <pre>
            <code>
              {`import { Button } from "amvasdev-ui";
  import type { ButtonProps } from "amvasdev-ui";

  const MyButton: React.FC<ButtonProps> = (props) => {
    return <Button {...props} />;
  };`}
            </code>
          </pre>
        </div>
      </section>

      {/* Next Steps */}
      <section className="space-y-6 pb-12">
        <h2 className="text-3xl font-bold">Next Steps</h2>
        <p className="text-base-content/80">
          Now that you've installed amvasdev-ui, here's what to do next:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <Link
            href="/components"
            className="p-6 bg-base-200 rounded-lg hover:bg-base-300 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">📚 Browse Components</h3>
            <p className="text-base-content/70">
              Explore all available components with live examples and code
              snippets.
            </p>
          </Link>
          <Link
            href="/hooks"
            className="p-6 bg-base-200 rounded-lg hover:bg-base-300 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">🔌 Utility Hooks</h3>
            <p className="text-base-content/70">
              Learn about built-in hooks for common React patterns and state
              management.
            </p>
          </Link>
          <Link
            href="/theming"
            className="p-6 bg-base-200 rounded-lg hover:bg-base-300 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">🎨 Theming Guide</h3>
            <p className="text-base-content/70">
              Customize themes and learn how to style components to match your
              brand.
            </p>
          </Link>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">Troubleshooting</h2>
        <div className="space-y-4">
          <div className="p-6 bg-base-200 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              Components are not styled
            </h3>
            <p className="text-base-content/70 mb-2">
              Make sure you've imported the CSS file and configured Tailwind CSS
              with DaisyUI. Check that the import statement is in your root
              layout or entry file.
            </p>
          </div>

          <div className="p-6 bg-base-200 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              TypeScript errors with components
            </h3>
            <p className="text-base-content/70 mb-2">
              Ensure you're using compatible versions of React and TypeScript. The
              library requires React 18+ and TypeScript 4.5+.
            </p>
          </div>

          <div className="p-6 bg-base-200 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              Styles conflict with existing CSS
            </h3>
            <p className="text-base-content/70 mb-2">
              If you're experiencing style conflicts, make sure the amvasdev-ui CSS
              is imported after your global styles. You can also use CSS modules
              or CSS-in-JS solutions to scope your styles.
            </p>
          </div>
        </div>
      </section>

      {/* Get Help */}
      <section className="space-y-4 pb-12">
        <h2 className="text-3xl font-bold">Get Help</h2>
        <p className="text-base-content/80">
          If you encounter any issues during installation, here are some
          resources:
        </p>
        <div className="flex gap-4">
          <CustomLink
            href="https://github.com/amvasdev/amvasdev-ui/issues"
            variant="neutral"
            size="md"
          >
            Report an Issue
          </CustomLink>
          <CustomLink
            href="https://github.com/amvasdev/amvasdev-ui/discussions"
            variant="ghost"
            size="md"
          >
            Join Discussions
          </CustomLink>
        </div>
      </section>
    </div>
  );
}
