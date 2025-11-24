"use client";
import { useIsomorphicLayoutEffect } from "amvasdev-ui";
import { useState } from "react";

const WindowWidthTracker = () => {
  const [width, setWidth] = useState(0);

  useIsomorphicLayoutEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="p-6 bg-base-200 rounded-lg">
      <h3 className="text-lg font-semibold mb-3">Window Width Tracker</h3>
      <p className="text-base-content/70 mb-2">
        Resize your browser window to see the width update:
      </p>
      <div className="p-4 bg-base-300 rounded">
        <p className="text-2xl font-mono">
          Width: <span className="text-primary font-bold">{width}px</span>
        </p>
      </div>
    </div>
  );
};

export default WindowWidthTracker;
