import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const steps = [
  { icon: "assignment", title: "Join the Registry", desc: "Complete a brief profile with your condition and contact information. No obligation to participate in any study." },
  { icon: "search", title: "Get Matched", desc: "Our team reviews your profile and contacts you when a study matching your condition becomes available." },
  { icon: "fact_check", title: "Screening Visit", desc: "Meet our team for an evaluation to confirm eligibility. All screening is free and confidential." },
  { icon: "science", title: "Participate", desc: "If eligible, begin the study with dedicated support from our board-certified team throughout every visit." },
];

const faqs = [
  { q: "Is it safe to participate in a clinical trial?", a: "Every clinical trial must be approved by an Institutional Review Board (IRB) before it can begin. Our board-certified dermatologists oversee each study, and you can withdraw at any time for any reason." },
  { q: "Will I be compensated?", a: "Most clinical studies offer compensation for your time and travel. Specific amounts vary by study and will be disclosed before you agree to participate." },
  { q: "Do I need health insurance to participate?", a: "No. All study-related care, including examinations, lab tests, and investigational treatments, is provided at no cost to you regardless of insurance status." },
  { q: "What if the treatment doesn't work for me?", a: "Your safety is our priority. If a treatment isn't working or causes side effects, our medical team will work with you on the best course of action, including discontinuing the study." },
  { q: "How long do clinical trials last?", a: "Study duration varies — some last a few weeks, others several months. The exact timeline will be clearly explained before you agree to participate." },
  { q: "Can I continue seeing my regular dermatologist?", a: "Yes. Participating in a clinical trial does not replace your regular healthcare. We coordinate with your existing providers as needed." },
];

export default function ForPatients() {
  return (
    <Layout>
      <SEO
        title="For Patients — Why Participate in Clinical Research"
        description="Learn about participating in dermatology clinical trials at Southern Skies Clinical Research. Free care, compensation, early access to treatments, and dedicated specialist attention."
        canonical="/for-patients"
      />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="max-w-3xl">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">For Patients</span>
          <h1 className="font-headline text-editorial-lg font-extrabold text-on-surface mb-8">
            Your Participation Advances Medicine.
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed mb-10">
            Clinical trials give you access to potential new treatments while helping develop better therapies for patients everywhere. All care is provided at no cost, and most studies offer compensation for your time.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/research-registry" className="bg-primary-gradient text-on-primary px-8 py-4 rounded-md font-bold shadow-lg hover:shadow-xl transition-all">
              Join the Registry
            </Link>
            <Link to="/therapeutic-areas" className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-md font-bold hover:bg-surface-variant transition-all">
              See Conditions We Study
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-on-surface mb-12 font-headline">Why Participate in Clinical Research?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10">
              <div className="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-on-secondary-container">science</span>
              </div>
              <h3 className="text-xl font-bold mb-4 font-headline">Advance Science</h3>
              <p className="text-on-surface-variant leading-relaxed">Your participation provides critical data that helps researchers develop more effective treatments for chronic skin conditions.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10">
              <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-on-primary-container">speed</span>
              </div>
              <h3 className="text-xl font-bold mb-4 font-headline">Early Access</h3>
              <p className="text-on-surface-variant leading-relaxed">Registry members are prioritized for new clinical trials, often getting access to cutting-edge therapies before they reach the general market.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10">
              <div className="w-12 h-12 bg-tertiary-container rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-on-tertiary-container">health_and_safety</span>
              </div>
              <h3 className="text-xl font-bold mb-4 font-headline">Specialized Care</h3>
              <p className="text-on-surface-variant leading-relaxed">Trial participants receive dedicated attention from board-certified dermatologists and thorough health monitoring at no cost.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-on-surface mb-4 font-headline">How It Works</h2>
          <p className="text-on-surface-variant text-lg mb-16 max-w-2xl">From registry to participation — a clear, supportive process every step of the way.</p>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-on-primary font-bold text-lg">{i + 1}</div>
                  {i < steps.length - 1 && <div className="hidden md:block h-px flex-1 bg-outline-variant/30" />}
                </div>
                <span className="material-symbols-outlined text-secondary text-3xl mb-4 block">{step.icon}</span>
                <h3 className="text-lg font-bold text-on-surface mb-2 font-headline">{step.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-on-surface mb-12 font-headline">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10">
                <h3 className="font-bold text-on-surface mb-3">{faq.q}</h3>
                <p className="text-on-surface-variant leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-container relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="max-w-3xl mx-auto px-8 text-center relative z-10">
          <h2 className="text-3xl font-bold text-on-primary-container mb-6 font-headline">Ready to Take the Next Step?</h2>
          <p className="text-on-primary-container/80 text-lg mb-8">Join our registry today. There's no obligation — we'll contact you only when a study matches your profile.</p>
          <Link to="/research-registry" className="inline-block bg-white text-primary px-10 py-4 rounded-md font-bold shadow-lg hover:bg-surface transition-all">
            Join the Research Registry
          </Link>
        </div>
      </section>
    </Layout>
  );
}
