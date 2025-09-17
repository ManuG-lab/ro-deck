export default function About() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">About Us</h1>
      <p className="text-gray-300 max-w-3xl">
        The Ethereum Fraud Detection System protects traders and investors using AI-driven fraud detection,
        blockchain forensics, and real-time monitoring.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-6 border border-primary rounded-xl bg-dark shadow-lg shadow-primary/20">
          <h2 className="text-xl font-semibold text-light">Roy James Karoki</h2>
          <p className="text-primary">Geomatics & GIS</p>
          <p className="text-gray-400">roy.karoki22@students.dkut.ac.ke</p>
        </div>
        <div className="p-6 border border-primary rounded-xl bg-dark shadow-lg shadow-primary/20">
          <h2 className="text-xl font-semibold text-light">Timothy Odek</h2>
          <p className="text-primary">Telecommunication Engineering</p>
          <p className="text-gray-400">odektimothy@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
