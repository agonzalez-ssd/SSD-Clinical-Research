import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[751px] flex items-center overflow-hidden bg-surface-container">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-60 mix-blend-multiply"
            src="/images/hero-lab.jpg"
            alt="Modern clinical laboratory with researchers"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full py-20">
          <div className="max-w-2xl">
            <span className="inline-block bg-secondary-container text-on-secondary-container px-3 py-1 rounded-sm text-sm font-bold tracking-widest uppercase mb-6">
              Birmingham's Research Leader
            </span>
            <h1 className="text-editorial-lg font-extrabold text-on-surface tracking-tight mb-8 font-headline">
              Advancing Medicine <br />
              in Birmingham
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-lg">
              Southern Skies Clinical Research bridges the gap between
              breakthrough research and local patient care. Join a community
              dedicated to shaping the future of global healthcare.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/current-trials"
                className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
              >
                View Current Trials
              </Link>
              <Link
                to="/for-researchers"
                className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-lg font-bold hover:bg-surface-variant transition-all active:scale-[0.98]"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Network */}
      <section className="bg-surface-container-low py-12">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-outline mb-8">
            Trusted Member of the Network
          </p>
          <div className="flex justify-center items-center opacity-60 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-4 grayscale">
              <span className="material-symbols-outlined text-4xl">
                travel_explore
              </span>
              <span className="text-2xl font-headline font-bold text-on-surface">
                ResearchMatch
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-[2.5rem] font-bold tracking-tight text-on-surface mb-6 font-headline">
                Why Choose Southern Skies
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                We provide a rigorous editorial approach to clinical research,
                ensuring every participant receives world-class attention and
                every study yields high-integrity data.
              </p>
            </div>
            <div className="h-[2px] flex-grow bg-outline-variant/20 mx-8 hidden md:block mb-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Trust Card */}
            <div className="md:col-span-8 bg-surface-container-lowest p-12 rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-110" />
              <span
                className="material-symbols-outlined text-primary text-5xl mb-8"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified_user
              </span>
              <h3 className="text-2xl font-bold mb-4 font-headline">
                Unwavering Trust
              </h3>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
                Our protocols exceed federal safety standards. We prioritize
                patient autonomy and transparent communication throughout every
                trial phase.
              </p>
            </div>

            {/* Patient Care Card */}
            <div className="md:col-span-4 bg-tertiary-container text-on-tertiary-container p-12 rounded-xl">
              <span className="material-symbols-outlined text-5xl mb-8">
                volunteer_activism
              </span>
              <h3 className="text-2xl font-bold mb-4 font-headline">
                Patient Care
              </h3>
              <p className="text-on-tertiary-container/80 leading-relaxed">
                Dedicated coordinators who understand that behind every data
                point is a human life requiring compassion and respect.
              </p>
            </div>

            {/* Expertise Card */}
            <div className="md:col-span-4 bg-secondary-container text-on-secondary-container p-12 rounded-xl">
              <span className="material-symbols-outlined text-5xl mb-8">
                psychology
              </span>
              <h3 className="text-2xl font-bold mb-4 font-headline">
                Expertise
              </h3>
              <p className="text-on-secondary-container/80 leading-relaxed">
                Staffed by Birmingham's leading medical investigators and
                specialized research coordinators with decades of combined
                experience.
              </p>
            </div>

            {/* Clinical Track Record */}
            <div className="md:col-span-8 bg-surface-container-lowest p-12 rounded-xl border border-outline-variant/10">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-xl font-bold text-primary uppercase tracking-widest font-headline">
                  Clinical Track Record
                </h3>
                <span className="text-xs font-bold text-on-surface-variant bg-surface-container px-2 py-1 rounded">
                  2024 UPDATE
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <p className="text-tertiary text-xs font-bold mb-1">
                    SUCCESS RATE
                  </p>
                  <p className="text-3xl font-headline font-extrabold text-on-surface">
                    98.4%
                  </p>
                </div>
                <div>
                  <p className="text-tertiary text-xs font-bold mb-1">
                    PARTICIPANTS
                  </p>
                  <p className="text-3xl font-headline font-extrabold text-on-surface">
                    12k+
                  </p>
                </div>
                <div>
                  <p className="text-tertiary text-xs font-bold mb-1">
                    TRIALS HELD
                  </p>
                  <p className="text-3xl font-headline font-extrabold text-on-surface">
                    450
                  </p>
                </div>
                <div>
                  <p className="text-tertiary text-xs font-bold mb-1">
                    HIPAA SCORE
                  </p>
                  <p className="text-3xl font-headline font-extrabold text-on-surface">
                    A+
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-primary-container rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-transparent opacity-50" />
            <div className="relative z-10 px-12 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-on-primary-container max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">
                  Start Your Contribution Today
                </h2>
                <p className="text-lg opacity-90">
                  Explore our open clinical trials across neurology, cardiology,
                  and immunology. Your participation drives innovation.
                </p>
              </div>
              <div className="flex gap-4">
                <Link
                  to="/current-trials"
                  className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-lg font-bold hover:bg-secondary-fixed transition-all active:scale-[0.98] shadow-lg"
                >
                  Browse All Trials
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
