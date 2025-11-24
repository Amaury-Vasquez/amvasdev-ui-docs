"use client";
import { Button } from "amvasdev-ui";

const ComponentVariantSystem = () => (
  <div className="p-6 bg-base-200 rounded-lg space-y-4">
    <div className="flex flex-wrap gap-2">
      <Button variant="base" id="variant-base-button" aria-label="Base variant button">
        Base
      </Button>
      <Button variant="neutral" id="variant-neutral-button" aria-label="Neutral variant button">
        Neutral
      </Button>
      <Button variant="primary" id="variant-primary-button" aria-label="Primary variant button">
        Primary
      </Button>
      <Button variant="secondary" id="variant-secondary-button" aria-label="Secondary variant button">
        Secondary
      </Button>
      <Button variant="accent" id="variant-accent-button" aria-label="Accent variant button">
        Accent
      </Button>
    </div>
    <div className="flex flex-wrap gap-2">
      <Button variant="info" id="variant-info-button" aria-label="Info variant button">
        Info
      </Button>
      <Button variant="success" id="variant-success-button" aria-label="Success variant button">
        Success
      </Button>
      <Button variant="warning" id="variant-warning-button" aria-label="Warning variant button">
        Warning
      </Button>
      <Button variant="error" id="variant-error-button" aria-label="Error variant button">
        Error
      </Button>
    </div>
    <div className="flex flex-wrap gap-2">
      <Button variant="ghost" id="variant-ghost-button" aria-label="Ghost variant button">
        Ghost
      </Button>
      <Button variant="link" id="variant-link-button" aria-label="Link variant button">
        Link
      </Button>
    </div>
  </div>
);

export default ComponentVariantSystem;
