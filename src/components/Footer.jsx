import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-orange-500 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-orange-500 tracking-wide">
              Ro-<span className="text-white">Deck</span>
            </h2>
            <p className="text-gray-400 mt-4 text-sm">
              AI-powered fraud detection for the Ethereum ecosystem.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-orange-500 transition">Home</Link>
              <Link to="/check" className="block text-gray-400 hover:text-orange-500 transition">Check</Link>
              <Link to="/reports" className="block text-gray-400 hover:text-orange-500 transition">Reports</Link>
              <Link to="/alerts" className="block text-gray-400 hover:text-orange-500 transition">Alerts</Link>
              <Link to="/about" className="block text-gray-400 hover:text-orange-500 transition">About</Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <p className="text-gray-400">roy.karoki22@students.dkut.ac.ke</p>
            <p className="text-gray-400">odektimothy@gmail.com</p>
          </div>
        </div>
        <div className="mt-8 border-t border-orange-500/30 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Ro-Deck. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
