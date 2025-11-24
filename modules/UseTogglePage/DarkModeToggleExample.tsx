"use client";
import { Button, useToggle } from "amvasdev-ui";

const DarkModeToggleExample = () => {
  const [isDarkMode, toggleDarkMode] = useToggle(false);

  return (
    <div className="p-6 bg-base-200 rounded-lg">
      <h3 className="text-lg font-semibold mb-3">Dark Mode Toggle</h3>
      <Button
        variant="accent"
        onClick={toggleDarkMode}
        id="dark-mode-toggle-button"
        aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
      >
        {isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </Button>
      <div
        className={`mt-4 p-4 rounded transition-colors ${
          isDarkMode
            ? "bg-gray-800 text-white"
            : "bg-gray-100 text-gray-900"
        }`}
      >
        <p>Current theme: {isDarkMode ? "Dark" : "Light"}</p>
      </div>
    </div>
  );
};

export default DarkModeToggleExample;
