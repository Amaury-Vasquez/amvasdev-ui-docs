"use client";
import { useState } from "react";
import { Button, Modal } from "amvasdev-ui";
import { COMPONENTS_DATA } from "@/data/components";

const modalData = COMPONENTS_DATA.modal;

export default function ModalPage() {
  const [isBasicOpen, setIsBasicOpen] = useState(false);
  const [isActionOpen, setIsActionOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">{modalData.name}</h1>
        <p className="text-lg text-base-content/80">{modalData.description}</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Import</h2>
        <div className="mockup-code">
          <pre>
            <code>
              {modalData.importStatement}
            </code>
          </pre>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Basic Modal</h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4">
              <Button variant="primary" onClick={() => setIsBasicOpen(true)}>
                Open Modal
              </Button>
              {isBasicOpen && (
                <Modal
                  onClose={() => setIsBasicOpen(false)}
                  title="Confirmation"
                  closeOnClickOutside={true}
                  closeOnEsc={true}
                  showCloseButton={true}
                  confirmButton={{
                    children: "Confirm",
                    variant: "primary",
                    onClick: () => setIsBasicOpen(false),
                  }}
                  closeOnConfirm={true}
                >
                  <p>Are you sure you want to continue?</p>
                </Modal>
              )}
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`import { useState } from "react";
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
                </code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Modal with Action Buttons
            </h3>
            <div className="p-6 bg-base-200 rounded-lg mb-4">
              <Button variant="primary" onClick={() => setIsActionOpen(true)}>
                Delete Item
              </Button>
              {isActionOpen && (
                <Modal
                  onClose={() => setIsActionOpen(false)}
                  title="Delete Item"
                  cancelButton={{
                    children: "Cancel",
                    variant: "ghost",
                  }}
                  confirmButton={{
                    children: "Delete",
                    variant: "error",
                    onClick: () => setIsActionOpen(false),
                  }}
                  closeOnCancel={true}
                  closeOnConfirm={true}
                >
                  <p>This action cannot be undone.</p>
                </Modal>
              )}
            </div>
            <div className="mockup-code">
              <pre>
                <code>
                  {`<Modal
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
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {(modalData.notes?.length ?? 0) > 0 ? (
        <div>
          <h2 className="text-2xl font-semibold mb-3">Notes</h2>
          <ul className="list-disc list-inside space-y-2 text-base-content/70">
            {modalData.notes?.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
