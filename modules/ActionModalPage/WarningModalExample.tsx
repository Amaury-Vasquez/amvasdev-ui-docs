"use client";
import { ActionModal, Button } from "amvasdev-ui";
import { useState } from "react";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const WarningModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ExampleBlock
      title="Warning Modal"
      preview={
        <>
          <Button variant="primary" onClick={() => setIsOpen(true)}>
            Show Warning Modal
          </Button>
          {isOpen && (
            <ActionModal
              type="warning"
              title="Are you sure?"
              description="This action cannot be undone."
              onConfirm={() => setIsOpen(false)}
              confirmButtonText="Delete"
              cancelButtonText="Cancel"
              showCancelButton={true}
              onCancel={() => setIsOpen(false)}
              closeModal={() => setIsOpen(false)}
            />
          )}
        </>
      }
      code={`<ActionModal
  type="warning"
  title="Are you sure?"
  description="This action cannot be undone."
  onConfirm={handleDelete}
  confirmButtonText="Delete"
  cancelButtonText="Cancel"
  showCancelButton={true}
  onCancel={() => setIsOpen(false)}
  closeModal={() => setIsOpen(false)}
/>`}
    />
  );
};

export default WarningModalExample;
