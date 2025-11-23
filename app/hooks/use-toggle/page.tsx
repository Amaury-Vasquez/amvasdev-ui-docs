"use client";
import { useToggle, Button } from "amvasdev-ui";
import { HOOKS_DATA } from "@/data/hooks";

const hookData = HOOKS_DATA["use-toggle"];

export default function UseTogglePage() {
  const [isVisible, toggleVisibility] = useToggle(false);
  const [isEnabled, toggleEnabled] = useToggle(true);
  const [isDarkMode, toggleDarkMode] = useToggle(false);

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
        <div className="space-y-6">
          <div className="p-6 bg-base-200 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Visibility Toggle</h3>
            <Button variant="primary" onClick={toggleVisibility}>
              {isVisible ? "Hide" : "Show"} Content
            </Button>
            {isVisible && (
              <div className="mt-4 p-4 bg-base-300 rounded">
                <p>This content is now visible!</p>
              </div>
            )}
          </div>

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

          <div className="p-6 bg-base-200 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Dark Mode Toggle</h3>
            <Button variant="accent" onClick={toggleDarkMode}>
              {isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </Button>
            <div
              className={`mt-4 p-4 rounded transition-colors ${
                isDarkMode
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-gray-900"
              }`}
            >
              <p>Current theme: {isDarkMode ? "Dark" : "Light"}</p>
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
    </div>
  );
}
