import { ReactNode } from "react";

interface ExampleBlockProps {
  title: string;
  preview: ReactNode;
  code: string;
  previewClassName?: string;
}

const ExampleBlock = ({
  title,
  preview,
  code,
  previewClassName = "p-6 bg-base-200 rounded-lg mb-4",
}: ExampleBlockProps) => (
  <div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <div className={previewClassName}>{preview}</div>
    <div className="mockup-code">
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  </div>
);

export default ExampleBlock;
