"use client";
import { ColorPalette, useThemeChange } from "amvasdev-ui";
import { useState } from "react";

const AVAILABLE_THEMES = [
  { name: "light", description: "Clean and bright theme" },
  { name: "dark", description: "Dark mode for low-light environments" },
  { name: "cupcake", description: "Soft pastel colors" },
  { name: "emerald", description: "Professional green theme" },
  { name: "dracula", description: "Dark theme with vibrant colors" },
  { name: "winter", description: "Cool blue-tinted theme" },
  { name: "night", description: "Deep dark theme" },
  { name: "halloween", description: "Orange and purple spooky theme" },
  { name: "autumn", description: "Warm earthy tones" },
  { name: "business", description: "Professional corporate theme" },
  { name: "nord", description: "Arctic inspired color palette" },
  { name: "dim", description: "Dimmed dark theme" },
  { name: "lemonade", description: "Fresh yellow theme" },
  { name: "sunset", description: "Warm sunset colors" },
  { name: "valentine", description: "Pink romantic theme" },
];

const QuickThemeSwitcher = () => {
  const { changeTheme } = useThemeChange();
  const [currentTheme, setCurrentTheme] = useState("light");

  const handleThemeChange = (theme: string) => {
    changeTheme(theme);
    setCurrentTheme(theme);
  };

  return (
    <div className="p-6 bg-base-200 rounded-lg space-y-2">
      <p className="font-semibold mb-3">Current Theme: {currentTheme}</p>
      {AVAILABLE_THEMES.map((theme) => (
        <ColorPalette
          key={theme.name}
          theme={theme.name}
          isSelected={currentTheme === theme.name}
          onClick={() => handleThemeChange(theme.name)}
          className="cursor-pointer"
        />
      ))}
    </div>
  );
};

export default QuickThemeSwitcher;
