interface Parameter {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

interface ParametersTableProps {
  parameters?: Parameter[];
}

const ParametersTable = ({ parameters }: ParametersTableProps) =>
  (parameters?.length ?? 0) > 0 ? (
    <section>
      <h2 className="text-xl md:text-2xl font-semibold mb-3">Parameters</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {parameters?.map((param) => (
              <tr key={param.name}>
                <td className="font-mono">{param.name}</td>
                <td className="font-mono text-sm">{param.type}</td>
                <td>{param.required ? "Yes" : "No"}</td>
                <td>{param.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  ) : null;

export default ParametersTable;
