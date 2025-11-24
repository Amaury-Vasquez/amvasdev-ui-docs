"use client";
import { ColorPalette } from "amvasdev-ui";
import { useState } from "react";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const THEMES = ["light", "dark", "cupcake", "emerald", "dracula"];

const ThemeSelectorExample = () => {
  const [selectedTheme, setSelectedTheme] = useState("light");

  return (
    <ExampleBlock
      title="Theme Selector"
      preview={
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
      }
      code={`import { useState } from "react";
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
    />
  );
};

export default ThemeSelectorExample;
