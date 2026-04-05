import Layout from "../components/Layout";

export default function AboutContact() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-8 py-20">
        {/* Hero Section: Our Mission */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
                Southern Skies Research
              </span>
              <h1 className="font-headline text-editorial-lg font-extrabold text-on-surface mb-8">
                Our Mission to advance clinical research in Alabama.
              </h1>
              <p className="text-lg leading-relaxed text-on-surface-variant max-w-2xl font-body">
                We bridge the gap between breakthrough medical innovation and
                the communities of Alabama. By upholding the highest standards
                of clinical excellence, we ensure that every trial participant
                receives meticulous care while contributing to global healthcare
                progress.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-end">
              <div className="bg-surface-container-low p-8 rounded-lg w-full">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <span
                      className="material-symbols-outlined text-secondary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      verified
                    </span>
                    <span className="font-bold text-sm">
                      HIPAA Compliant Facilities
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className="material-symbols-outlined text-secondary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      school
                    </span>
                    <span className="font-bold text-sm">
                      Board Certified Investigators
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className="material-symbols-outlined text-secondary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      clinical_notes
                    </span>
                    <span className="font-bold text-sm">
                      FDA Regulated Protocols
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Info & Map */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-surface-container-lowest p-10 rounded-lg shadow-sm">
              <h2 className="font-headline text-2xl font-bold mb-8">
                Reach our Birmingham location
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">
                    location_on
                  </span>
                  <div>
                    <p className="font-bold mb-1">Alabama address</p>
                    <address className="not-italic text-on-surface-variant leading-relaxed">
                      48 Medical Park Dr E
                      <br />
                      Birmingham, AL 35235
                    </address>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">
                    call
                  </span>
                  <div>
                    <p className="font-bold mb-1">Direct Phone</p>
                    <a
                      className="text-on-surface-variant hover:text-primary transition-colors"
                      href="tel:2055550123"
                    >
                      (205) 555-0123
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">
                    mail
                  </span>
                  <div>
                    <p className="font-bold mb-1">Email Inquiry</p>
                    <a
                      className="text-on-surface-variant hover:text-primary transition-colors"
                      href="mailto:info@southernskiesresearch.com"
                    >
                      info@southernskiesresearch.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-surface-container overflow-hidden rounded-lg h-64 relative">
              <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                <div className="bg-primary text-white p-4 rounded-full shadow-lg">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    location_on
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-10 rounded-lg border border-outline-variant/10 shadow-sm">
            <div className="mb-10">
              <h2 className="font-headline text-2xl font-bold mb-2">
                HIPAA-compliant inquiry form
              </h2>
              <p className="text-on-surface-variant text-sm">
                Please fill out the form below. Your information is encrypted
                and handled with clinical confidentiality.
              </p>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                    Full Name
                  </label>
                  <input
                    className="bg-surface-container-lowest border border-outline-variant/20 focus:border-primary focus:ring-0 rounded-md py-3 px-4 transition-all"
                    placeholder="Enter your name"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                    Email Address
                  </label>
                  <input
                    className="bg-surface-container-lowest border border-outline-variant/20 focus:border-primary focus:ring-0 rounded-md py-3 px-4 transition-all"
                    placeholder="your@email.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                    Phone Number
                  </label>
                  <input
                    className="bg-surface-container-lowest border border-outline-variant/20 focus:border-primary focus:ring-0 rounded-md py-3 px-4 transition-all"
                    placeholder="(205) 000-0000"
                    type="tel"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                    Subject of Inquiry
                  </label>
                  <select className="bg-surface-container-lowest border border-outline-variant/20 focus:border-primary focus:ring-0 rounded-md py-3 px-4 transition-all">
                    <option>Join a Clinical Trial</option>
                    <option>For Researchers / Sponsors</option>
                    <option>Media Inquiry</option>
                    <option>General Information</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                  Message
                </label>
                <textarea
                  className="bg-surface-container-lowest border border-outline-variant/20 focus:border-primary focus:ring-0 rounded-md py-3 px-4 transition-all"
                  placeholder="How can we assist you today?"
                  rows={4}
                />
              </div>
              <div className="flex items-center gap-3 p-4 bg-surface-container-low rounded-lg mb-6">
                <span className="material-symbols-outlined text-primary text-lg">
                  verified_user
                </span>
                <p className="text-xs text-on-surface-variant leading-tight">
                  By submitting this form, you acknowledge that your data will be
                  processed in accordance with HIPAA regulations for clinical
                  confidentiality.
                </p>
              </div>
              <button
                className="w-full bg-primary hover:bg-primary-container text-white font-bold py-4 rounded-md shadow-md transition-all active:scale-[0.98] flex justify-center items-center gap-2"
                type="submit"
              >
                Send Inquiry
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </form>
          </div>
        </section>
      </div>

      {/* Social Proof */}
      <aside className="w-full bg-surface-container-low py-16 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-between items-center gap-12 grayscale opacity-60">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl">verified</span>
            <span className="font-headline font-bold text-lg">
              AAHRPP ACCREDITED
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl">
              health_metrics
            </span>
            <span className="font-headline font-bold text-lg">
              ALABAMA MED-RESEARCH
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl">
              shield_person
            </span>
            <span className="font-headline font-bold text-lg">
              HIPAA COMPLIANT
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl">gavel</span>
            <span className="font-headline font-bold text-lg">
              IRB PROTECTED
            </span>
          </div>
        </div>
      </aside>
    </Layout>
  );
}
