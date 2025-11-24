"use client";
import { Button, useOnClickOutside } from "amvasdev-ui";
import { useRef, useState } from "react";

const DropdownDemo = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef, () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
      setClickCount((prev) => prev + 1);
    }
  });

  return (
    <div className="p-6 bg-base-200 rounded-lg">
      <div className="relative inline-block" ref={dropdownRef}>
        <Button
          variant="primary"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {isDropdownOpen ? "Close" : "Open"} Dropdown
        </Button>
        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 bg-base-100 shadow-lg rounded-lg p-4 min-w-[200px] z-10">
            <p className="font-semibold mb-2">Dropdown Content</p>
            <p className="text-sm text-base-content/70 mb-3">
              Click outside to close this dropdown
            </p>
            <ul className="menu">
              <li>
                <a>Option 1</a>
              </li>
              <li>
                <a>Option 2</a>
              </li>
              <li>
                <a>Option 3</a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <p className="text-sm text-base-content/70 mt-4">
        Times closed by clicking outside: {clickCount}
      </p>
    </div>
  );
};

export default DropdownDemo;
