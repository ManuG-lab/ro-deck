import { useState } from "react";
import { Search } from "lucide-react";
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
    <div className="max-w-4xl mx-auto p-8 rounded-2xl shadow-lg shadow-orange-500/20 bg-black border border-orange-500/30">
      <div className="text-center mb-8">
        <Search size={48} className="mx-auto text-orange-500 mb-4" />
        <h1 className="text-4xl font-bold text-white">Check Ethereum Address</h1>
        <p className="text-gray-400 mt-2">
          Enter an Ethereum address below to analyze its risk profile.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter Ethereum address, e.g., 0x..."
          className="flex-grow w-full bg-black border-2 border-orange-500/50 px-4 py-3 rounded-full text-white placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:outline-none transition"
        />
        <button
          onClick={handleCheck}
          disabled={!address}
          className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-orange-600 transition disabled:bg-gray-600 disabled:cursor-not-allowed w-full sm:w-auto"
        >
          Analyze Address
        </button>
      </div>

      {result && (
        <div className="mt-12">
          <RiskScoreCard result={result} />
        </div>
      )}
    </div>
  );
}
