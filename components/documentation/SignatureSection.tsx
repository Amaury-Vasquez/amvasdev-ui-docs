interface SignatureSectionProps {
  signature?: string;
}

const SignatureSection = ({ signature }: SignatureSectionProps) =>
  signature ? (
    <section>
      <h2 className="text-xl md:text-2xl font-semibold mb-3">Signature</h2>
      <div className="mockup-code">
        <pre>
          <code>{signature}</code>
        </pre>
      </div>
    </section>
  ) : null;

export default SignatureSection;
