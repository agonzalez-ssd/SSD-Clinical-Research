import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function ForSponsors() {
  return (
    <Layout>
      <SEO
        title="For Sponsors & CROs — Site Capabilities"
        description="Partner with Southern Skies Research for dermatology clinical trials in Alabama. 50k+ patient database, board-certified PIs, 8 locations, HIPAA-compliant infrastructure."
        canonical="/for-sponsors"
      />

      {/* Hero */}
      <section className="relative px-6 py-20 md:py-32 overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 z-10">
            <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase rounded mb-6">Sponsor Portal</span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-[1.1] mb-8">
              A Multi-Location Network <span className="text-primary">Ready for Study Startup</span>
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              Built for quality and compliance. Our established dermatology practice provides immediate access to diverse patient populations and research-ready infrastructure.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about-contact" className="bg-primary-gradient text-on-primary px-8 py-4 rounded-md font-semibold text-base shadow-lg hover:brightness-105 transition-all">
                Request Feasibility
              </Link>
              <button className="bg-surface-container-lowest border border-outline-variant/30 text-primary px-8 py-4 rounded-md font-semibold text-base hover:bg-surface-container-low transition-all">
                Download Site Profile
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square md:aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img className="w-full h-full object-cover" src="/images/lab-equipment.jpg" alt="Research-ready clinical facility" loading="lazy" />
            </div>
            <div className="absolute -bottom-6 -left-6 md:-left-12 bg-surface-container-lowest p-8 rounded-xl shadow-xl border border-outline-variant/10 max-w-xs">
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-bold font-headline text-primary">Centralized</div>
                  <div className="text-sm text-on-surface-variant uppercase tracking-wider font-semibold">Standard Operating Procedures</div>
                </div>
                <div className="h-px bg-outline-variant/20" />
                <div>
                  <div className="text-3xl font-bold font-headline text-primary">GCP</div>
                  <div className="text-sm text-on-surface-variant uppercase tracking-wider font-semibold">Trained Research Staff</div>
                </div>
                <div className="h-px bg-outline-variant/20" />
                <div>
                  <div className="text-3xl font-bold font-headline text-primary">8 Site</div>
                  <div className="text-sm text-on-surface-variant uppercase tracking-wider font-semibold">Established Network</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Site Infrastructure */}
      <section className="py-24 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-headline text-4xl font-bold text-on-surface mb-4">Site Infrastructure</h2>
            <p className="text-on-surface-variant max-w-2xl text-lg">Research-ready facilities across our network, purpose-built for high-quality dermatological research.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center border border-outline-variant/5">
              <div className="flex-1">
                <span className="material-symbols-outlined text-4xl text-secondary mb-4">biotech</span>
                <h3 className="font-headline text-2xl font-bold mb-3">Diagnostic Equipment</h3>
                <p className="text-on-surface-variant leading-relaxed">Digital dermatoscopy, clinical photography suites, biopsy capabilities, cryotherapy, and dedicated specimen processing.</p>
              </div>
              <div className="flex-1 w-full h-48 rounded-lg overflow-hidden bg-surface-container-high">
                <img className="w-full h-full object-cover" src="/images/clinical-team.jpg" alt="Clinical diagnostic equipment" loading="lazy" />
              </div>
            </div>
            <div className="md:col-span-4 bg-primary text-on-primary rounded-xl p-8 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-4xl mb-4">shield</span>
                <h3 className="font-headline text-2xl font-bold mb-3">Regulatory Readiness</h3>
                <p className="text-on-primary/80">HIPAA-compliant systems, centralized SOP management, and GCP-trained staff ensure audit-readiness at every site.</p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  <span className="text-xs uppercase tracking-widest">GCP &amp; HIPAA Compliant</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/5">
              <span className="material-symbols-outlined text-4xl text-secondary mb-4">assignment</span>
              <h3 className="font-headline text-2xl font-bold mb-3">Efficient Contracting</h3>
              <p className="text-on-surface-variant">Standardized processes and central IRB relationships designed to reduce site startup timelines.</p>
            </div>
            <div className="md:col-span-8 bg-secondary-fixed text-on-secondary-fixed-variant rounded-xl p-8 border border-outline-variant/5 flex flex-col justify-center">
              <h3 className="font-headline text-3xl font-bold mb-4 italic">"Our established practice infrastructure means sponsors can focus on the science while we handle patient access and compliance."</h3>
              <p className="text-on-secondary-fixed-variant/80 font-medium">— Research Operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Access */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="font-headline text-4xl font-bold text-on-surface mb-6">Patient Access</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Our established dermatology practice provides immediate access to a large, diverse patient population across multiple Alabama locations. Our deep therapeutic expertise in skin conditions means efficient patient identification and screening.
            </p>
            <div className="space-y-6">
              {[
                { label: "Active Dermatology Patient Database", value: "50k+ Patients" },
                { label: "Diverse Demographics Across Alabama", value: "8 Locations" },
                { label: "Established Provider-Patient Trust", value: "15+ Years" },
              ].map((metric) => (
                <div key={metric.label} className="flex justify-between items-center border-b border-outline-variant/20 pb-4">
                  <span className="font-medium text-on-surface">{metric.label}</span>
                  <span className="text-primary font-bold">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container-lowest p-6 rounded-xl text-center">
                  <div className="text-4xl font-headline font-extrabold text-primary mb-1">50k+</div>
                  <div className="text-xs uppercase text-on-surface-variant tracking-widest">Active Database</div>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-xl text-center">
                  <div className="text-4xl font-headline font-extrabold text-primary mb-1">Derm</div>
                  <div className="text-xs uppercase text-on-surface-variant tracking-widest">Sub-Specialty Focus</div>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-xl text-center">
                  <div className="text-4xl font-headline font-extrabold text-primary mb-1">EHR</div>
                  <div className="text-xs uppercase text-on-surface-variant tracking-widest">Integrated System</div>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-xl text-center">
                  <div className="text-4xl font-headline font-extrabold text-primary mb-1">8/8</div>
                  <div className="text-xs uppercase text-on-surface-variant tracking-widest">Sites Research-Ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-container -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary opacity-20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary opacity-30 blur-3xl rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl p-12 text-center border border-white/20 shadow-2xl">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-6">Start Your Partnership Today</h2>
          <p className="text-on-primary-container text-lg mb-10 max-w-2xl mx-auto">
            Access our established dermatology network, diverse patient population, and research-ready infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/about-contact" className="bg-white text-primary px-10 py-4 rounded-md font-bold text-lg hover:bg-surface-container-low transition-all shadow-xl">
              Request Feasibility
            </Link>
            <button className="bg-transparent border-2 border-white/40 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition-all">
              Schedule a Site Visit
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
