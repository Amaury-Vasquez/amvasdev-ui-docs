"use client";
import { Checkbox } from "amvasdev-ui";
import { COMPONENTS_DATA } from "@/data/components";

const checkboxData = COMPONENTS_DATA.checkbox;

export default function CheckboxPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">{checkboxData.name}</h1>
        <p className="text-lg text-base-content/80">
          {checkboxData.description}
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <div className="mockup-code">
          <pre>
            <code>
              {checkboxData.importStatement}
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
              <Checkbox id="terms" label="I agree to the terms and conditions" />
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`<Checkbox id="terms" label="I agree to the terms and conditions" />`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Required Field</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4">
              <Checkbox
                id="terms-required"
                label="I agree to the terms and conditions"
                required
              />
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`<Checkbox
    id="terms"
    label="I agree to the terms and conditions"
    required
  />`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Variants and Sizes</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4 space-y-4">
              <Checkbox
                id="accept"
                label="Accept"
                variant="primary"
                size="lg"
              />
              <Checkbox
                id="confirm"
                label="Confirm"
                variant="success"
                size="md"
              />
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`<Checkbox id="accept" label="Accept" variant="primary" size="lg" />
  <Checkbox id="confirm" label="Confirm" variant="success" size="md" />`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">With Error Message</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4">
              <Checkbox
                id="terms-error"
                label="I agree to the terms and conditions"
                errorMessage="You must accept the terms"
                required
              />
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`<Checkbox
    id="terms"
    label="I agree to the terms and conditions"
    errorMessage="You must accept the terms"
    required
  />`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {(checkboxData.variants?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Available Variants</h2>
          <div className="flex flex-wrap gap-2">
            {checkboxData.variants?.map((variant) => (
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

      {(checkboxData.sizes?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Available Sizes</h2>
          <div className="flex flex-wrap gap-2">
            {checkboxData.sizes?.map((size) => (
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

      {(checkboxData.notes?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Notes</h2>
          <ul className="list-disc list-inside space-y-2 text-base-content/70">
            {checkboxData.notes?.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
