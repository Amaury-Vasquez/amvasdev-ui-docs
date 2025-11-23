"use client";
import { useState } from "react";
import { getButtonClasses, getButtonVariant, getButtonSize } from "amvasdev-ui";
import { UTILITIES_DATA } from "@/data/utilities";

const utilityData = UTILITIES_DATA.button;

const VARIANTS = [
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
] as const;

const SIZES = ["xs", "sm", "md", "lg"] as const;

export default function ButtonUtilitiesPage() {
  const [selectedVariant, setSelectedVariant] = useState<(typeof VARIANTS)[number]>("primary");
  const [selectedSize, setSelectedSize] = useState<(typeof SIZES)[number]>("md");
  const [outlined, setOutlined] = useState(false);

  const generatedClasses = getButtonClasses({
    variant: selectedVariant,
    size: selectedSize,
    outlined,
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">{utilityData.name}</h1>
        <p className="text-lg text-base-content/80">{utilityData.description}</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <div className="mockup-code">
          <pre>
            <code>{utilityData.importStatement}</code>
          </pre>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Functions</h2>
        <div className="space-y-6">
          {utilityData.functions.map((func) => (
            <div key={func.name} className="p-6 bg-base-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 font-mono">
                {func.name}
              </h3>
              <p className="text-base-content/70 mb-3">{func.description}</p>
              <div className="mockup-code mb-3">
                <pre>
                  <code>{func.signature}</code>
                </pre>
              </div>
              {(func.parameters?.length ?? 0) > 0 ? (
                <div className="mb-3">
                  <p className="font-semibold mb-2">Parameters:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-base-content/70">
                    {func.parameters?.map((param) => (
                      <li key={param.name}>
                        <code className="font-mono">{param.name}</code>
                        {param.required ? " (required)" : " (optional)"} -{" "}
                        {param.description}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <p className="text-sm">
                <span className="font-semibold">Returns:</span> {func.returns}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Interactive Demo</h2>
        <div className="p-6 bg-base-200 rounded-lg space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="label">
                <span className="label-text">Variant</span>
              </label>
              <select
                className="select select-bordered w-full"
                value={selectedVariant}
                onChange={(e) => setSelectedVariant(e.target.value as any)}
              >
                {VARIANTS.map((variant) => (
                  <option key={variant} value={variant}>
                    {variant}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="label">
                <span className="label-text">Size</span>
              </label>
              <select
                className="select select-bordered w-full"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value as any)}
              >
                {SIZES.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="label">
                <span className="label-text">Outlined</span>
              </label>
              <input
                type="checkbox"
                className="toggle toggle-primary mt-3"
                checked={outlined}
                onChange={(e) => setOutlined(e.target.checked)}
              />
            </div>
          </div>

          <div>
            <p className="font-semibold mb-2">Preview:</p>
            <button className={generatedClasses}>Generated Button</button>
          </div>

          <div>
            <p className="font-semibold mb-2">Generated Classes:</p>
            <div className="mockup-code">
              <pre>
                <code>{generatedClasses}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>
        <div className="space-y-8">
          {utilityData.examples.map((example, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-3">{example.title}</h3>
              {example.description ? (
                <p className="text-base-content/70 mb-3">{example.description}</p>
              ) : null}
              <div className="mockup-code">
                <pre>
                  <code>{example.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>

      {(utilityData.notes?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Notes</h2>
          <ul className="list-disc list-inside space-y-2 text-base-content/70">
            {utilityData.notes?.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
