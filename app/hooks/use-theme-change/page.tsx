"use client";
import { useState } from "react";
import { useThemeChange, ColorPalette } from "amvasdev-ui";
import { HOOKS_DATA } from "@/data/hooks";

const hookData = HOOKS_DATA["use-theme-change"];

const AVAILABLE_THEMES = [
  "light",
  "dark",
  "cupcake",
  "emerald",
  "dracula",
  "winter",
  "night",
  "halloween",
  "autumn",
  "business",
  "nord",
  "dim",
  "lemonade",
  "sunset",
  "valentine",
];

export default function UseThemeChangePage() {
  const { changeTheme } = useThemeChange();
  const [currentTheme, setCurrentTheme] = useState("light");

  const handleThemeChange = (theme: string) => {
    changeTheme(theme);
    setCurrentTheme(theme);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">{hookData.name}</h1>
        <p className="text-lg text-base-content/80">{hookData.description}</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <div className="mockup-code">
          <pre>
            <code>{hookData.importStatement}</code>
          </pre>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Signature</h2>
        <div className="mockup-code">
          <pre>
            <code>{hookData.signature}</code>
          </pre>
        </div>
      </div>

      {hookData.returns ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Returns</h2>
          <div className="p-4 bg-base-200 rounded-lg">
            <p className="font-mono text-sm mb-2">{hookData.returns.type}</p>
            <p className="text-base-content/70">{hookData.returns.description}</p>
          </div>
        </div>
      ) : null}

      <div>
        <h2 className="text-2xl font-semibold mb-4">Live Demo</h2>
        <div className="p-6 bg-base-200 rounded-lg space-y-4">
          <p className="text-base-content/80 font-semibold">
            Current Theme: {currentTheme}
          </p>
          <div className="space-y-2">
            {AVAILABLE_THEMES.map((theme) => (
              <ColorPalette
                key={theme}
                theme={theme}
                isSelected={currentTheme === theme}
                onClick={() => handleThemeChange(theme)}
                className="cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>
        <div className="space-y-8">
          {hookData.examples.map((example, index) => (
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

      {(hookData.notes?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Notes</h2>
          <ul className="list-disc list-inside space-y-2 text-base-content/70">
            {hookData.notes?.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
