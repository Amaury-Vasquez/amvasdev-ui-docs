import Link from "next/link";
import { UTILITIES_DATA } from "@/data/utilities";

export default function UtilitiesPage() {
  const utilities = Object.entries(UTILITIES_DATA).map(([key, data]) => ({
    slug: key,
    name: data.name,
    description: data.description,
    functionCount: data.functions.length,
  }));

  return (
    <div className="space-y-8 p-4 md:p-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Utilities</h1>
        <p className="text-lg text-base-content/80">
          Utility functions for generating class names and styling components.
          These utilities provide programmatic access to the styling system,
          allowing you to build custom components with consistent design.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {utilities.map((utility) => (
          <Link
            key={utility.slug}
            href={`/utilities/${utility.slug}`}
            className="p-6 bg-base-200 rounded-lg hover:bg-base-300 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">{utility.name}</h2>
            <p className="text-base-content/70 mb-3">{utility.description}</p>
            <p className="text-sm text-base-content/60">
              {utility.functionCount} function{utility.functionCount !== 1 ? "s" : ""}
            </p>
          </Link>
        ))}
      </div>

      <div className="p-6 bg-base-200 rounded-lg">
        <h2 className="text-2xl font-semibold mb-3">Why Use Utilities?</h2>
        <ul className="list-disc list-inside space-y-2 text-base-content/70">
          <li>
            Build custom components with consistent styling from the design
            system
          </li>
          <li>
            Programmatically generate class names based on props or state
          </li>
          <li>Reduce duplication when creating wrapper components</li>
          <li>
            Maintain consistency when styling third-party components or native
            elements
          </li>
          <li>
            Get TypeScript autocompletion for available variants and sizes
          </li>
        </ul>
      </div>
    </div>
  );
}
