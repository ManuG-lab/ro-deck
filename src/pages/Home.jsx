import { Shield } from "lucide-react";

export default function Home() {
  return (
    <div
      className="relative -m-6 flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center bg-cover bg-center text-center bg-blend-multiply"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg')",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="relative z-10 p-6">
        <Shield size={64} className="mx-auto mb-6 text-orange-500 h-12 w-12 sm:h-16 sm:w-16" />
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          Ethereum Fraud <span className="text-orange-500">Detection</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-xl mb-8">
          Protecting traders and investors with AI-driven fraud detection, blockchain forensics,
          and real-time monitoring.
        </p>
        <a
          href="/check"
          className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-orange-600 transition"
        >
          Start Checking
        </a>
      </div>
    </div>
  );
}
