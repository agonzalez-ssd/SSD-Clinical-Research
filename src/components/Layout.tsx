import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/current-trials", label: "Current Trials" },
    { path: "/for-researchers", label: "For Researchers" },
    { path: "/about-contact", label: "About & Contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 transition-colors duration-200">
        <div className="flex justify-between items-center w-full px-8 max-w-7xl mx-auto h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <span
              className="material-symbols-outlined text-blue-700"
              style={{ fontSize: "2rem" }}
            >
              clinical_notes
            </span>
            <span className="text-xl font-bold tracking-tight text-blue-800 font-headline">
              Southern Skies Clinical Research
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium py-1 transition-colors duration-200 ${
                  isActive(link.path)
                    ? "text-blue-700 border-b-2 border-blue-700 font-bold"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/about-contact"
              className="bg-primary-gradient text-white px-6 py-2.5 rounded-md font-semibold text-sm transition-all active:scale-95"
            >
              Join Study
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-on-surface"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-8 py-3 text-base font-medium ${
                    isActive(link.path)
                      ? "text-blue-700 bg-blue-50 font-bold"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-8 pt-4">
                <Link
                  to="/about-contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center bg-primary-gradient text-white px-6 py-3 rounded-md font-semibold"
                >
                  Join Study
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-slate-100 w-full py-12 px-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-blue-800">
                  clinical_notes
                </span>
                <span className="text-lg font-bold text-blue-900 font-headline">
                  Southern Skies Clinical Research
                </span>
              </div>
              <p className="text-slate-500 max-w-xs text-sm leading-relaxed">
                Dedicated to the highest standards of clinical excellence and
                patient-focused research in the Birmingham area.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-12">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold text-on-surface uppercase tracking-widest">
                  Trials
                </span>
                <Link
                  to="/current-trials"
                  className="text-slate-500 hover:text-blue-600 transition-colors text-sm"
                >
                  Current Trials
                </Link>
                <a
                  href="#"
                  className="text-slate-500 hover:text-blue-600 transition-colors text-sm"
                >
                  Trial History
                </a>
                <a
                  href="#"
                  className="text-slate-500 hover:text-blue-600 transition-colors text-sm"
                >
                  Patient Safety
                </a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold text-on-surface uppercase tracking-widest">
                  Researchers
                </span>
                <Link
                  to="/for-researchers"
                  className="text-slate-500 hover:text-blue-600 transition-colors text-sm"
                >
                  For Researchers
                </Link>
                <a
                  href="#"
                  className="text-slate-500 hover:text-blue-600 transition-colors text-sm"
                >
                  Lab Facilities
                </a>
                <a
                  href="#"
                  className="text-slate-500 hover:text-blue-600 transition-colors text-sm"
                >
                  Grants
                </a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold text-on-surface uppercase tracking-widest">
                  Legal
                </span>
                <a
                  href="#"
                  className="text-slate-500 hover:text-blue-600 transition-colors text-sm underline"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-slate-500 hover:text-blue-600 transition-colors text-sm"
                >
                  Compliance
                </a>
                <a
                  href="#"
                  className="text-slate-500 hover:text-blue-600 transition-colors text-sm"
                >
                  Terms
                </a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold text-on-surface uppercase tracking-widest">
                  Support
                </span>
                <Link
                  to="/about-contact"
                  className="text-slate-500 hover:text-blue-600 transition-colors text-sm"
                >
                  Contact
                </Link>
                <a
                  href="#"
                  className="text-slate-500 hover:text-blue-600 transition-colors text-sm"
                >
                  FAQ
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs">
              &copy; 2025 Southern Skies Clinical Research. All rights reserved.
              HIPAA Compliant.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-slate-500 hover:text-blue-600 transition-colors"
              >
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
              <a
                href="mailto:info@southernskiesresearch.com"
                className="text-slate-500 hover:text-blue-600 transition-colors"
              >
                <span className="material-symbols-outlined text-xl">mail</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
