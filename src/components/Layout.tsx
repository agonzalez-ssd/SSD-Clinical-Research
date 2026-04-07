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
    { path: "/for-patients", label: "For Patients" },
    { path: "/for-sponsors", label: "For Sponsors" },
    { path: "/therapeutic-areas", label: "Therapeutic Areas" },
    { path: "/our-team", label: "Our Team" },
    { path: "/about-contact", label: "About & Contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <a href="#main-content" className="skip-to-main">Skip to main content</a>

      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/15 shadow-sm" role="banner">
        <nav className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <Link to="/" className="text-xl font-bold tracking-tight text-slate-900 font-headline">
            Southern Skies Clinical Research
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? "text-blue-700 font-semibold border-b-2 border-blue-700 pb-1"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/research-registry"
              className="hidden sm:inline-flex bg-primary-gradient text-on-primary px-6 py-2.5 rounded-md font-semibold text-sm hover:opacity-90 transition-all active:scale-95"
            >
              Join Registry
            </Link>
            <button
              className="lg:hidden p-2 text-slate-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-6 py-3 text-base font-medium ${
                    isActive(link.path) ? "text-blue-700 bg-blue-50 font-bold" : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-6 pt-4">
                <Link
                  to="/research-registry"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center bg-primary-gradient text-white px-6 py-3 rounded-md font-semibold"
                >
                  Join Registry
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main id="main-content" className="flex-1 pt-20" role="main">{children}</main>

      <footer className="w-full border-t border-slate-200 bg-slate-100" role="contentinfo">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 py-12 max-w-7xl mx-auto">
          <div>
            <div className="text-lg font-semibold text-slate-800 font-headline mb-4">Southern Skies Clinical Research</div>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              The clinical research division of Southern Skies Dermatology &amp; Surgery. Advancing dermatological science through precision research and established patient care.
            </p>
            <div className="flex gap-4">
              <a href="mailto:research@southernskiesresearch.com" className="text-slate-400 hover:text-primary transition-colors">
                <span className="material-symbols-outlined">mail</span>
              </a>
              <a href="tel:2059002000" className="text-slate-400 hover:text-primary transition-colors">
                <span className="material-symbols-outlined">call</span>
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-slate-900 font-bold text-xs mb-6 uppercase tracking-widest">For Patients</h5>
            <ul className="space-y-3">
              <li><Link to="/research-registry" className="text-slate-500 hover:text-blue-600 transition-colors text-sm">Research Registry</Link></li>
              <li><Link to="/for-patients" className="text-slate-500 hover:text-blue-600 transition-colors text-sm">Why Participate</Link></li>
              <li><Link to="/therapeutic-areas" className="text-slate-500 hover:text-blue-600 transition-colors text-sm">Conditions We Study</Link></li>
              <li><Link to="/about-contact" className="text-slate-500 hover:text-blue-600 transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-slate-900 font-bold text-xs mb-6 uppercase tracking-widest">For Sponsors</h5>
            <ul className="space-y-3">
              <li><Link to="/for-sponsors" className="text-slate-500 hover:text-blue-600 transition-colors text-sm">Capabilities</Link></li>
              <li><Link to="/our-team" className="text-slate-500 hover:text-blue-600 transition-colors text-sm">Our Investigators</Link></li>
              <li><Link to="/about-contact" className="text-slate-500 hover:text-blue-600 transition-colors text-sm">Request Feasibility</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-slate-900 font-bold text-xs mb-6 uppercase tracking-widest">Legal</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors text-sm">HIPAA Statement</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 transition-colors text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 py-6 text-center">
          <p className="text-slate-500 text-xs">&copy; 2025 Southern Skies Clinical Research. A division of Southern Skies Dermatology &amp; Surgery. All rights reserved. HIPAA Compliant.</p>
        </div>
      </footer>
    </div>
  );
}
