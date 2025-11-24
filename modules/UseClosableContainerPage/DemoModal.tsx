"use client";
import { Button, useClosableContainer } from "amvasdev-ui";
import { useRef } from "react";

interface DemoModalProps {
  onClose: () => void;
}

const DemoModal = ({ onClose }: DemoModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isClosing, handleClose } = useClosableContainer(ref, onClose, {
    closeTimeout: 300,
    closeOnEsc: true,
    closeOnClickOutside: true,
  });

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div
        ref={ref}
        className={`bg-base-100 p-6 rounded-lg shadow-xl max-w-md w-full ${
          isClosing ? "animate-fade-out" : "animate-fade-in"
        }`}
      >
        <h3 className="text-xl font-semibold mb-3">Demo Modal</h3>
        <p className="mb-4 text-base-content/80">
          This modal will close when you:
        </p>
        <ul className="list-disc list-inside mb-4 text-base-content/70">
          <li>Press the Escape key</li>
          <li>Click outside the modal</li>
          <li>Click the close button</li>
        </ul>
        <Button variant="primary" onClick={handleClose}>
          Close Modal
        </Button>
      </div>
    </div>
  );
};

export default DemoModal;
