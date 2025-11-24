import CodeExamples from "@/components/documentation/CodeExamples";
import ImportSection from "@/components/documentation/ImportSection";
import NotesSection from "@/components/documentation/NotesSection";
import PageHeader from "@/components/documentation/PageHeader";
import ParametersTable from "@/components/documentation/ParametersTable";
import ReturnsSection from "@/components/documentation/ReturnsSection";
import SignatureSection from "@/components/documentation/SignatureSection";
import { HOOKS_DATA } from "@/data/hooks";
import LiveDemoSection from "./LiveDemoSection";

const hookData = HOOKS_DATA["use-closable-container"];

const UseClosableContainerPage = () => (
  <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
    <PageHeader title={hookData.name} description={hookData.description} />

    <ImportSection importStatement={hookData.importStatement} />

    <SignatureSection signature={hookData.signature} />

    <ParametersTable parameters={hookData.parameters} />

    <ReturnsSection returns={hookData.returns} />

    <LiveDemoSection />

    <CodeExamples examples={hookData.examples} />

    <section>
      <h2 className="text-xl md:text-2xl font-semibold mb-3">Options</h2>
      <NotesSection notes={hookData.notes} />
    </section>
  </div>
);

export default UseClosableContainerPage;
