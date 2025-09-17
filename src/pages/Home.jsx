import { Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <Shield size={64} className="text-primary mb-6" />
      <h1 className="text-5xl font-bold mb-4">
        Ethereum Fraud <span className="text-primary">Detection</span>
      </h1>
      <p className="text-lg text-gray-300 max-w-xl mb-8">
        Protecting traders and investors with AI-driven fraud detection, blockchain forensics,
        and real-time monitoring.
      </p>
      <a
        href="/check"
        className="bg-primary text-black px-8 py-3 rounded-full font-bold shadow-lg hover:bg-orange-600 transition"
      >
        Start Checking
      </a>
    </div>
  );
}
