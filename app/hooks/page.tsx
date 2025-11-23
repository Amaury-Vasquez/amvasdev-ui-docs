import Link from "next/link";
import { HOOKS_DATA } from "@/data/hooks";

export default function HooksPage() {
  const hooks = Object.entries(HOOKS_DATA).map(([key, data]) => ({
    slug: key,
    name: data.name,
    description: data.description,
  }));

  return (
    <div className="space-y-8 p-4 md:p-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Hooks</h1>
        <p className="text-lg text-base-content/80">
          Custom React hooks provided by amvasdev-ui for common UI patterns and
          utilities. These hooks help manage state, handle events, and provide
          functionality with minimal code.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {hooks.map((hook) => (
          <Link
            key={hook.slug}
            href={`/hooks/${hook.slug}`}
            className="p-6 bg-base-200 rounded-lg hover:bg-base-300 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">{hook.name}</h2>
            <p className="text-base-content/70">{hook.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
