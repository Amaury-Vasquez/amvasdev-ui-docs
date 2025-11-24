"use client";
import { useEventListener } from "amvasdev-ui";
import { useState } from "react";

const WindowEventExample = () => {
  const [keyPressed, setKeyPressed] = useState("");

  useEventListener("keydown", (event) => {
    const e = event as KeyboardEvent;
    setKeyPressed(e.key);
  });

  return (
    <div className="p-6 bg-base-200 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Window Event Listener</h3>
      <p className="text-base-content/70 mb-4">
        Press any key to see it detected:
      </p>
      <div className="p-4 bg-base-300 rounded">
        <p className="font-mono">
          Last key pressed:{" "}
          <span className="text-primary font-bold">
            {keyPressed || "None"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default WindowEventExample;
