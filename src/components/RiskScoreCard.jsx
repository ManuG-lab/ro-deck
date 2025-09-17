export default function RiskScoreCard({ result }) {
  if (!result) return null;

  const risk = result.riskScore || 0;
  const status =
    risk > 70 ? "High Fraud Risk" : risk > 40 ? "Suspicious" : "Safe";

  return (
    <div className="p-6 border border-orange-500 rounded-2xl bg-black shadow-lg shadow-orange-500/20">
      <h2 className="text-xl font-bold text-orange-500 mb-4">Risk Assessment</h2>
      <p className="text-lg">
        Risk Score: <span className="font-bold">{risk}%</span>
      </p>
      <p
        className={`mt-2 font-semibold ${
          risk > 70 ? "text-red-500" : risk > 40 ? "text-yellow-400" : "text-green-400"
        }`}
      >
        {status}
      </p>
    </div>
  );
}
