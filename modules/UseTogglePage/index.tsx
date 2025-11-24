import CodeExamples from "@/components/documentation/CodeExamples";
import ImportSection from "@/components/documentation/ImportSection";
import NotesSection from "@/components/documentation/NotesSection";
import PageHeader from "@/components/documentation/PageHeader";
import ParametersTable from "@/components/documentation/ParametersTable";
import ReturnsSection from "@/components/documentation/ReturnsSection";
import SignatureSection from "@/components/documentation/SignatureSection";
import { HOOKS_DATA } from "@/data/hooks";
import DarkModeToggleExample from "./DarkModeToggleExample";
import EnableDisableToggleExample from "./EnableDisableToggleExample";
import VisibilityToggleExample from "./VisibilityToggleExample";

const hookData = HOOKS_DATA["use-toggle"];

const UseTogglePage = () => (
  <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
    <PageHeader title={hookData.name} description={hookData.description} />

    <ImportSection importStatement={hookData.importStatement} />

    <SignatureSection signature={hookData.signature} />

    <ParametersTable parameters={hookData.parameters} />

    <ReturnsSection returns={hookData.returns} />

    <section>
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Live Demo</h2>
      <div className="space-y-6">
        <VisibilityToggleExample />
        <EnableDisableToggleExample />
        <DarkModeToggleExample />
      </div>
    </section>

    <CodeExamples examples={hookData.examples} />

    <NotesSection notes={hookData.notes} />
  </div>
);

export default UseTogglePage;
