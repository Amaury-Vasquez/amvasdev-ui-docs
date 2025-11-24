interface ImportSectionProps {
  importStatement: string;
}

const ImportSection = ({ importStatement }: ImportSectionProps) => (
  <div>
    <h2 className="text-xl md:text-2xl font-semibold mb-3">Import</h2>
    <div className="mockup-code">
      <pre>
        <code>{importStatement}</code>
      </pre>
    </div>
  </div>
);

export default ImportSection;
