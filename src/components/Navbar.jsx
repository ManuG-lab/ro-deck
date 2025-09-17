import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-black border-b border-orange-500 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-orange-500 tracking-wide">
          Ro-<span className="text-white">Deck</span>
        </Link>
        <nav className="space-x-6 text-sm uppercase font-semibold">
          <Link to="/check" className="hover:text-orange-500 transition">Check</Link>
          <Link to="/reports" className="hover:text-orange-500 transition">Reports</Link>
          <Link to="/alerts" className="hover:text-orange-500 transition">Alerts</Link>
          <Link to="/about" className="hover:text-orange-500 transition">About</Link>
        </nav>
      </div>
    </header>
  );
}
