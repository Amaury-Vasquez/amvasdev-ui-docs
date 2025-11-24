"use client";
import { Button, useToggle } from "amvasdev-ui";

const EnableDisableToggleExample = () => {
  const [isEnabled, toggleEnabled] = useToggle(true);

  return (
    <div className="p-6 bg-base-200 rounded-lg">
      <h3 className="text-lg font-semibold mb-3">Enable/Disable Toggle</h3>
      <div className="flex gap-2 items-center">
        <Button variant="neutral" onClick={toggleEnabled}>
          {isEnabled ? "Disable" : "Enable"} Feature
        </Button>
        <Button variant="primary" disabled={!isEnabled}>
          Submit
        </Button>
      </div>
      <p className="text-sm text-base-content/70 mt-2">
        Status: {isEnabled ? "Enabled" : "Disabled"}
      </p>
    </div>
  );
};

export default EnableDisableToggleExample;
