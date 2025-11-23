"use client";
import { IconButton } from "amvasdev-ui";
import { Edit, Settings, Trash } from "lucide-react";
import { COMPONENTS_DATA } from "@/data/components";

const iconButtonData = COMPONENTS_DATA["icon-button"];

export default function IconButtonPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">{iconButtonData.name}</h1>
        <p className="text-lg text-base-content/80">
          {iconButtonData.description}
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <div className="mockup-code">
          <pre>
            <code>
              {iconButtonData.importStatement}
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
              <IconButton icon={<Settings size={20} />} />
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`import { Settings } from "lucide-react";
  import { IconButton } from "amvasdev-ui";

  <IconButton icon={<Settings size={20} />} />`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">With Tooltip</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4 flex gap-4">
              <IconButton icon={<Edit size={18} />} tooltip="Edit item" />
              <IconButton
                icon={<Trash size={18} />}
                tooltip={{ content: "Delete", position: "left" }}
              />
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`import { Edit, Trash } from "lucide-react";
  import { IconButton } from "amvasdev-ui";

  <IconButton icon={<Edit size={18} />} tooltip="Edit item" />

  <IconButton
    icon={<Trash size={18} />}
    tooltip={{ content: "Delete", position: "left" }}
  />`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              With Custom Tooltip Content
            </h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4">
              <IconButton
                icon={<Trash size={18} />}
                tooltip={{
                  content: (
                    <div className="flex flex-col">
                      <span className="font-bold">Delete</span>
                      <span className="text-xs">Cannot be undone</span>
                    </div>
                  ),
                  position: "down",
                }}
              />
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`<IconButton
    icon={<Trash size={18} />}
    tooltip={{
      content: (
        <div className="flex flex-col">
          <span className="font-bold">Delete</span>
          <span className="text-xs">Cannot be undone</span>
        </div>
      ),
      position: "down",
    }}
  />`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {(iconButtonData.notes?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Notes</h2>
          <ul className="list-disc list-inside space-y-2 text-base-content/70">
            {iconButtonData.notes?.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
