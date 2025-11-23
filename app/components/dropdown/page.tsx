"use client";
import { Dropdown } from "amvasdev-ui";
import { COMPONENTS_DATA } from "@/data/components";

const dropdownData = COMPONENTS_DATA.dropdown;

export default function DropdownPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">{dropdownData.name}</h1>
        <p className="text-lg text-base-content/80">
          {dropdownData.description}
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <div className="mockup-code">
          <pre>
            <code>
              {dropdownData.importStatement}
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
              <Dropdown triggerElement={<span>Menu</span>}>
                <li>
                  <a>Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </Dropdown>
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`<Dropdown triggerElement={<span>Menu</span>}>
    <li>
      <a>Profile</a>
    </li>
    <li>
      <a>Settings</a>
    </li>
    <li>
      <a>Logout</a>
    </li>
  </Dropdown>`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">With Unstyled Trigger</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4">
              <Dropdown
                triggerElement={<span>Custom Trigger</span>}
                unstyledTrigger={true}
                position="right"
              >
                <li>
                  <a>Option 1</a>
                </li>
                <li>
                  <a>Option 2</a>
                </li>
              </Dropdown>
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`<Dropdown
    triggerElement={<span>Custom Trigger</span>}
    unstyledTrigger={true}
    position="right"
  >
    <li>
      <a>Option 1</a>
    </li>
    <li>
      <a>Option 2</a>
    </li>
  </Dropdown>`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {(dropdownData.notes?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Notes</h2>
          <ul className="list-disc list-inside space-y-2 text-base-content/70">
            {dropdownData.notes?.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
