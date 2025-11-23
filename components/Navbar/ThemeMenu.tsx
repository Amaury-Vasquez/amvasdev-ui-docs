"use client";
import { ColorPalette, HamburgerMenu } from "amvasdev-ui";
import { Palette } from "lucide-react";
import { useCallback, useEffect, useState, useTransition } from "react";
import { getThemeCookie } from "@/app/actions/theme";

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

const ThemeMenu = () => {
  const [_isPending, startTransition] = useTransition();
  const [theme, setTheme] = useState<string>();

  const handleThemeChange = useCallback((theme?: string) => {
    if (theme) {
      document.cookie = `theme=${theme}; path=/; max-age=31536000`;
      document.querySelector("html")?.setAttribute("data-theme", theme);
      setTheme(theme);
    }
  }, []);

  useEffect(() => {
    startTransition(async () => {
      const themeCookie = await getThemeCookie();
      console.log({ themeCookie });
      handleThemeChange(themeCookie);
    });
  }, [handleThemeChange]);

  return (
    <HamburgerMenu
      icon={Palette}
      menuClassName="max-h-80 overflow-y-auto"
      position="right"
    >
      <div className="flex flex-col gap-2">
        <span className="menu-title text-xs">Theme</span>
        <ul className="flex flex-col gap-2 min-w-56 max-w-full">
          {EXAMPLE_THEMES.map((currentTheme) => (
            <li key={currentTheme}>
              <button
                className="flex"
                onClick={() => handleThemeChange(currentTheme)}
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
    </HamburgerMenu>
  );
};

export default ThemeMenu;
