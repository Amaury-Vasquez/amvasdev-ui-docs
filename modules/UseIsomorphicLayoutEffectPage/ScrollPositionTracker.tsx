"use client";
import { useIsomorphicLayoutEffect } from "amvasdev-ui";
import { useState } from "react";

const ScrollPositionTracker = () => {
  const [scrollY, setScrollY] = useState(0);

  useIsomorphicLayoutEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="p-6 bg-base-200 rounded-lg">
      <h3 className="text-lg font-semibold mb-3">Scroll Position Tracker</h3>
      <p className="text-base-content/70 mb-2">
        Scroll the page to see the position update:
      </p>
      <div className="p-4 bg-base-300 rounded">
        <p className="text-2xl font-mono">
          Scroll Y: <span className="text-primary font-bold">{scrollY}px</span>
        </p>
      </div>
    </div>
  );
};

export default ScrollPositionTracker;
