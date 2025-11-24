"use client";
import { Button, Modal } from "amvasdev-ui";
import { useState } from "react";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const ActionButtonsExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ExampleBlock
      title="Modal with Action Buttons"
      preview={
        <>
          <Button variant="primary" onClick={() => setIsOpen(true)}>
            Delete Item
          </Button>
          {isOpen && (
            <Modal
              onClose={() => setIsOpen(false)}
              title="Delete Item"
              cancelButton={{
                children: "Cancel",
                variant: "ghost",
              }}
              confirmButton={{
                children: "Delete",
                variant: "error",
                onClick: () => setIsOpen(false),
              }}
              closeOnCancel={true}
              closeOnConfirm={true}
            >
              <p>This action cannot be undone.</p>
            </Modal>
          )}
        </>
      }
      code={`<Modal
  onClose={() => setIsOpen(false)}
  title="Delete Item"
  cancelButton={{
    children: "Cancel",
    variant: "ghost",
  }}
  confirmButton={{
    children: "Delete",
    variant: "error",
    onClick: () => setIsOpen(false),
  }}
  closeOnCancel={true}
  closeOnConfirm={true}
>
  <p>This action cannot be undone.</p>
</Modal>`}
    />
  );
};

export default ActionButtonsExample;
