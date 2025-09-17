import { useState } from "react";
import RiskScoreCard from "../components/RiskScoreCard";

export default function AddressCheck() {
  const [address, setAddress] = useState("");
  const [result, setResult] = useState(null);

  const handleCheck = async () => {
    // Mock risk score for demo purposes
    const randomRisk = Math.floor(Math.random() * 100);
    setResult({ riskScore: randomRisk });
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">Check Ethereum Address</h1>
      <div className="flex space-x-4">
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter Ethereum address..."
          className="bg-dark border border-primary px-4 py-2 rounded-lg w-full focus:ring-2 focus:ring-primary"
        />
        <button
          onClick={handleCheck}
          className="bg-primary text-black px-6 py-2 rounded-lg font-bold hover:bg-orange-600 transition"
        >
          Analyze
        </button>
      </div>
      {result && <RiskScoreCard result={result} />}
    </div>
  );
}
