import AvailableOptions from "@/components/documentation/AvailableOptions";
import ImportSection from "@/components/documentation/ImportSection";
import NotesSection from "@/components/documentation/NotesSection";
import PageHeader from "@/components/documentation/PageHeader";
import { COMPONENTS_DATA } from "@/data/components";
import BasicUsageExample from "./BasicUsageExample";
import ErrorMessageExample from "./ErrorMessageExample";
import RequiredFieldExample from "./RequiredFieldExample";
import VariantsAndSizesExample from "./VariantsAndSizesExample";

const componentData = COMPONENTS_DATA.checkbox;

const CheckboxPage = () => (
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
        <RequiredFieldExample />
        <VariantsAndSizesExample />
        <ErrorMessageExample />
      </div>
    </section>

    <AvailableOptions
      title="Available Variants"
      options={componentData.variants}
    />

    <AvailableOptions title="Available Sizes" options={componentData.sizes} />

    <NotesSection notes={componentData.notes} />
  </div>
);

export default CheckboxPage;
