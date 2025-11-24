import CodeExamples from "@/components/documentation/CodeExamples";
import ImportSection from "@/components/documentation/ImportSection";
import NotesSection from "@/components/documentation/NotesSection";
import PageHeader from "@/components/documentation/PageHeader";
import { UTILITIES_DATA } from "@/data/utilities";
import AllLoadingTypes from "./AllLoadingTypes";
import InteractiveDemo from "./InteractiveDemo";

const utilityData = UTILITIES_DATA.loading;

const LoadingUtilitiesPage = () => (
  <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
    <PageHeader title={utilityData.name} description={utilityData.description} />

    <ImportSection importStatement={utilityData.importStatement} />

    <section>
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Functions</h2>
      <div className="space-y-6">
        {utilityData.functions.map((func) => (
          <div key={func.name} className="p-6 bg-base-200 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 font-mono">
              {func.name}
            </h3>
            <p className="text-base-content/70 mb-3">{func.description}</p>
            <div className="mockup-code mb-3">
              <pre>
                <code>{func.signature}</code>
              </pre>
            </div>
            {(func.parameters?.length ?? 0) > 0 ? (
              <div className="mb-3">
                <p className="font-semibold mb-2">Parameters:</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-base-content/70">
                  {func.parameters?.map((param) => (
                    <li key={param.name}>
                      <code className="font-mono">{param.name}</code>
                      {param.required ? " (required)" : " (optional)"} -{" "}
                      {param.description}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <p className="text-sm">
              <span className="font-semibold">Returns:</span> {func.returns}
            </p>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="text-xl md:text-2xl font-semibold mb-4">
        Interactive Demo
      </h2>
      <InteractiveDemo />
    </section>

    <section>
      <h2 className="text-xl md:text-2xl font-semibold mb-4">
        All Loading Types
      </h2>
      <AllLoadingTypes />
    </section>

    <CodeExamples examples={utilityData.examples} />

    <NotesSection notes={utilityData.notes} />
  </div>
);

export default LoadingUtilitiesPage;
