"use client";
import { HamburgerMenu } from "amvasdev-ui";
import { Palette } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import ThemeList from "../ThemeList";

const ThemeMenu = () => {
  const { theme, handleThemeChange } = useTheme();

  return (
    <HamburgerMenu
      icon={Palette}
      menuClassName="max-h-80 overflow-y-auto"
      position="right"
    >
      <ThemeList theme={theme} handleThemeChange={handleThemeChange} />
    </HamburgerMenu>
  );
};

export default ThemeMenu;
