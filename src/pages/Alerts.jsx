import AlertCard from "../components/AlertCard";

export default function Alerts() {
  const alerts = [
    { message: "Suspicious transaction: 0xabc123...", timestamp: "2025-09-16 10:45" },
    { message: "High-risk wallet flagged: 0xdef456...", timestamp: "2025-09-16 09:20" },
    { message: "Unusual activity on 0xghi789...", timestamp: "2025-09-15 21:05" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-primary">Alerts</h1>
      {alerts.map((a, i) => (
        <AlertCard key={i} alert={a} />
      ))}
    </div>
  );
}
