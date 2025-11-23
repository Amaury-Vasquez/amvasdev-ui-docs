"use client";
import { Breadcrumbs } from "amvasdev-ui";
import Link from "next/link";
import { COMPONENTS_DATA } from "@/data/components";

const breadcrumbsData = COMPONENTS_DATA.breadcrumbs;

export default function BreadcrumbsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">{breadcrumbsData.name}</h1>
        <p className="text-lg text-base-content/80">
          {breadcrumbsData.description}
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <div className="mockup-code">
          <pre>
            <code>{breadcrumbsData.importStatement}</code>
          </pre>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Basic Usage</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4">
              <Breadcrumbs
                id="nav-breadcrumbs"
                options={[
                  <Link key="home" href="/">
                    Home
                  </Link>,
                  <Link key="components" href="/components">
                    Components
                  </Link>,
                  <span key="current">Breadcrumbs</span>,
                ]}
              />
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`<Breadcrumbs
    id="nav-breadcrumbs"
    options={[
      <Link href="/">Home</Link>,
      <Link href="/components">Components</Link>,
      <span>Breadcrumbs</span>,
    ]}
  />`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {(breadcrumbsData.notes?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Notes</h2>
          <ul className="list-disc list-inside space-y-2 text-base-content/70">
            {breadcrumbsData.notes?.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
