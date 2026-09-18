interface TableProps {
  columns: string[];
  data: Record<string, unknown>[];
  striped?: boolean;
}

export default function Table({
  columns,
  data,
  striped = false,
}: TableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full text-left">
        <thead className="bg-slate-900 text-white">
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                className="px-4 py-3 font-semibold"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={
                striped && rowIndex % 2 === 1
                  ? "bg-slate-50"
                  : "bg-white"
              }
            >
              {columns.map((column) => (
                <td
                  key={column}
                  className="border-t border-slate-200 px-4 py-3 text-slate-700"
                >
                  {String(row[column] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}