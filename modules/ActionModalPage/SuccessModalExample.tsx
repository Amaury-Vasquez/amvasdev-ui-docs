"use client";
import { ActionModal, Button } from "amvasdev-ui";
import { useState } from "react";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const SuccessModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ExampleBlock
      title="Success Modal"
      preview={
        <>
          <Button variant="primary" onClick={() => setIsOpen(true)}>
            Show Success Modal
          </Button>
          {isOpen && (
            <ActionModal
              type="success"
              title="Success!"
              description="Your action was completed successfully."
              onConfirm={() => setIsOpen(false)}
              closeModal={() => setIsOpen(false)}
              showClose={true}
            />
          )}
        </>
      }
      code={`import { useState } from "react";
  import { ActionModal, Button } from "amvasdev-ui";

  function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Show Success Modal
        </Button>

        {isOpen && (
          <ActionModal
            type="success"
            title="Success!"
            description="Your action was completed successfully."
            onConfirm={() => setIsOpen(false)}
            closeModal={() => setIsOpen(false)}
            showClose={true}
          />
        )}
      </>
    );
  }`}
    />
  );
};

export default SuccessModalExample;
