"use client";
import { useEventListener, Button } from "amvasdev-ui";
import { useState, useRef } from "react";
import { HOOKS_DATA } from "@/data/hooks";

const hookData = HOOKS_DATA["use-event-listener"];

export default function UseEventListenerPage() {
  const [keyPressed, setKeyPressed] = useState("");
  const [clickCount, setClickCount] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEventListener("keydown", (event) => {
    const e = event as KeyboardEvent;
    setKeyPressed(e.key);
  });

  useEventListener(
    "click",
    () => {
      setClickCount((prev) => prev + 1);
    },
    // @ts-expect-error Type mismatch
    buttonRef
  );

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

      <div>
        <h2 className="text-2xl font-semibold mb-4">Live Demo</h2>
        <div className="space-y-6">
          <div className="p-6 bg-base-200 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              Window Event Listener
            </h3>
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

          <div className="p-6 bg-base-200 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              Element Event Listener
            </h3>
            <p className="text-base-content/70 mb-4">
              Click the button to increment the counter:
            </p>
            <Button ref={buttonRef} variant="primary">
              Click Me! (Count: {clickCount})
            </Button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>
        <div className="space-y-8">
          {hookData.examples.map((example, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-3">{example.title}</h3>
              {example.description ? (
                <p className="text-base-content/70 mb-3">
                  {example.description}
                </p>
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
          <h2 className="text-2xl font-semibold mb-3">Notes</h2>
          <ul className="list-disc list-inside space-y-2 text-base-content/70">
            {hookData.notes?.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
