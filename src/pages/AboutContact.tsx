import Layout from "../components/Layout";
import SEO from "../components/SEO";

const locations = [
  { name: "Trussville", address: "48 Medical Park Dr E #458, Trussville, AL 35173", primary: true },
  { name: "Pell City", address: "423 23rd St N, Pell City, AL 35125" },
  { name: "Gadsden", address: "300 Medical Center Dr #402, Gadsden, AL 35903" },
  { name: "Oxford", address: "1400 Highway Dr Ste C, Oxford, AL 36203" },
];

export default function AboutContact() {
  return (
    <Layout>
      <SEO
        title="About & Contact"
        description="Learn about Southern Skies Research, the clinical research division of Southern Skies Dermatology. Contact us for study inquiries or sponsor partnerships in Birmingham, Alabama."
        canonical="/about-contact"
      />

      {/* About */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">About Us</span>
            <h1 className="font-headline text-editorial-lg font-extrabold text-on-surface mb-8">
              Advancing Dermatology Through Rigorous Research
            </h1>
            <p className="text-lg leading-relaxed text-on-surface-variant mb-6">
              Southern Skies Research is the clinical trial division of Southern Skies Dermatology &amp; Surgery — a premier, multi-location dermatology practice serving Alabama for over 15 years.
            </p>
            <p className="text-lg leading-relaxed text-on-surface-variant mb-6">
              We established our research division to bridge the gap between cutting-edge dermatological science and the patients who need it most. By leveraging our established practice infrastructure, extensive patient database, and board-certified investigators, we provide pharmaceutical sponsors with a high-quality, research-ready site network.
            </p>
            <p className="text-lg leading-relaxed text-on-surface-variant">
              For patients, we offer the opportunity to access emerging treatments years before they become publicly available — all under the care of the same trusted dermatologists they already know.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-surface-container-low p-8 rounded-xl space-y-6">
              <h3 className="font-headline text-xl font-bold mb-4">Our Credentials</h3>
              {[
                { icon: "verified", label: "Board-Certified Dermatologists" },
                { icon: "shield", label: "HIPAA-Compliant Facilities" },
                { icon: "clinical_notes", label: "GCP/ICH Trained Staff" },
                { icon: "local_hospital", label: "IRB-Approved Protocols" },
                { icon: "diversity_3", label: "Diverse Patient Population" },
              ].map((cred) => (
                <div key={cred.label} className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>{cred.icon}</span>
                  <span className="font-bold text-sm text-on-surface">{cred.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">Our Locations</h2>
          <p className="text-on-surface-variant text-lg mb-12 max-w-2xl">Our established dermatology practice operates across eight Alabama locations, each equipped for clinical research.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((loc) => (
              <div key={loc.name} className={`p-6 rounded-xl ${loc.primary ? "bg-surface-container-lowest border-l-4 border-primary shadow-sm" : "bg-surface-container-lowest border border-outline-variant/10"}`}>
                <h4 className="font-bold text-on-surface mb-2">{loc.name}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">{loc.address}</p>
                {loc.primary && <span className="inline-block mt-3 text-xs font-bold text-primary uppercase tracking-widest">Research HQ</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Patient Inquiry */}
            <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-secondary text-2xl">person</span>
                <h2 className="font-headline text-2xl font-bold">Patient Inquiry</h2>
              </div>
              <p className="text-on-surface-variant text-sm mb-6">Interested in participating in a clinical trial? Have questions about the registry?</p>
              <form className="space-y-4">
                <input className="w-full rounded-lg border border-outline-variant/20 focus:border-primary focus:ring-0 py-3 px-4" placeholder="Full Name" type="text" />
                <input className="w-full rounded-lg border border-outline-variant/20 focus:border-primary focus:ring-0 py-3 px-4" placeholder="Email Address" type="email" />
                <input className="w-full rounded-lg border border-outline-variant/20 focus:border-primary focus:ring-0 py-3 px-4" placeholder="Phone Number" type="tel" />
                <textarea className="w-full rounded-lg border border-outline-variant/20 focus:border-primary focus:ring-0 py-3 px-4" placeholder="Your question or message" rows={3} />
                <button className="w-full bg-primary text-on-primary py-3 rounded-lg font-bold hover:opacity-90 transition-opacity" type="submit">Send Inquiry</button>
              </form>
            </div>

            {/* Sponsor Inquiry */}
            <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">business</span>
                <h2 className="font-headline text-2xl font-bold">Sponsor / CRO Inquiry</h2>
              </div>
              <p className="text-on-surface-variant text-sm mb-6">Looking for a qualified research site? Request a feasibility assessment or capabilities profile.</p>
              <form className="space-y-4">
                <input className="w-full rounded-lg border border-outline-variant/20 focus:border-primary focus:ring-0 py-3 px-4" placeholder="Contact Name" type="text" />
                <input className="w-full rounded-lg border border-outline-variant/20 focus:border-primary focus:ring-0 py-3 px-4" placeholder="Company / Organization" type="text" />
                <input className="w-full rounded-lg border border-outline-variant/20 focus:border-primary focus:ring-0 py-3 px-4" placeholder="Email Address" type="email" />
                <select className="w-full rounded-lg border border-outline-variant/20 focus:border-primary focus:ring-0 py-3 px-4">
                  <option>Feasibility Request</option>
                  <option>Capabilities Profile</option>
                  <option>Site Visit Request</option>
                  <option>General Inquiry</option>
                </select>
                <textarea className="w-full rounded-lg border border-outline-variant/20 focus:border-primary focus:ring-0 py-3 px-4" placeholder="Study details or message" rows={3} />
                <button className="w-full bg-on-surface text-surface py-3 rounded-lg font-bold hover:bg-on-surface-variant transition-colors" type="submit">Submit Request</button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary mt-1">call</span>
              <div>
                <p className="font-bold mb-1">Phone</p>
                <a href="tel:2059002000" className="text-on-surface-variant hover:text-primary transition-colors">(205) 900-2000</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary mt-1">mail</span>
              <div>
                <p className="font-bold mb-1">Email</p>
                <a href="mailto:research@southernskiesresearch.com" className="text-on-surface-variant hover:text-primary transition-colors">research@southernskiesresearch.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary mt-1">schedule</span>
              <div>
                <p className="font-bold mb-1">Response Time</p>
                <p className="text-on-surface-variant">Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <aside className="w-full bg-surface-dim/30 py-16 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-between items-center gap-12 grayscale opacity-50">
          {[
            { icon: "verified", label: "HIPAA COMPLIANT" },
            { icon: "shield_person", label: "IRB APPROVED" },
            { icon: "health_metrics", label: "GCP CERTIFIED" },
            { icon: "gavel", label: "ICH GUIDELINES" },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-3">
              <span className="material-symbols-outlined text-3xl">{badge.icon}</span>
              <span className="font-headline font-bold text-lg">{badge.label}</span>
            </div>
          ))}
        </div>
      </aside>
    </Layout>
  );
}
