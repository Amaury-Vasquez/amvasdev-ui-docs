"use client";
import { Button, useEventListener } from "amvasdev-ui";
import { useRef, useState } from "react";

const ElementEventExample = () => {
  const [clickCount, setClickCount] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEventListener(
    "click",
    () => {
      setClickCount((prev) => prev + 1);
    },
    // @ts-expect-error Type mismatch
    buttonRef
  );

  return (
    <div className="p-6 bg-base-200 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Element Event Listener</h3>
      <p className="text-base-content/70 mb-4">
        Click the button to increment the counter:
      </p>
      <Button ref={buttonRef} variant="primary">
        Click Me! (Count: {clickCount})
      </Button>
    </div>
  );
};

export default ElementEventExample;
