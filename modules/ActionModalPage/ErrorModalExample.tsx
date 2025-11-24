"use client";
import { ActionModal, Button } from "amvasdev-ui";
import { useState } from "react";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const ErrorModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ExampleBlock
      title="Error Modal with Loading"
      preview={
        <>
          <Button
            variant="primary"
            onClick={() => setIsOpen(true)}
            id="error-modal-open-button"
            aria-label="Open error modal"
          >
            Show Error Modal
          </Button>
          {isOpen && (
            <ActionModal
              type="error"
              title="Error occurred"
              description="Failed to complete the operation."
              onConfirm={() => setIsOpen(false)}
              confirmButtonText="Retry"
              showCancelButton={true}
              closeModal={() => setIsOpen(false)}
            />
          )}
        </>
      }
      code={`<ActionModal
  type="error"
  title="Error occurred"
  description="Failed to complete the operation."
  onConfirm={handleRetry}
  isPending={isLoading}
  confirmButtonText="Retry"
  showCancelButton={true}
  closeModal={() => setIsOpen(false)}
/>`}
    />
  );
};

export default ErrorModalExample;
