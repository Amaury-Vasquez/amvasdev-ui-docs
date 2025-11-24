interface Example {
  title: string;
  description?: string;
  code: string;
}

interface CodeExamplesProps {
  examples: Example[];
}

const CodeExamples = ({ examples }: CodeExamplesProps) => (
  <section>
    <h2 className="text-xl md:text-2xl font-semibold mb-4">Examples</h2>
    <div className="space-y-8">
      {examples.map((example, index) => (
        <div key={index}>
          <h3 className="text-xl font-semibold mb-3">{example.title}</h3>
          {example.description ? (
            <p className="text-base-content/70 mb-3">{example.description}</p>
          ) : null}
          <div className="mockup-code">
            <pre>
              <code>{example.code}</code>
            </pre>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CodeExamples;
