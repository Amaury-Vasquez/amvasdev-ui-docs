"use client";
import { Button } from "amvasdev-ui";

const ComponentVariantSystem = () => (
  <div className="p-6 bg-base-200 rounded-lg space-y-4">
    <div className="flex flex-wrap gap-2">
      <Button variant="base">Base</Button>
      <Button variant="neutral">Neutral</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
    </div>
    <div className="flex flex-wrap gap-2">
      <Button variant="info">Info</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="error">Error</Button>
    </div>
    <div className="flex flex-wrap gap-2">
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  </div>
);

export default ComponentVariantSystem;
