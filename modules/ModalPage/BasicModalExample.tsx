"use client";
import { Button, Modal } from "amvasdev-ui";
import { useState } from "react";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const BasicModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ExampleBlock
      title="Basic Modal"
      preview={
        <>
          <Button variant="primary" onClick={() => setIsOpen(true)}>
            Open Modal
          </Button>
          {isOpen && (
            <Modal
              onClose={() => setIsOpen(false)}
              title="Confirmation"
              closeOnClickOutside={true}
              closeOnEsc={true}
              showCloseButton={true}
              confirmButton={{
                children: "Confirm",
                variant: "primary",
                onClick: () => setIsOpen(false),
              }}
              closeOnConfirm={true}
            >
              <p>Are you sure you want to continue?</p>
            </Modal>
          )}
        </>
      }
      code={`import { useState } from "react";
  import { Button, Modal } from "amvasdev-ui";

  function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Open Modal
        </Button>

        {isOpen && (
          <Modal
            onClose={() => setIsOpen(false)}
            title="Confirmation"
            closeOnClickOutside={true}
            closeOnEsc={true}
            showCloseButton={true}
            confirmButton={{
              children: "Confirm",
              variant: "primary",
              onClick: () => setIsOpen(false),
            }}
            closeOnConfirm={true}
          >
            <p>Are you sure you want to continue?</p>
          </Modal>
        )}
      </>
    );
  }`}
    />
  );
};

export default BasicModalExample;
