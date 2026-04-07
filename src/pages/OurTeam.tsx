import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function OurTeam() {
  return (
    <Layout>
      <SEO
        title="Our Team — Board-Certified Investigators"
        description="Meet the board-certified dermatologists and research staff at Southern Skies Clinical Research. Experienced investigators with deep expertise in skin conditions and clinical trial protocols."
        canonical="/our-team"
      />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="max-w-3xl mb-16">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Our Investigators</span>
          <h1 className="font-headline text-editorial-lg font-extrabold text-on-surface mb-8">Led by Experts You Can Trust</h1>
          <p className="text-xl text-on-surface-variant leading-relaxed">
            Our Principal Investigators are practicing, board-certified dermatologists with deep therapeutic expertise. Their clinical experience treating the conditions being studied ensures the highest standards of patient care and research quality.
          </p>
        </div>
      </section>

      {/* PI Profiles */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Dr. Mario Maruthur */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/10 shadow-sm">
            <div className="h-80 bg-surface-container-high overflow-hidden">
              <img
                src="/images/dr-mario-maruthur.jpg"
                alt="Dr. Mario Maruthur, MD — Board-Certified Dermatologist and Principal Investigator"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="font-headline text-2xl font-bold text-on-surface">Mario Maruthur, MD</h3>
                <span className="bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">Principal Investigator</span>
              </div>
              <p className="text-on-surface-variant text-xs uppercase tracking-widest mb-4 font-semibold">Board-Certified Dermatologist &amp; Mohs Surgeon</p>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                Founder of Southern Skies Dermatology &amp; Surgery with over 15 years of clinical practice. Fellowship-trained Mohs surgeon with extensive experience in medical dermatology, skin cancer, and surgical procedures. Brings deep patient relationships and diagnostic expertise to clinical research.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="text-sm text-on-surface">Board Certified — American Board of Dermatology</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="text-sm text-on-surface">Fellowship-Trained Mohs Micrographic Surgery</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="text-sm text-on-surface">GCP/ICH Certified Investigator</span>
                </div>
              </div>
            </div>
          </div>

          {/* Research Team */}
          <div className="space-y-8">
            <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/10 shadow-sm">
              <h3 className="font-headline text-xl font-bold text-on-surface mb-2">Research Coordinators</h3>
              <p className="text-on-surface-variant text-xs uppercase tracking-widest mb-4 font-semibold">GCP-Trained Clinical Staff</p>
              <p className="text-on-surface-variant leading-relaxed">
                Our dedicated research coordination team manages every aspect of study execution — from patient screening and informed consent to data collection and regulatory documentation. All coordinators are GCP-certified and HIPAA-trained.
              </p>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/10 shadow-sm">
              <h3 className="font-headline text-xl font-bold text-on-surface mb-2">Clinical Support Staff</h3>
              <p className="text-on-surface-variant text-xs uppercase tracking-widest mb-4 font-semibold">Established Practice Team</p>
              <p className="text-on-surface-variant leading-relaxed">
                Leveraging our established dermatology practice's experienced nurses, medical assistants, and administrative team. Our staff has years of experience managing complex dermatological cases and patient relationships.
              </p>
            </div>

            <div className="bg-primary text-on-primary rounded-xl p-8">
              <h3 className="font-headline text-xl font-bold mb-4">Why Our Team Matters to Sponsors</h3>
              <div className="space-y-4 text-on-primary/90">
                <p>Our investigators aren't just researchers — they're practicing dermatologists who see and treat the conditions being studied every day. This means:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-sm mt-0.5">check_circle</span>
                    <span>Faster, more accurate patient identification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-sm mt-0.5">check_circle</span>
                    <span>Deep therapeutic expertise at every study visit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-sm mt-0.5">check_circle</span>
                    <span>Established patient trust for higher retention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-sm mt-0.5">check_circle</span>
                    <span>Clinical judgment informed by real-world practice</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-on-surface mb-6 font-headline">Work With Our Team</h2>
          <p className="text-on-surface-variant text-lg mb-8">Whether you're a patient seeking advanced care or a sponsor looking for qualified investigators, we're ready to connect.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/research-registry" className="bg-primary-gradient text-on-primary px-8 py-4 rounded-md font-bold hover:shadow-lg transition-all">
              Patient Registry
            </Link>
            <Link to="/about-contact" className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-md font-bold hover:bg-surface-variant transition-all">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
