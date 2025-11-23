"use client";
import { Button } from "amvasdev-ui";
import { COMPONENTS_DATA } from "@/data/components";

const buttonData = COMPONENTS_DATA.button;

export default function ButtonPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">{buttonData.name}</h1>
        <p className="text-lg text-base-content/80">{buttonData.description}</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <div className="mockup-code">
          <pre>
            <code>{buttonData.importStatement}</code>
          </pre>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Basic Usage</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4">
              <Button>Click me</Button>
            </div>
            <div className="mockup-code">
              <pre>
                <code>{`<Button>Click me</Button>`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Variants</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4 flex flex-wrap gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="success">Success</Button>
              <Button variant="error">Error</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`<Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="success">Success</Button>
  <Button variant="error">Error</Button>
  <Button variant="ghost">Ghost</Button>`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Sizes</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4 flex flex-wrap items-center gap-3">
              <Button size="xs">Extra Small</Button>
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`<Button size="xs">Extra Small</Button>
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Loading State</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4 flex flex-wrap gap-3">
              <Button isLoading>Loading...</Button>
              <Button
                isLoading
                loadingStyles={{ type: "dots", size: "sm" }}
                disabledOnLoading={false}
              >
                Custom Loading
              </Button>
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`<Button isLoading>Loading...</Button>

  <Button
    isLoading
    loadingStyles={{ type: "dots", size: "sm" }}
    disabledOnLoading={false}
  >
    Custom Loading
  </Button>`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Outlined Style</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4 flex flex-wrap gap-3">
              <Button variant="primary" outlined>
                Outlined Primary
              </Button>
              <Button variant="error" outlined>
                Outlined Error
              </Button>
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`<Button variant="primary" outlined>Outlined Primary</Button>
  <Button variant="error" outlined>Outlined Error</Button>`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {(buttonData.variants?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Available Variants</h2>
          <div className="flex flex-wrap gap-2">
            {buttonData.variants?.map((variant) => (
              <code
                key={variant}
                className="px-3 py-1 bg-base-300 rounded-md text-sm font-mono"
              >
                {variant}
              </code>
            ))}
          </div>
        </div>
      ) : null}

      {(buttonData.sizes?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Available Sizes</h2>
          <div className="flex flex-wrap gap-2">
            {buttonData.sizes?.map((size) => (
              <code
                key={size}
                className="px-3 py-1 bg-base-300 rounded-md text-sm font-mono"
              >
                {size}
              </code>
            ))}
          </div>
        </div>
      ) : null}

      {(buttonData.notes?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Notes</h2>
          <ul className="list-disc list-inside space-y-2 text-base-content/70">
            {buttonData.notes?.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
