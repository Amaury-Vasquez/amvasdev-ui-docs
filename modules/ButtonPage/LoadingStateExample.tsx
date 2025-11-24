"use client";
import { Button } from "amvasdev-ui";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const LoadingStateExample = () => (
  <ExampleBlock
    title="Loading State"
    preview={
      <>
        <Button isLoading>Loading...</Button>
        <Button
          isLoading
          loadingStyles={{ type: "dots", size: "sm" }}
          disabledOnLoading={false}
        >
          Custom Loading
        </Button>
      </>
    }
    previewClassName="p-6 bg-base-200 rounded-lg mb-4 flex flex-wrap gap-3"
    code={`<Button isLoading>Loading...</Button>

  <Button
    isLoading
    loadingStyles={{ type: "dots", size: "sm" }}
    disabledOnLoading={false}
  >
    Custom Loading
  </Button>`}
  />
);

export default LoadingStateExample;
