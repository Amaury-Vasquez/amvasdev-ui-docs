"use client";
import { ButtonSize, ButtonVariant, getButtonClasses } from "amvasdev-ui";
import { useState } from "react";

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

const InteractiveDemo = () => {
  const [selectedVariant, setSelectedVariant] =
    useState<(typeof VARIANTS)[number]>("primary");
  const [selectedSize, setSelectedSize] =
    useState<(typeof SIZES)[number]>("md");
  const [outlined, setOutlined] = useState(false);

  const generatedClasses = getButtonClasses({
    variant: selectedVariant,
    size: selectedSize,
    outlined,
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
              setSelectedVariant(e.currentTarget.value as ButtonVariant)
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
            onChange={(e) => setSelectedSize(e.target.value as ButtonSize)}
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
        <button
          className={generatedClasses}
          id="button-utilities-generated-button"
          aria-label="Generated button preview"
        >
          Generated Button
        </button>
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
