import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const therapeuticAreas = [
  { name: "Atopic Dermatitis", sub: "Eczema" },
  { name: "Psoriasis", sub: "Plaque & Scalp" },
  { name: "Alopecia", sub: "Areata & Totalis" },
  { name: "Vitiligo", sub: "Pigment Loss" },
  { name: "Hidradenitis", sub: "Suppurativa" },
  { name: "Acne Vulgaris", sub: "Severe & Cystic" },
  { name: "Rosacea", sub: "Facial Redness" },
  { name: "Prurigo", sub: "Nodularis" },
];

export default function Home() {
  return (
    <Layout>
      <SEO
        title="Advancing Dermatology Through Clinical Research"
        description="Southern Skies Research is the clinical research division of Southern Skies Dermatology. Board-certified investigators, HIPAA-compliant facilities, and established patient care in Birmingham, Alabama."
        canonical="/"
      />

      {/* Hero Section */}
      <section className="relative min-h-[850px] flex items-center overflow-hidden bg-surface">
        <div className="max-w-7xl mx-auto px-8 w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <span className="inline-block py-1 px-3 rounded-md bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6">
              Clinical Research Division
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface leading-tight tracking-tight mb-6 font-headline">
              Advancing Dermatology Through{" "}
              <span className="text-primary">Clinical Research.</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant mb-10 max-w-lg leading-relaxed">
              The dedicated research division of Southern Skies Dermatology &amp; Surgery. Connecting leading-edge medical science with established patient care excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/research-registry"
                className="bg-primary-gradient text-on-primary px-8 py-4 rounded-md font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Join Our Research Registry
              </Link>
              <Link
                to="/for-sponsors"
                className="bg-surface-container-lowest border border-outline-variant/15 text-primary px-8 py-4 rounded-md font-bold text-lg hover:bg-surface-container-low transition-all"
              >
                Partner With Us
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl transform rotate-2">
              <img
                alt="Clinical dermatology research professional"
                className="w-full h-[600px] object-cover"
                src="/images/hero-lab.jpg"
                fetchPriority="high"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-surface-container-lowest/90 backdrop-blur-md rounded-lg shadow-lg">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                  <div>
                    <p className="text-sm font-bold text-on-surface">HIPAA Compliant Facility</p>
                    <p className="text-xs text-on-surface-variant">GCP-Trained Research Staff</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Credentials Bar */}
      <section className="bg-surface-dim py-10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold font-headline text-primary">15+</p>
              <p className="text-xs text-on-surface-variant uppercase tracking-widest font-semibold mt-1">Years in Dermatology</p>
            </div>
            <div>
              <p className="text-3xl font-bold font-headline text-primary">4</p>
              <p className="text-xs text-on-surface-variant uppercase tracking-widest font-semibold mt-1">Clinical Locations</p>
            </div>
            <div>
              <p className="text-3xl font-bold font-headline text-primary">50k+</p>
              <p className="text-xs text-on-surface-variant uppercase tracking-widest font-semibold mt-1">Patient Database</p>
            </div>
            <div>
              <p className="text-3xl font-bold font-headline text-primary">Board</p>
              <p className="text-xs text-on-surface-variant uppercase tracking-widest font-semibold mt-1">Certified Investigators</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Patients Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-on-surface mb-6 font-headline">Advancing Care Through Innovation</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                By joining our research registry, you become part of an elite network contributing to the advancement of dermatological science while gaining early access to emerging therapies.
              </p>
            </div>
            <Link to="/research-registry" className="text-secondary font-bold flex items-center gap-2 group whitespace-nowrap">
              Explore Research Registry
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-outline-variant/10">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary text-3xl">medical_services</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-4 font-headline">Board-Certified Investigators</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Clinical oversight provided by board-certified dermatologists with extensive experience treating the conditions being studied.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-outline-variant/10">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary text-3xl">biotech</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-4 font-headline">Established Excellence</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Our division leverages the reputation and resources of a premier dermatology practice to ensure the highest standards of research and patient care.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-outline-variant/10">
              <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary text-3xl">shield</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-4 font-headline">Patient Safety First</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Every trial follows strict GCP/ICH guidelines with IRB oversight. Your safety and wellbeing are always our top priority throughout every study phase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Therapeutic Areas */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-on-surface mb-4 font-headline">Targeted Therapeutic Areas</h2>
            <p className="text-on-surface-variant text-lg max-w-3xl">
              We are focusing our research efforts on the following dermatological conditions. If you or a loved one are affected, we encourage you to join our registry.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {therapeuticAreas.map((area) => (
              <div key={area.name} className="bg-surface-container-lowest p-6 rounded-xl text-center shadow-sm border border-outline-variant/10 hover:border-primary/30 transition-colors">
                <div className="font-bold text-primary mb-1">{area.name}</div>
                <div className="text-xs text-on-surface-variant uppercase tracking-widest">{area.sub}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/therapeutic-areas" className="text-primary font-bold flex items-center gap-2 justify-center group">
              Learn more about our therapeutic focus
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* For Sponsors Preview */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-surface-container-high h-64 rounded-xl overflow-hidden">
                  <img alt="Laboratory technician" className="w-full h-full object-cover" src="/images/lab-equipment.jpg" loading="lazy" />
                </div>
                <div className="bg-primary p-8 rounded-xl text-on-primary">
                  <p className="text-4xl font-bold mb-1 font-headline">50k+</p>
                  <p className="text-sm opacity-80 font-medium">Patient Database</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-secondary p-8 rounded-xl text-on-secondary">
                  <p className="text-4xl font-bold mb-1 font-headline">15+</p>
                  <p className="text-sm opacity-80 font-medium">Years Derm Practice</p>
                </div>
                <div className="bg-surface-container-high h-64 rounded-xl overflow-hidden">
                  <img alt="Modern clinical facility" className="w-full h-full object-cover" src="/images/clinical-team.jpg" loading="lazy" />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">For Sponsors &amp; CROs</span>
              <h2 className="text-4xl md:text-5xl font-bold text-on-surface mb-8 font-headline">Clinical Excellence, Scalable Recruitment.</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center border border-primary/10">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface text-lg mb-1">4 Strategic Locations</h4>
                    <p className="text-on-surface-variant">Established dermatology clinics across Alabama with high patient volume and diverse demographics.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center border border-primary/10">
                    <span className="material-symbols-outlined text-primary">stethoscope</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface text-lg mb-1">Board-Certified Dermatologists</h4>
                    <p className="text-on-surface-variant">Our PIs are practicing, board-certified clinicians with deep therapeutic expertise and established patient trust.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center border border-primary/10">
                    <span className="material-symbols-outlined text-primary">analytics</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface text-lg mb-1">Research-Ready Infrastructure</h4>
                    <p className="text-on-surface-variant">HIPAA-compliant facilities with dermatoscopy, clinical photography, biopsy capabilities, and dedicated research staff.</p>
                  </div>
                </div>
              </div>
              <Link to="/for-sponsors" className="mt-12 inline-block bg-on-surface text-surface px-8 py-4 rounded-md font-bold hover:bg-on-surface-variant transition-colors">
                Request Capabilities Profile
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,100 Q50,0 100,100" fill="none" stroke="white" strokeWidth="0.5" />
            <path d="M0,80 Q50,-20 100,80" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-on-primary mb-8 font-headline">Ready to Shape the Future of Dermatology?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/research-registry" className="bg-secondary-fixed text-on-secondary-fixed px-10 py-5 rounded-md font-bold text-xl hover:bg-secondary-container transition-all">
              Join Research Registry
            </Link>
            <Link to="/for-sponsors" className="bg-primary-container border border-on-primary/20 text-on-primary px-10 py-5 rounded-md font-bold text-xl hover:bg-primary-container/80 transition-all">
              Inquire as Sponsor
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
