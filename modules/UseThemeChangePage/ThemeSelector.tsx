"use client";
import { ColorPalette, useThemeChange } from "amvasdev-ui";
import { useState } from "react";

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

const ThemeSelector = () => {
  const { changeTheme } = useThemeChange();
  const [currentTheme, setCurrentTheme] = useState("light");

  const handleThemeChange = (theme: string) => {
    changeTheme(theme);
    setCurrentTheme(theme);
  };

  return (
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
  );
};

export default ThemeSelector;
