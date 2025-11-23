"use client";
import { useState, useRef } from "react";
import { Button, useClosableContainer } from "amvasdev-ui";
import { HOOKS_DATA } from "@/data/hooks";

const hookData = HOOKS_DATA["use-closable-container"];

function DemoModal({ onClose }: { onClose: () => void }) {
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
}

export default function UseClosableContainerPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">{hookData.name}</h1>
        <p className="text-lg text-base-content/80">{hookData.description}</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <div className="mockup-code">
          <pre>
            <code>{hookData.importStatement}</code>
          </pre>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Signature</h2>
        <div className="mockup-code">
          <pre>
            <code>{hookData.signature}</code>
          </pre>
        </div>
      </div>

      {(hookData.parameters?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Parameters</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Required</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {hookData.parameters?.map((param) => (
                  <tr key={param.name}>
                    <td className="font-mono">{param.name}</td>
                    <td className="font-mono text-sm">{param.type}</td>
                    <td>{param.required ? "Yes" : "No"}</td>
                    <td>{param.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}

      {hookData.returns ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Returns</h2>
          <div className="p-4 bg-base-200 rounded-lg">
            <p className="font-mono text-sm mb-2">{hookData.returns.type}</p>
            <p className="text-base-content/70">{hookData.returns.description}</p>
          </div>
        </div>
      ) : null}

      <div>
        <h2 className="text-2xl font-semibold mb-4">Live Demo</h2>
        <div className="p-6 bg-base-200 rounded-lg">
          <Button variant="primary" onClick={() => setIsModalOpen(true)}>
            Open Demo Modal
          </Button>
          <p className="text-sm text-base-content/70 mt-2">
            Try pressing Escape or clicking outside to close
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>
        <div className="space-y-8">
          {hookData.examples.map((example, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-3">{example.title}</h3>
              {example.description ? (
                <p className="text-base-content/70 mb-3">{example.description}</p>
              ) : null}
              <div className="mockup-code">
                <pre>
                  <code>{example.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>

      {(hookData.notes?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Options</h2>
          <ul className="list-disc list-inside space-y-2 text-base-content/70">
            {hookData.notes?.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {isModalOpen && <DemoModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
