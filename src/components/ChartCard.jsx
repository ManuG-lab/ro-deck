import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function ChartCard({ data }) {
  return (
    <div className="p-6 border border-primary rounded-2xl bg-dark shadow-lg shadow-primary/20">
      <h2 className="text-xl font-bold text-primary mb-4">Fraud Trends</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="#ffffff" />
          <YAxis stroke="#ffffff" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#0d0d0d",
              border: "1px solid #ff6600",
              color: "#ffffff",
            }}
          />
          <Line
            type="monotone"
            dataKey="fraudCases"
            stroke="#ff6600"
            strokeWidth={2}
            dot={{ fill: "#ff6600" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
