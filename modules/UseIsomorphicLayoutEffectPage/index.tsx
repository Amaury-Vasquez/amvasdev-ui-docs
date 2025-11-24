import CodeExamples from "@/components/documentation/CodeExamples";
import ImportSection from "@/components/documentation/ImportSection";
import NotesSection from "@/components/documentation/NotesSection";
import PageHeader from "@/components/documentation/PageHeader";
import ParametersTable from "@/components/documentation/ParametersTable";
import SignatureSection from "@/components/documentation/SignatureSection";
import { HOOKS_DATA } from "@/data/hooks";
import ScrollPositionTracker from "./ScrollPositionTracker";
import WindowWidthTracker from "./WindowWidthTracker";

const hookData = HOOKS_DATA["use-isomorphic-layout-effect"];

const UseIsomorphicLayoutEffectPage = () => (
  <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
    <PageHeader title={hookData.name} description={hookData.description} />

    <ImportSection importStatement={hookData.importStatement} />

    <SignatureSection signature={hookData.signature} />

    <ParametersTable parameters={hookData.parameters} />

    <section>
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Live Demo</h2>
      <div className="space-y-6">
        <WindowWidthTracker />
        <ScrollPositionTracker />
      </div>
    </section>

    <CodeExamples examples={hookData.examples} />

    <NotesSection notes={hookData.notes} />

    <div className="alert alert-info">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="stroke-current shrink-0 w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <span>
        This hook is essential for Next.js and other SSR frameworks. It
        prevents console warnings when using layout effects in server-side
        rendered components.
      </span>
    </div>
  </div>
);

export default UseIsomorphicLayoutEffectPage;
