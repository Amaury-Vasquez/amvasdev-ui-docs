"use client";
import { Badge } from "amvasdev-ui";
import { COMPONENTS_DATA } from "@/data/components";

const badgeData = COMPONENTS_DATA.badge;

export default function BadgePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">{badgeData.name}</h1>
        <p className="text-lg text-base-content/80">{badgeData.description}</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <div className="mockup-code">
          <pre>
            <code>
              {badgeData.importStatement}
            </code>
          </pre>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Basic Usage</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4">
              <Badge>Default</Badge>
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`<Badge>Default</Badge>`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Variants</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4 flex flex-wrap gap-3">
              <Badge variant="primary">Primary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`<Badge variant="primary">Primary</Badge>
  <Badge variant="success">Success</Badge>
  <Badge variant="warning">Warning</Badge>
  <Badge variant="error">Error</Badge>`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Sizes</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4 flex flex-wrap items-center gap-3">
              <Badge size="xs">Extra Small</Badge>
              <Badge size="sm">Small</Badge>
              <Badge size="md">Medium</Badge>
              <Badge size="lg">Large</Badge>
              <Badge size="xl">Extra Large</Badge>
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`<Badge size="xs">Extra Small</Badge>
  <Badge size="sm">Small</Badge>
  <Badge size="md">Medium</Badge>
  <Badge size="lg">Large</Badge>
  <Badge size="xl">Extra Large</Badge>`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Border Types</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4 flex flex-wrap gap-3">
              <Badge borderType="outline" variant="primary">
                Outlined
              </Badge>
              <Badge borderType="dash" variant="secondary">
                Dashed
              </Badge>
              <Badge borderType="none">No Border</Badge>
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`<Badge borderType="outline" variant="primary">Outlined</Badge>
  <Badge borderType="dash" variant="secondary">Dashed</Badge>
  <Badge borderType="none">No Border</Badge>`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Soft Style</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4 flex flex-wrap gap-3">
              <Badge variant="success" soft>
                Soft Success
              </Badge>
              <Badge variant="warning" soft>
                Soft Warning
              </Badge>
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`<Badge variant="success" soft>Soft Success</Badge>
  <Badge variant="warning" soft>Soft Warning</Badge>`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {(badgeData.variants?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Available Variants</h2>
          <div className="flex flex-wrap gap-2">
            {badgeData.variants?.map((variant) => (
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

      {(badgeData.sizes?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Available Sizes</h2>
          <div className="flex flex-wrap gap-2">
            {badgeData.sizes?.map((size) => (
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

      {(badgeData.notes?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Notes</h2>
          <ul className="list-disc list-inside space-y-2 text-base-content/70">
            {badgeData.notes?.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
