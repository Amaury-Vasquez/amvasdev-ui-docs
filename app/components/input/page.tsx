"use client";
import { Input } from "amvasdev-ui";
import { Search, User } from "lucide-react";
import { COMPONENTS_DATA } from "@/data/components";

const inputData = COMPONENTS_DATA.input;

export default function InputPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">{inputData.name}</h1>
        <p className="text-lg text-base-content/80">{inputData.description}</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <div className="mockup-code">
          <pre>
            <code>{inputData.importStatement}</code>
          </pre>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Basic Usage</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4">
              <Input id="username" label="Username" />
            </div>
            <div className="mockup-code">
              <pre>
                <code>{`<Input id="username" label="Username" />`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">With Icons</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4 space-y-4">
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
              />
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`import { Search, User } from "lucide-react";

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
  />`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Variants</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4 space-y-4">
              <Input id="primary" label="Primary" variant="primary" />
              <Input id="success" label="Success" variant="success" />
              <Input
                id="error"
                label="Error"
                variant="error"
                errorMessage="This field is required"
              />
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`<Input id="primary" label="Primary" variant="primary" />
  <Input id="success" label="Success" variant="success" />
  <Input
    id="error"
    label="Error"
    variant="error"
    errorMessage="This field is required"
  />`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Sizes</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4 space-y-4">
              <Input id="xs" label="Extra Small" size="xs" />
              <Input id="sm" label="Small" size="sm" />
              <Input id="md" label="Medium" size="md" />
              <Input id="lg" label="Large" size="lg" />
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`<Input id="xs" label="Extra Small" size="xs" />
  <Input id="sm" label="Small" size="sm" />
  <Input id="md" label="Medium" size="md" />
  <Input id="lg" label="Large" size="lg" />`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Required Field</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4">
              <Input id="required" label="Required Field" required />
            </div>
            <div className="mockup-code">
              <pre>
                <code>{`<Input id="required" label="Required Field" required />`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {inputData.variants && (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Available Variants</h2>
          <div className="flex flex-wrap gap-2">
            {inputData.variants.map((variant) => (
              <code
                key={variant}
                className="px-3 py-1 bg-base-300 rounded-md text-sm font-mono"
              >
                {variant}
              </code>
            ))}
          </div>
        </div>
      )}

      {inputData.sizes && (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Available Sizes</h2>
          <div className="flex flex-wrap gap-2">
            {inputData.sizes.map((size) => (
              <code
                key={size}
                className="px-3 py-1 bg-base-300 rounded-md text-sm font-mono"
              >
                {size}
              </code>
            ))}
          </div>
        </div>
      )}

      {inputData.notes && (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Notes</h2>
          <ul className="list-disc list-inside space-y-2 text-base-content/70">
            {inputData.notes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
