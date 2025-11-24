interface AvailableOptionsProps {
  title: string;
  options?: string[];
}

const AvailableOptions = ({ title, options }: AvailableOptionsProps) =>
  (options?.length ?? 0) > 0 ? (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold mb-3">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {options?.map((option) => (
          <code
            key={option}
            className="px-3 py-1 bg-base-300 rounded-md text-sm font-mono"
          >
            {option}
          </code>
        ))}
      </div>
    </div>
  ) : null;

export default AvailableOptions;
