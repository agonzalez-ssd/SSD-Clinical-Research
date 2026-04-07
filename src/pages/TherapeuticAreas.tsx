import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const conditions = [
  { name: "Atopic Dermatitis (Eczema)", icon: "dermatology", desc: "Chronic inflammatory skin condition causing itchy, red, and dry patches. Affects millions worldwide with limited long-term treatment options, making it a critical area for new therapeutic development." },
  { name: "Psoriasis", icon: "healing", desc: "Autoimmune condition causing rapid skin cell buildup resulting in scaling and inflammation. Research focuses on targeted biologics and novel small-molecule therapies for plaque, scalp, and nail psoriasis." },
  { name: "Alopecia Areata", icon: "face_retouching_natural", desc: "Autoimmune disorder causing unpredictable hair loss. Emerging JAK inhibitor therapies represent a significant breakthrough, and clinical trials are critical to expanding treatment options." },
  { name: "Vitiligo", icon: "contrast", desc: "Loss of skin pigmentation affecting quality of life. New topical and systemic treatments are showing promise in clinical trials for repigmentation and disease stabilization." },
  { name: "Hidradenitis Suppurativa", icon: "medication", desc: "Chronic, painful condition involving inflamed lumps under the skin. Highly underserved patient population with few FDA-approved treatments, making research participation especially impactful." },
  { name: "Acne Vulgaris", icon: "face", desc: "Severe and cystic acne requiring advanced treatment beyond standard topical therapy. Clinical trials explore novel mechanisms targeting inflammation, sebum production, and bacterial resistance." },
  { name: "Rosacea", icon: "visibility", desc: "Chronic facial redness and flushing with limited effective treatments. Research targets the underlying vascular and inflammatory pathways for more durable symptom control." },
  { name: "Prurigo Nodularis", icon: "emergency", desc: "Intensely itchy nodules causing significant distress and sleep disruption. A growing area of clinical research with several promising therapies in late-stage development." },
];

export default function TherapeuticAreas() {
  return (
    <Layout>
      <SEO
        title="Therapeutic Areas — Dermatology Conditions We Study"
        description="Southern Skies Clinical Research focuses on clinical trials for atopic dermatitis, psoriasis, alopecia, vitiligo, hidradenitis suppurativa, acne, rosacea, and prurigo nodularis."
        canonical="/therapeutic-areas"
      />

      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="max-w-3xl mb-16">
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Therapeutic Focus</span>
          <h1 className="font-headline text-editorial-lg font-extrabold text-on-surface mb-8">Conditions We Study</h1>
          <p className="text-xl text-on-surface-variant leading-relaxed">
            Our research focuses exclusively on dermatological conditions. With 15+ years of clinical dermatology experience, our investigators bring deep therapeutic expertise to every study.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {conditions.map((c) => (
            <div key={c.name} className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 hover:border-primary/20 transition-all hover:shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-2xl">{c.icon}</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-on-surface">{c.name}</h3>
              </div>
              <p className="text-on-surface-variant leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Registry CTA */}
        <div className="bg-primary-container rounded-2xl p-10 md:p-12 text-on-primary-container relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-bold mb-4 font-headline">Living with one of these conditions?</h2>
            <p className="text-lg opacity-90 mb-8">Join our research registry to be notified when a clinical trial matching your condition becomes available. There is no obligation to participate.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/research-registry" className="bg-white text-primary px-8 py-4 rounded-md font-bold shadow-lg hover:bg-surface transition-all">
                Join the Registry
              </Link>
              <Link to="/for-patients" className="border-2 border-white/30 text-white px-8 py-4 rounded-md font-bold hover:bg-white/10 transition-all">
                Learn About Participating
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
