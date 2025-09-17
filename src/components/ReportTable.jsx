export default function ReportTable({ reports }) {
  return (
    <div className="overflow-x-auto border border-orange-500 rounded-2xl bg-black shadow-lg shadow-orange-500/20">
      <table className="w-full text-left">
        <thead className="bg-orange-500 text-black">
          <tr>
            <th className="p-4">Address</th>
            <th className="p-4">Risk Score</th>
            <th className="p-4">Status</th>
            <th className="p-4">Checked On</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((r, i) => (
            <tr
              key={i}
              className="border-b border-orange-500/30 hover:bg-orange-500/10 transition"
            >
              <td className="p-4 font-mono">{r.address}</td>
              <td className="p-4">{r.risk}%</td>
              <td
                className={`p-4 font-semibold ${
                  r.risk > 70
                    ? "text-red-500"
                    : r.risk > 40
                    ? "text-yellow-400"
                    : "text-green-400"
                }`}
              >
                {r.risk > 70 ? "High Risk" : r.risk > 40 ? "Suspicious" : "Safe"}
              </td>
              <td className="p-4 text-gray-400">{r.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
