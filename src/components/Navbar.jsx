import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-dark border-b border-primary sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-primary tracking-wide">
          Fraud<span className="text-light">Shield</span>
        </Link>
        <nav className="space-x-6 text-sm uppercase font-semibold">
          <Link to="/check" className="hover:text-primary transition">Check</Link>
          <Link to="/reports" className="hover:text-primary transition">Reports</Link>
          <Link to="/alerts" className="hover:text-primary transition">Alerts</Link>
          <Link to="/about" className="hover:text-primary transition">About</Link>
        </nav>
      </div>
    </header>
  );
}
