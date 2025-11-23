import Link from "next/link";
import { COMPONENTS_DATA } from "@/data/components";

export default function ComponentsPage() {
  const components = Object.entries(COMPONENTS_DATA).map(([key, data]) => ({
    slug: key,
    name: data.name,
    description: data.description,
    category: data.category,
  }));

  const categories = Array.from(new Set(components.map((c) => c.category)));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Components</h1>
        <p className="text-lg text-base-content/80">
          Explore all available components in the amvasdev-ui library.
        </p>
      </div>

      {categories.map((category) => (
        <div key={category}>
          <h2 className="text-2xl font-semibold mb-4">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {components
              .filter((c) => c.category === category)
              .map((component) => (
                <Link
                  key={component.slug}
                  href={`/components/${component.slug}`}
                  className="block p-6 bg-base-200 rounded-lg hover:bg-base-300 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {component.name}
                  </h3>
                  <p className="text-sm text-base-content/70">
                    {component.description}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
