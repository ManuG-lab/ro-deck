import { AlertTriangle } from "lucide-react";

export default function AlertCard({ alert }) {
  return (
    <div className="p-6 mb-4 border border-orange-500 rounded-xl bg-black shadow-lg shadow-orange-500/20">
      <div className="flex items-center space-x-4">
        <AlertTriangle className="text-orange-500" size={32} />
        <div>
          <p className="font-semibold">{alert.message}</p>
          <p className="text-sm text-gray-400">{alert.timestamp}</p>
        </div>
      </div>
    </div>
  );
}
