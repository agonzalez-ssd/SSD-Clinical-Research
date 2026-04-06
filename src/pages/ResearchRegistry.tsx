import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const conditions = [
  "Atopic Dermatitis (Eczema)", "Psoriasis", "Alopecia Areata", "Vitiligo",
  "Hidradenitis Suppurativa", "Acne Vulgaris", "Rosacea", "Prurigo Nodularis", "Other",
];

export default function ResearchRegistry() {
  return (
    <Layout>
      <SEO
        title="Research Registry — Be First to Access New Treatments"
        description="Join the Southern Skies Research patient registry. Get matched with upcoming dermatology clinical trials. HIPAA-secure, no obligation, early access to novel therapies."
        canonical="/research-registry"
      />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-6 leading-[1.1] font-headline">
            Be the First to Access Tomorrow's Treatments.
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed mb-8">
            Our clinical trial program is launching soon. Join our HIPAA-secure registry to be matched with upcoming studies based on your skin condition. There is no obligation to participate.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#registry-form" className="bg-primary text-on-primary px-10 py-4 rounded-lg font-bold text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all">
              Join the Registry
            </a>
            <Link to="/for-patients" className="bg-surface-container-high text-on-surface px-10 py-4 rounded-lg font-bold text-lg hover:bg-surface-container-highest transition-all">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Registry Form Section */}
      <section id="registry-form" className="max-w-7xl mx-auto px-6 mb-20">
        <div className="bg-primary-container rounded-3xl p-8 md:p-12 text-on-primary-container relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-headline">Secure Your Spot in Future Research</h2>
              <p className="text-lg opacity-90 mb-8">By joining our registry, you contribute to the future of dermatological science. Our team will review your profile and contact you as soon as a study matching your needs becomes available.</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>100% HIPAA-compliant data handling</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>Early access to novel therapies</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>No obligation to participate in any study</span>
                </li>
              </ul>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold text-on-surface mb-6 font-headline">Quick Registry Sign-up</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-on-surface-variant mb-1">Full Name</label>
                  <input className="w-full rounded-lg border border-outline-variant/30 focus:ring-primary focus:border-primary py-3 px-4" placeholder="Enter your name" type="text" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-on-surface-variant mb-1">Email Address</label>
                  <input className="w-full rounded-lg border border-outline-variant/30 focus:ring-primary focus:border-primary py-3 px-4" placeholder="name@example.com" type="email" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-on-surface-variant mb-1">Phone Number</label>
                  <input className="w-full rounded-lg border border-outline-variant/30 focus:ring-primary focus:border-primary py-3 px-4" placeholder="(205) 000-0000" type="tel" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-on-surface-variant mb-1">Primary Skin Condition</label>
                  <select className="w-full rounded-lg border border-outline-variant/30 focus:ring-primary focus:border-primary py-3 px-4">
                    <option value="">Select a condition</option>
                    {conditions.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <button className="w-full bg-primary text-on-primary py-4 rounded-lg font-bold mt-4 hover:opacity-90 transition-opacity" type="submit">
                  Submit to Registry
                </button>
              </form>
            </div>
          </div>
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Why Join */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-on-surface mb-4 font-headline">Why Join a Registry?</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Understanding the benefits of becoming part of our clinical research community.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-outline-variant/30 hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-secondary-container">science</span>
            </div>
            <h3 className="text-xl font-bold mb-4 font-headline">Advance Science</h3>
            <p className="text-on-surface-variant leading-relaxed">Your participation provides critical data that helps researchers develop more effective treatments for chronic skin conditions.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-outline-variant/30 hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-primary-container">speed</span>
            </div>
            <h3 className="text-xl font-bold mb-4 font-headline">Early Access</h3>
            <p className="text-on-surface-variant leading-relaxed">Registry members are prioritized for new clinical trials, often getting access to cutting-edge therapies years before they reach the general market.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-outline-variant/30 hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 bg-tertiary-container rounded-lg flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-tertiary-container">health_and_safety</span>
            </div>
            <h3 className="text-xl font-bold mb-4 font-headline">Specialized Care</h3>
            <p className="text-on-surface-variant leading-relaxed">Trial participants receive dedicated attention from board-certified dermatologists and thorough health monitoring at no cost.</p>
          </div>
        </div>
      </section>

      {/* Therapeutic Areas */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="bg-surface-container-low rounded-3xl p-10">
          <h2 className="text-2xl font-bold text-on-surface mb-4 font-headline">Targeted Therapeutic Areas</h2>
          <p className="text-on-surface-variant mb-10 max-w-3xl">We are focusing our upcoming research efforts on the following dermatological conditions. If you or a loved one are affected, we encourage you to register above.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {conditions.filter(c => c !== "Other").map((c) => (
              <div key={c} className="bg-white p-6 rounded-xl text-center shadow-sm border border-outline-variant/20">
                <div className="font-bold text-primary mb-1 text-sm">{c.split(" (")[0]}</div>
                {c.includes("(") && (
                  <div className="text-xs text-on-surface-variant uppercase tracking-widest">{c.match(/\((.+)\)/)?.[1]}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
