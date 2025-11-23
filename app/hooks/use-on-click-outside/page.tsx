"use client";
import { useState, useRef } from "react";
import { useOnClickOutside, Button } from "amvasdev-ui";
import { HOOKS_DATA } from "@/data/hooks";

const hookData = HOOKS_DATA["use-on-click-outside"];

export default function UseOnClickOutsidePage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef, () => {
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
      setClickCount((prev) => prev + 1);
    }
  });

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
        <div className="p-6 bg-base-200 rounded-lg">
          <div className="relative inline-block" ref={dropdownRef}>
            <Button
              variant="primary"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {isDropdownOpen ? "Close" : "Open"} Dropdown
            </Button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-base-100 shadow-lg rounded-lg p-4 min-w-[200px] z-10">
                <p className="font-semibold mb-2">Dropdown Content</p>
                <p className="text-sm text-base-content/70 mb-3">
                  Click outside to close this dropdown
                </p>
                <ul className="menu">
                  <li>
                    <a>Option 1</a>
                  </li>
                  <li>
                    <a>Option 2</a>
                  </li>
                  <li>
                    <a>Option 3</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <p className="text-sm text-base-content/70 mt-4">
            Times closed by clicking outside: {clickCount}
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
