interface Returns {
  type: string;
  description: string;
}

interface ReturnsSectionProps {
  returns?: Returns;
}

const ReturnsSection = ({ returns }: ReturnsSectionProps) =>
  returns ? (
    <section>
      <h2 className="text-xl md:text-2xl font-semibold mb-3">Returns</h2>
      <div className="p-4 bg-base-200 rounded-lg">
        <p className="font-mono text-sm mb-2">{returns.type}</p>
        <p className="text-base-content/70">{returns.description}</p>
      </div>
    </section>
  ) : null;

export default ReturnsSection;
