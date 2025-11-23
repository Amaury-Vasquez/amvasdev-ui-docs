"use client";
import { useState } from "react";
import { ColorPalette } from "amvasdev-ui";
import { COMPONENTS_DATA } from "@/data/components";

const colorPaletteData = COMPONENTS_DATA["color-palette"];

const THEMES = ["light", "dark", "cupcake", "emerald", "dracula"];

export default function ColorPalettePage() {
  const [selectedTheme, setSelectedTheme] = useState("light");

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">{colorPaletteData.name}</h1>
        <p className="text-lg text-base-content/80">
          {colorPaletteData.description}
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <div className="mockup-code">
          <pre>
            <code>
              {colorPaletteData.importStatement}
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
              <ColorPalette theme="emerald" />
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`<ColorPalette theme="emerald" />`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Theme Selector</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4">
              <div className="flex flex-col gap-2">
                {THEMES.map((theme) => (
                  <ColorPalette
                    key={theme}
                    theme={theme}
                    isSelected={selectedTheme === theme}
                    onClick={() => setSelectedTheme(theme)}
                    className="cursor-pointer"
                  />
                ))}
              </div>
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`import { useState } from "react";
  import { ColorPalette } from "amvasdev-ui";

  function ThemeSelector() {
    const [selectedTheme, setSelectedTheme] = useState("light");

    const themes = ["light", "dark", "cupcake", "emerald", "dracula"];

    return (
      <div className="flex flex-col gap-2">
        {themes.map((theme) => (
          <ColorPalette
            key={theme}
            theme={theme}
            isSelected={selectedTheme === theme}
            onClick={() => setSelectedTheme(theme)}
            className="cursor-pointer"
          />
        ))}
      </div>
    );
  }`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {(colorPaletteData.notes?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Notes</h2>
          <ul className="list-disc list-inside space-y-2 text-base-content/70">
            {colorPaletteData.notes?.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
