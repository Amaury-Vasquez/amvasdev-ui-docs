"use client";
import { getInputClasses, InputSize, InputVariant } from "amvasdev-ui";
import { useState } from "react";

const VARIANTS = [
  "base",
  "ghost",
  "primary",
  "secondary",
  "accent",
  "success",
  "info",
  "warning",
  "error",
] as const;

const SIZES = ["xs", "sm", "md", "lg"] as const;

const InteractiveDemo = () => {
  const [selectedVariant, setSelectedVariant] =
    useState<(typeof VARIANTS)[number]>("primary");
  const [selectedSize, setSelectedSize] =
    useState<(typeof SIZES)[number]>("md");
  const [bordered, setBordered] = useState(true);

  const generatedClasses = getInputClasses({
    variant: selectedVariant,
    size: selectedSize,
    bordered,
  });

  return (
    <div className="p-6 bg-base-200 rounded-lg space-y-6">
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="label">
            <span className="label-text">Variant</span>
          </label>
          <select
            className="select select-bordered w-full"
            value={selectedVariant}
            onChange={(e) =>
              setSelectedVariant(e.target.value as InputVariant)
            }
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
            onChange={(e) => setSelectedSize(e.target.value as InputSize)}
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
            <span className="label-text">Bordered</span>
          </label>
          <input
            type="checkbox"
            className="toggle toggle-primary mt-3"
            checked={bordered}
            onChange={(e) => setBordered(e.target.checked)}
          />
        </div>
      </div>

      <div>
        <p className="font-semibold mb-2">Preview:</p>
        <input
          className={generatedClasses}
          placeholder="Generated input..."
        />
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
  );
};

export default InteractiveDemo;
