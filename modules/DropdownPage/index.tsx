import ImportSection from "@/components/documentation/ImportSection";
import NotesSection from "@/components/documentation/NotesSection";
import PageHeader from "@/components/documentation/PageHeader";
import { COMPONENTS_DATA } from "@/data/components";
import BasicUsageExample from "./BasicUsageExample";
import UnstyledTriggerExample from "./UnstyledTriggerExample";

const componentData = COMPONENTS_DATA.dropdown;

const DropdownPage = () => (
  <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
    <PageHeader
      title={componentData.name}
      description={componentData.description}
    />

    <ImportSection importStatement={componentData.importStatement} />

    <section>
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Examples</h2>
      <div className="space-y-8">
        <BasicUsageExample />
        <UnstyledTriggerExample />
      </div>
    </section>

    <NotesSection notes={componentData.notes} />
  </div>
);

export default DropdownPage;
