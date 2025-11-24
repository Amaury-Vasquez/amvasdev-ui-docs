import CodeExamples from "@/components/documentation/CodeExamples";
import ImportSection from "@/components/documentation/ImportSection";
import NotesSection from "@/components/documentation/NotesSection";
import PageHeader from "@/components/documentation/PageHeader";
import { UTILITIES_DATA } from "@/data/utilities";
import LiveDemo from "./LiveDemo";

const utilityData = UTILITIES_DATA["icon-button"];

const IconButtonUtilitiesPage = () => (
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
            <p className="text-sm">
              <span className="font-semibold">Returns:</span> {func.returns}
            </p>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Live Demo</h2>
      <LiveDemo />
    </section>

    <CodeExamples examples={utilityData.examples} />

    <NotesSection notes={utilityData.notes} />
  </div>
);

export default IconButtonUtilitiesPage;
