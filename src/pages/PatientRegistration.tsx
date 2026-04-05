import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function PatientRegistration() {
  return (
    <Layout>
      <SEO
        title="New Patient Registration"
        description="Register as a new patient for clinical trials at Southern Skies Research in Birmingham, Alabama. Download registration forms and release of medical records."
        canonical="/new-patient-registration"
      />

      <div className="max-w-7xl mx-auto px-8 py-20">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="max-w-3xl">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">
              Get Started
            </span>
            <h1 className="font-headline text-editorial-lg font-extrabold text-on-surface mb-8">
              New Patient Registration Forms
            </h1>
            <p className="text-lg leading-relaxed text-on-surface-variant max-w-2xl">
              Please complete the following forms and bring them to your first
              visit. All information is handled in accordance with HIPAA
              regulations and maintained with strict clinical confidentiality.
            </p>
          </div>
        </section>

        {/* Forms Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Registration Form */}
          <div className="bg-surface-container-lowest p-10 rounded-xl ghost-border transition-all hover:shadow-lg group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-3xl">
                  assignment
                </span>
              </div>
              <div>
                <h2 className="font-headline text-xl font-bold">
                  Registration Form
                </h2>
                <p className="text-on-surface-variant text-sm">PDF Document</p>
              </div>
            </div>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              Complete this form with your personal information, medical history,
              and current medications. This helps our team match you with
              appropriate clinical trials.
            </p>
            <a
              href="/documents/registration-form.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg active:scale-[0.98]"
            >
              <span className="material-symbols-outlined text-sm">
                download
              </span>
              Download Form
            </a>
          </div>

          {/* Release of Medical Records */}
          <div className="bg-surface-container-lowest p-10 rounded-xl ghost-border transition-all hover:shadow-lg group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-tertiary/10 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary text-3xl">
                  medical_information
                </span>
              </div>
              <div>
                <h2 className="font-headline text-xl font-bold">
                  Release of Medical Records
                </h2>
                <p className="text-on-surface-variant text-sm">PDF Document</p>
              </div>
            </div>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              This authorization form allows us to request relevant medical
              records from your healthcare providers to ensure your safety and
              eligibility for clinical studies.
            </p>
            <a
              href="/documents/release-of-medical-records.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg active:scale-[0.98]"
            >
              <span className="material-symbols-outlined text-sm">
                download
              </span>
              Download Form
            </a>
          </div>
        </section>

        {/* Instructions */}
        <section className="bg-surface-container-low rounded-xl p-10 mb-20">
          <h2 className="font-headline text-2xl font-bold mb-8">
            What to Bring to Your First Visit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <span
                className="material-symbols-outlined text-secondary text-2xl mt-1"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              <div>
                <p className="font-bold mb-1">Completed Forms</p>
                <p className="text-on-surface-variant text-sm">
                  Both the Registration Form and Release of Medical Records,
                  filled out and signed.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span
                className="material-symbols-outlined text-secondary text-2xl mt-1"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              <div>
                <p className="font-bold mb-1">Photo ID</p>
                <p className="text-on-surface-variant text-sm">
                  A valid government-issued photo identification (driver's
                  license, passport, etc.).
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span
                className="material-symbols-outlined text-secondary text-2xl mt-1"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              <div>
                <p className="font-bold mb-1">Insurance Card</p>
                <p className="text-on-surface-variant text-sm">
                  Your current health insurance card, if applicable. Many
                  studies cover all costs at no charge to you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HIPAA Notice */}
        <section className="flex items-start gap-4 bg-surface-container-lowest p-8 rounded-xl ghost-border max-w-3xl mb-20">
          <span className="material-symbols-outlined text-primary text-2xl flex-shrink-0 mt-0.5">
            verified_user
          </span>
          <div>
            <h3 className="font-bold mb-2">Your Privacy is Protected</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              All personal and medical information submitted through these forms
              is protected under HIPAA regulations. Your data is encrypted,
              stored securely, and only accessed by authorized research
              personnel directly involved in your care.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary-gradient rounded-2xl p-12 text-center text-on-primary relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-headline text-3xl font-extrabold mb-4">
              Have Questions?
            </h2>
            <p className="text-on-primary-container/80 text-lg mb-8">
              Our team is here to help you through the registration process and
              answer any questions about participating in clinical trials.
            </p>
            <Link
              to="/about-contact"
              className="inline-block bg-secondary-container text-on-secondary-container px-10 py-4 rounded-lg font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
