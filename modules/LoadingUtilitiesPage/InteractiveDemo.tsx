"use client";
import { getLoadingClasses, LoadingSize, LoadingType } from "amvasdev-ui";
import { useState } from "react";

const TYPES = ["spin", "dots", "ring", "ball", "bars", "infinity"] as const;
const SIZES = ["xs", "sm", "md", "lg"] as const;

const InteractiveDemo = () => {
  const [selectedType, setSelectedType] =
    useState<(typeof TYPES)[number]>("spin");
  const [selectedSize, setSelectedSize] =
    useState<(typeof SIZES)[number]>("md");

  const generatedClasses = getLoadingClasses({
    type: selectedType,
    size: selectedSize,
  });

  return (
    <div className="p-6 bg-base-200 rounded-lg space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="label">
            <span className="label-text">Type</span>
          </label>
          <select
            className="select select-bordered w-full"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value as LoadingType)}
          >
            {TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
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
            onChange={(e) => setSelectedSize(e.target.value as LoadingSize)}
          >
            {SIZES.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <p className="font-semibold mb-2">Preview:</p>
        <div className="flex items-center justify-center p-8 bg-base-300 rounded">
          <span className={`loading ${generatedClasses}`} />
        </div>
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
