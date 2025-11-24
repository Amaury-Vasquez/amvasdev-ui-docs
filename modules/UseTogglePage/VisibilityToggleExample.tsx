"use client";
import { Button, useToggle } from "amvasdev-ui";

const VisibilityToggleExample = () => {
  const [isVisible, toggleVisibility] = useToggle(false);

  return (
    <div className="p-6 bg-base-200 rounded-lg">
      <h3 className="text-lg font-semibold mb-3">Visibility Toggle</h3>
      <Button
        variant="primary"
        onClick={toggleVisibility}
        id="visibility-toggle-button"
        aria-label={`${isVisible ? "Hide" : "Show"} content`}
      >
        {isVisible ? "Hide" : "Show"} Content
      </Button>
      {isVisible && (
        <div className="mt-4 p-4 bg-base-300 rounded">
          <p>This content is now visible!</p>
        </div>
      )}
    </div>
  );
};

export default VisibilityToggleExample;
