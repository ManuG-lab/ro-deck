import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function ChartCard({ data }) {
  return (
    <div className="p-6 border border-orange-500 rounded-2xl bg-black shadow-lg shadow-orange-500/20">
      <h2 className="text-xl font-bold text-orange-500 mb-4">Fraud Trends</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="#ffffff" />
          <YAxis stroke="#ffffff" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#000000",
              border: "1px solid #f97316",
              color: "#ffffff",
            }}
          />
          <Line
            type="monotone"
            dataKey="fraudCases"
            stroke="#f97316"
            strokeWidth={2}
            dot={{ fill: "#f97316" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
