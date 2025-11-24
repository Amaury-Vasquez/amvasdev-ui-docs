"use client";
import { Button } from "amvasdev-ui";
import { useState } from "react";
import DemoModal from "./DemoModal";

const LiveDemoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Live Demo</h2>
        <div className="p-6 bg-base-200 rounded-lg">
          <Button
            variant="primary"
            onClick={() => setIsModalOpen(true)}
            id="closable-container-open-button"
            aria-label="Open demo modal"
          >
            Open Demo Modal
          </Button>
          <p className="text-sm text-base-content/70 mt-2">
            Try pressing Escape or clicking outside to close
          </p>
        </div>
      </section>

      {isModalOpen && <DemoModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default LiveDemoSection;
