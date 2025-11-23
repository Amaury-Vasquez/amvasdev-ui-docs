"use client";
import { useState } from "react";
import { useIsomorphicLayoutEffect } from "amvasdev-ui";
import { HOOKS_DATA } from "@/data/hooks";

const hookData = HOOKS_DATA["use-isomorphic-layout-effect"];

export default function UseIsomorphicLayoutEffectPage() {
  const [width, setWidth] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useIsomorphicLayoutEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useIsomorphicLayoutEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <h3 className="text-lg font-semibold mb-3">Window Width Tracker</h3>
            <p className="text-base-content/70 mb-2">
              Resize your browser window to see the width update:
            </p>
            <div className="p-4 bg-base-300 rounded">
              <p className="text-2xl font-mono">
                Width: <span className="text-primary font-bold">{width}px</span>
              </p>
            </div>
          </div>

          <div className="p-6 bg-base-200 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Scroll Position Tracker</h3>
            <p className="text-base-content/70 mb-2">
              Scroll the page to see the position update:
            </p>
            <div className="p-4 bg-base-300 rounded">
              <p className="text-2xl font-mono">
                Scroll Y:{" "}
                <span className="text-primary font-bold">{scrollY}px</span>
              </p>
            </div>
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

      <div className="alert alert-info">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-current shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>
          This hook is essential for Next.js and other SSR frameworks. It
          prevents console warnings when using layout effects in server-side
          rendered components.
        </span>
      </div>
    </div>
  );
}
