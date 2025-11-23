"use client";
import { PasswordInput } from "amvasdev-ui";
import { COMPONENTS_DATA } from "@/data/components";

const passwordInputData = COMPONENTS_DATA["password-input"];

export default function PasswordInputPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">{passwordInputData.name}</h1>
        <p className="text-lg text-base-content/80">
          {passwordInputData.description}
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <div className="mockup-code">
          <pre>
            <code>
              {passwordInputData.importStatement}
            </code>
          </pre>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Basic Usage</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4">
              <PasswordInput
                id="password"
                label="Password"
                placeholder="Enter your password"
              />
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`<PasswordInput
    id="password"
    label="Password"
    placeholder="Enter your password"
  />`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {(passwordInputData.notes?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Notes</h2>
          <ul className="list-disc list-inside space-y-2 text-base-content/70">
            {passwordInputData.notes?.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
