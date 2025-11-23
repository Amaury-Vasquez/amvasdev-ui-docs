"use client";
import { useState } from "react";
import { ActionModal, Button } from "amvasdev-ui";
import { COMPONENTS_DATA } from "@/data/components";

const actionModalData = COMPONENTS_DATA["action-modal"];

export default function ActionModalPage() {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isWarningOpen, setIsWarningOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">{actionModalData.name}</h1>
        <p className="text-lg text-base-content/80">
          {actionModalData.description}
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <div className="mockup-code">
          <pre>
            <code>
              {actionModalData.importStatement}
            </code>
          </pre>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Success Modal</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4">
              <Button variant="primary" onClick={() => setIsSuccessOpen(true)}>
                Show Success Modal
              </Button>
              {isSuccessOpen && (
                <ActionModal
                  type="success"
                  title="Success!"
                  description="Your action was completed successfully."
                  onConfirm={() => setIsSuccessOpen(false)}
                  closeModal={() => setIsSuccessOpen(false)}
                  showClose={true}
                />
              )}
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`import { useState } from "react";
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
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Warning Modal</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4">
              <Button variant="primary" onClick={() => setIsWarningOpen(true)}>
                Show Warning Modal
              </Button>
              {isWarningOpen && (
                <ActionModal
                  type="warning"
                  title="Are you sure?"
                  description="This action cannot be undone."
                  onConfirm={() => setIsWarningOpen(false)}
                  confirmButtonText="Delete"
                  cancelButtonText="Cancel"
                  showCancelButton={true}
                  onCancel={() => setIsWarningOpen(false)}
                  closeModal={() => setIsWarningOpen(false)}
                />
              )}
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`<ActionModal
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
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Error Modal with Loading
            </h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4">
              <Button variant="primary" onClick={() => setIsErrorOpen(true)}>
                Show Error Modal
              </Button>
              {isErrorOpen && (
                <ActionModal
                  type="error"
                  title="Error occurred"
                  description="Failed to complete the operation."
                  onConfirm={() => setIsErrorOpen(false)}
                  confirmButtonText="Retry"
                  showCancelButton={true}
                  closeModal={() => setIsErrorOpen(false)}
                />
              )}
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`<ActionModal
    type="error"
    title="Error occurred"
    description="Failed to complete the operation."
    onConfirm={handleRetry}
    isPending={isLoading}
    confirmButtonText="Retry"
    showCancelButton={true}
    closeModal={() => setIsOpen(false)}
  />`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {(actionModalData.notes?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Notes</h2>
          <ul className="list-disc list-inside space-y-2 text-base-content/70">
            {actionModalData.notes?.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
