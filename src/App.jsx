import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AddressCheck from "./pages/AddressCheck";
import Reports from "./pages/Reports";
import Alerts from "./pages/Alerts";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen font-sans flex flex-col">
        <Navbar />
        <main className="p-6 max-w-7xl mx-auto flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/check" element={<AddressCheck />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
