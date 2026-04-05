import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function ForResearchers() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Hero: Partner With Us */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
          <div className="lg:col-span-7">
            <h1 className="font-headline text-editorial-lg font-extrabold text-on-surface mb-8">
              Partner With Us
            </h1>
            <p className="text-lg leading-relaxed text-on-surface-variant max-w-2xl mb-10">
              Southern Skies Clinical Research provides CROs and Sponsors with a
              premier site-level environment in Birmingham, AL. We bridge the
              gap between high-precision research and patient accessibility
              through institutional-grade infrastructure and localized care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/about-contact"
                className="bg-primary-gradient text-on-primary px-8 py-4 rounded-lg font-semibold flex items-center gap-2 group"
              >
                Inquire for Partnerships
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <button className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-lg font-semibold">
                Download Site Profile
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="rounded-xl overflow-hidden shadow-xl aspect-[4/5] bg-surface-container-low">
              <img
                className="w-full h-full object-cover"
                src="/images/researcher-lab.jpg"
                alt="Medical researcher using microscopy equipment"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-secondary-container p-8 rounded-lg shadow-lg max-w-[240px]">
              <span className="text-on-secondary-container text-4xl font-bold font-headline block mb-2">
                98%
              </span>
              <p className="text-on-secondary-container text-sm font-semibold uppercase tracking-wider">
                Data Quality Score
              </p>
            </div>
          </div>
        </section>

        {/* Facility Capabilities */}
        <section className="bg-surface-container-low -mx-8 px-8 py-24 mb-32 rounded-xl">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-xl">
                <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">
                  Infrastructure
                </span>
                <h2 className="font-headline text-3xl font-bold mb-4">
                  Facility Capabilities
                </h2>
                <p className="text-on-surface-variant">
                  Our site is engineered to exceed standard clinical
                  requirements, ensuring security, precision, and compliance at
                  every touchpoint.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-surface-container-lowest p-10 rounded-xl ghost-border transition-all hover:shadow-lg">
                <span className="material-symbols-outlined text-3xl text-primary mb-6">
                  biotech
                </span>
                <h3 className="font-headline text-xl font-bold mb-4">
                  Modern Labs
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Level 2 biosafety certified laboratories with refrigerated
                  centrifuges, -80&deg;C storage, and dedicated processing stations
                  for complex pharmacokinetic protocols.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-10 rounded-xl ghost-border transition-all hover:shadow-lg">
                <span className="material-symbols-outlined text-3xl text-primary mb-6">
                  encrypted
                </span>
                <h3 className="font-headline text-xl font-bold mb-4">
                  HIPAA Compliance
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Encrypted digital storage and physical record management
                  systems that meet the highest federal security standards,
                  ensuring complete participant confidentiality.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-10 rounded-xl ghost-border transition-all hover:shadow-lg">
                <span className="material-symbols-outlined text-3xl text-primary mb-6">
                  bolt
                </span>
                <h3 className="font-headline text-xl font-bold mb-4">
                  ResearchMatch&trade;
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Integrated with the ResearchMatch network, allowing us to
                  rapidly scale recruitment across a diverse Birmingham, AL
                  demographic within 48 hours of study activation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl font-bold mb-4">
              Recruitment Excellence
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Metrics from our 2023-2024 Phase II and Phase III trial portfolio
              across Neurology and Cardiovascular segments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="bg-surface-container-lowest p-12 rounded-xl ghost-border">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <span className="text-tertiary text-xs font-bold tracking-widest uppercase mb-1 block">
                    Case Study 01
                  </span>
                  <h3 className="font-headline text-2xl font-bold">
                    Fast-Track Recruitment
                  </h3>
                </div>
                <span className="bg-primary-container/10 text-primary px-3 py-1 rounded text-xs font-bold">
                  CARDIOLOGY
                </span>
              </div>
              <div className="space-y-6">
                <div className="flex justify-between border-b border-outline-variant/20 pb-4">
                  <span className="text-on-surface-variant font-medium">
                    Recruitment Goal
                  </span>
                  <span className="font-bold">250 Participants</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/20 pb-4">
                  <span className="text-on-surface-variant font-medium">
                    Actual Achieved
                  </span>
                  <span className="font-bold text-primary">274 (110%)</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/20 pb-4">
                  <span className="text-on-surface-variant font-medium">
                    Timeline Reduction
                  </span>
                  <span className="font-bold">14 Days Ahead</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant font-medium">
                    Retention Rate
                  </span>
                  <span className="font-bold">96.4%</span>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-surface-container-lowest p-12 rounded-xl ghost-border">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <span className="text-tertiary text-xs font-bold tracking-widest uppercase mb-1 block">
                    Case Study 02
                  </span>
                  <h3 className="font-headline text-2xl font-bold">
                    Data Quality Audit
                  </h3>
                </div>
                <span className="bg-primary-container/10 text-primary px-3 py-1 rounded text-xs font-bold">
                  NEUROLOGY
                </span>
              </div>
              <div className="space-y-6">
                <div className="flex justify-between border-b border-outline-variant/20 pb-4">
                  <span className="text-on-surface-variant font-medium">
                    Protocol Compliance
                  </span>
                  <span className="font-bold">100%</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/20 pb-4">
                  <span className="text-on-surface-variant font-medium">
                    Source Documentation
                  </span>
                  <span className="font-bold">No Major Findings</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/20 pb-4">
                  <span className="text-on-surface-variant font-medium">
                    Query Response Time
                  </span>
                  <span className="font-bold text-primary">&lt; 24 Hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant font-medium">
                    FDA Audit Readiness
                  </span>
                  <span className="font-bold">Continuous Monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-gradient rounded-2xl p-16 text-center text-on-primary relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative z-10">
            <h2 className="font-headline text-4xl font-extrabold mb-6">
              Drive Your Next Study Forward
            </h2>
            <p className="text-on-primary-container/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Southern Skies Clinical Research provides CROs and Sponsors with a
              premier site-level environment in Alabama. We bridge the gap
              between high-precision research and patient accessibility through
              institutional-grade infrastructure and localized care.
            </p>
            <Link
              to="/about-contact"
              className="inline-block bg-secondary-container text-on-secondary-container px-10 py-5 rounded-lg font-extrabold text-lg transition-transform hover:scale-105 active:scale-95 shadow-2xl"
            >
              Inquire for Partnerships
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
