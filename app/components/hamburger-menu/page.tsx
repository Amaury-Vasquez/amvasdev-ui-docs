"use client";
import { HamburgerMenu } from "amvasdev-ui";
import { Menu } from "lucide-react";
import { COMPONENTS_DATA } from "@/data/components";

const hamburgerMenuData = COMPONENTS_DATA["hamburger-menu"];

export default function HamburgerMenuPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">{hamburgerMenuData.name}</h1>
        <p className="text-lg text-base-content/80">
          {hamburgerMenuData.description}
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <div className="mockup-code">
          <pre>
            <code>
              {hamburgerMenuData.importStatement}
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
              <HamburgerMenu icon={Menu}>
                <li>
                  <a>Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </HamburgerMenu>
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`import { Menu } from "lucide-react";
  import { HamburgerMenu } from "amvasdev-ui";

  <HamburgerMenu icon={Menu}>
    <li><a>Profile</a></li>
    <li><a>Settings</a></li>
    <li><a>Logout</a></li>
  </HamburgerMenu>`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">With Custom Position</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4">
              <HamburgerMenu icon={Menu} position="right">
                <li>
                  <a>Option 1</a>
                </li>
                <li>
                  <a>Option 2</a>
                </li>
              </HamburgerMenu>
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`<HamburgerMenu icon={Menu} position="right">
    <li><a>Option 1</a></li>
    <li><a>Option 2</a></li>
  </HamburgerMenu>`}
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Custom Icon Size and Styling
            </h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4">
              <HamburgerMenu
                icon={Menu}
                iconSize={24}
                iconButtonClassName="text-primary"
                menuClassName="min-w-48"
              >
                <li>
                  <a>Dashboard</a>
                </li>
                <li>
                  <a>Analytics</a>
                </li>
                <li>
                  <a>Reports</a>
                </li>
              </HamburgerMenu>
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`<HamburgerMenu
    icon={Menu}
    iconSize={24}
    iconButtonClassName="text-primary"
    menuClassName="min-w-48"
  >
    <li><a>Dashboard</a></li>
    <li><a>Analytics</a></li>
    <li><a>Reports</a></li>
  </HamburgerMenu>`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {(hamburgerMenuData.notes?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Notes</h2>
          <ul className="list-disc list-inside space-y-2 text-base-content/70">
            {hamburgerMenuData.notes?.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
