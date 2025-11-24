"use client";
import { ColorPalette } from "amvasdev-ui";

const EXAMPLE_THEMES = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
];

interface ThemeListProps {
  theme: string;
  handleThemeChange: (theme: string) => void;
}

const ThemeList = ({ theme, handleThemeChange }: ThemeListProps) => (
  <div className="flex flex-col gap-2">
    <span className="menu-title text-xs">Theme</span>
    <ul className="flex flex-col gap-2 min-w-56 max-w-full">
      {EXAMPLE_THEMES.map((currentTheme) => (
        <li key={currentTheme}>
          <button
            className="flex"
            onClick={() => handleThemeChange(currentTheme)}
            id={`theme-${currentTheme}-button`}
            aria-label={`Select ${currentTheme} theme`}
          >
            <ColorPalette
              theme={currentTheme}
              isSelected={theme === currentTheme}
              className="w-full"
              labelClassName="w-full"
            />
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default ThemeList;
