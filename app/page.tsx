import Link from "next/link";
import CustomLink from "@/components/CustomLink";
import FeatureCard from "@/components/FeatureCard";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
      {/* Hero Section */}
      <section className="text-center md:py-12 space-y-6">
        <Logo size="xl" className="md:text-6xl" />
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          A React component library with DaisyUI styling and custom JavaScript
          implementations
        </p>
        <div className="flex flex-col gap-4 justify-center md:flex-row">
          <CustomLink href="/components" variant="primary" size="lg">
            Browse Components
          </CustomLink>
          <CustomLink
            href="https://www.npmjs.com/package/amvasdev-ui"
            variant="ghost"
            size="lg"
          >
            View on NPM
          </CustomLink>
        </div>
      </section>

      {/* Introduction */}
      <section className="space-y-4 md:space-y-6">
        <h2 className="text-2xl md:text-4xl font-bold">Introduction</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-base md:text-lg">
            <strong>amvasdev-ui</strong> is a comprehensive React component
            library that combines the beautiful styling of DaisyUI with custom
            JavaScript implementations. Built from the ground up to provide
            developers with fully customizable, production-ready components that
            maintain the aesthetic appeal of DaisyUI while offering complete
            control over component behavior and logic.
          </p>
        </div>
      </section>

      {/* Why amvasdev-ui */}
      <section className="space-y-6">
        <h2 className="text-xl md:text-4xl font-bold">Why amvasdev-ui?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard
            title="DaisyUI-Inspired Design"
            description="Leverages the proven design system of DaisyUI, providing beautiful and consistent styling across all components with support for multiple themes and color variants."
          />
          <FeatureCard
            title="Custom React Implementation"
            description="Built specifically for React with custom JavaScript logic, hooks, and state management. No dependency on DaisyUI's JavaScript - complete control over component behavior."
          />
          <FeatureCard
            title="Fully Customizable"
            description="Every component accepts custom props, supports className overrides, and provides extensive configuration options to match your specific requirements."
          />
          <FeatureCard
            title="TypeScript Support"
            description="Written in TypeScript with full type definitions, providing excellent IDE support, autocompletion, and type safety throughout your application."
          />
        </div>
      </section>

      {/* Key Features */}
      <section className="space-y-6">
        <h2 className="text-4xl font-bold">Key Features</h2>
        <div className="space-y-4">
          <FeatureCard
            title="🎨 Comprehensive Component Library"
            description="Over 20 production-ready components including forms, modals, dropdowns, tooltips, and more. All components follow consistent design patterns and APIs."
          />
          <FeatureCard
            title="🎯 Variant System"
            description="Consistent color variants across all components: base, neutral, primary, secondary, accent, info, success, warning, error, ghost, and link."
          />
          <FeatureCard
            title="📏 Flexible Sizing"
            description="Multiple size options (xs, sm, md, lg, xl) available for most components, ensuring perfect fit for any layout."
          />
          <FeatureCard
            title="🔌 Utility Hooks"
            description="Built-in React hooks for common patterns like notifications, form handling, local storage, and toggle states."
          />
          <FeatureCard
            title="🌙 Theme Support"
            description="Full support for DaisyUI themes with automatic dark mode handling via prefers-color-scheme."
          />
          <FeatureCard
            title="♿ Accessibility First"
            description="Components built with accessibility in mind, following WAI-ARIA guidelines and supporting keyboard navigation."
          />
        </div>
      </section>

      {/* Getting Started */}
      <section className="space-y-6">
        <h2 className="text-4xl font-bold">Getting Started</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-semibold mb-3">Installation</h3>
            <div className="mockup-code">
              <pre>
                <code>npm install amvasdev-ui</code>
              </pre>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Import Styles</h3>
            <p className="text-base-content/80 mb-3">
              Import the CSS file in your root layout or main entry file:
            </p>
            <div className="mockup-code">
              <pre>
                <code>{`import "amvasdev-ui/dist/index.css";`}</code>
              </pre>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">Use Components</h3>
            <p className="text-base-content/80 mb-3">
              Import and use components in your React application:
            </p>
            <div className="mockup-code">
              <pre>
                <code>
                  {`import { Button, Modal, Input } from "amvasdev-ui";

  function App() {
    return (
      <div>
        <Button variant="primary">Click me</Button>
        <Input label="Username" />
      </div>
    );
  }`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="space-y-6 pb-12">
        <h2 className="text-2xl md:text-4xl font-bold">Next Steps</h2>
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
    </div>
  );
}
