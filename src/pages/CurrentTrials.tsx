import { useState } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const departments = ["All Trials", "Dermatology", "Cardiology", "Oncology", "Neurology"];

const trials = [
  {
    id: 1,
    title: "Advanced Atopic Dermatitis Biological Study",
    department: "Dermatology",
    status: "Recruiting",
    location: "Birmingham area",
    description:
      "Evaluating the long-term efficacy and safety of a novel monoclonal antibody for adults with moderate-to-severe atopic dermatitis who are inadequately controlled by topical therapies.",
    featured: true,
    size: "large",
  },
  {
    id: 2,
    title: "Post-MI Care Regimen Phase III",
    department: "Cardiology",
    status: "Recruiting",
    description:
      "Investigating a combined pharmaceutical and digital monitoring approach for post-myocardial infarction recovery protocols.",
    size: "small",
  },
  {
    id: 3,
    title: "Early Stage Lung Cancer Immunotherapy",
    department: "Oncology",
    status: "Full / Waitlist",
    description:
      "Evaluating the safety of a new immunotherapy combined with standard care for early-stage patients.",
    size: "small",
  },
  {
    id: 4,
    title: "Metabolic Response in Type 2 Diabetes",
    department: "Neurology",
    status: "Recruiting",
    researchId: "AL-8842",
    description:
      "A focused study on glycemic variability using next-gen continuous monitoring hardware. Participants receive compensation for time and travel.",
    duration: "12 Months",
    participants: "120 Participants",
    featured: true,
    size: "wide",
  },
];

export default function CurrentTrials() {
  const [activeFilter, setActiveFilter] = useState("All Trials");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTrials = trials.filter((trial) => {
    const matchesDept =
      activeFilter === "All Trials" || trial.department === activeFilter;
    const matchesSearch =
      searchQuery === "" ||
      trial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trial.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <Layout>
      <SEO
        title="Current Clinical Trials"
        description="Browse active clinical trials in Birmingham, Alabama. Search by condition, medication, or specialty including dermatology, cardiology, oncology, and neurology."
        canonical="/current-trials"
      />
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Hero Search */}
        <div className="mb-16">
          <h1 className="text-editorial-lg font-headline font-extrabold tracking-tight text-on-surface leading-tight mb-6">
            Alabama's Premier <br /> Clinical Research Hub.
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
            Connect with groundbreaking medical research in Birmingham. Search
            our active registry of clinical trials and contribute to the future
            of healthcare.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl">
            <div className="relative flex-grow">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                search
              </span>
              <input
                className="w-full pl-12 pr-4 py-4 bg-surface-container-lowest border-2 border-transparent focus:border-primary focus:ring-0 rounded-lg text-on-surface transition-all"
                placeholder="Search by condition, medication, or keyword..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="bg-primary text-on-primary px-8 py-4 font-semibold rounded-lg flex items-center justify-center gap-2 transition-all hover:shadow-lg active:scale-[0.98]">
              Find Trials
            </button>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <span className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mr-2">
            Filter by Department:
          </span>
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveFilter(dept)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === dept
                  ? "bg-primary-container text-on-primary-container font-semibold"
                  : "bg-surface-container-high text-on-surface-variant hover:bg-surface-variant"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Trials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {filteredTrials.map((trial) => {
            if (trial.size === "large") {
              return (
                <div key={trial.id} className="md:col-span-8 group">
                  <div className="bg-surface-container-lowest rounded-xl p-10 h-full border border-outline-variant/15 transition-all hover:border-primary/30 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[0.65rem] font-bold uppercase tracking-widest rounded-sm">
                          {trial.status}
                        </span>
                        {trial.location && (
                          <span className="text-sm text-on-surface-variant font-medium flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">
                              location_on
                            </span>
                            {trial.location}
                          </span>
                        )}
                      </div>
                      <h3 className="text-3xl font-headline font-bold text-on-surface mb-4 leading-tight">
                        {trial.title}
                      </h3>
                      <p className="text-on-surface-variant text-lg leading-relaxed mb-8 max-w-2xl">
                        {trial.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-end border-t border-outline-variant/10 pt-8">
                      <button className="bg-primary text-white px-8 py-3 rounded font-bold transition-all hover:bg-primary-container active:scale-[0.98]">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            }

            if (trial.size === "wide") {
              return (
                <div key={trial.id} className="md:col-span-8 group">
                  <div className="bg-surface-container-lowest rounded-xl p-10 h-full border border-outline-variant/15 flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden bg-slate-100">
                      <img
                        alt="Microscopic view of biological cells in clinical research"
                        className="w-full h-full object-cover"
                        src="/images/cells.jpg"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container text-[0.6rem] font-bold uppercase tracking-tighter rounded-sm">
                          Featured Trial
                        </span>
                        {trial.researchId && (
                          <span className="text-xs font-bold text-outline uppercase tracking-widest">
                            Research ID: {trial.researchId}
                          </span>
                        )}
                      </div>
                      <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">
                        {trial.title}
                      </h3>
                      <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                        {trial.description}
                      </p>
                      <div className="flex items-center gap-6">
                        {trial.duration && (
                          <span className="text-xs font-medium text-on-surface-variant flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px]">
                              calendar_today
                            </span>
                            {trial.duration}
                          </span>
                        )}
                        {trial.participants && (
                          <span className="text-xs font-medium text-on-surface-variant flex items-center gap-1">
                            <span className="material-symbols-outlined text-[16px]">
                              group
                            </span>
                            {trial.participants}
                          </span>
                        )}
                        <button className="ml-auto text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                          Details
                          <span className="material-symbols-outlined text-sm">
                            arrow_forward
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Small cards
            return (
              <div key={trial.id} className="md:col-span-4 group">
                <div className="bg-surface-container-low rounded-xl p-8 h-full transition-all hover:bg-white border border-transparent hover:border-outline-variant/30 flex flex-col">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="px-3 py-1 bg-tertiary-container text-on-tertiary-container text-[0.65rem] font-bold uppercase tracking-widest rounded-sm">
                      {trial.department}
                    </span>
                  </div>
                  <h3 className="text-xl font-headline font-bold text-on-surface mb-3">
                    {trial.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-8 flex-grow">
                    {trial.description}
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-semibold text-on-surface-variant uppercase">
                      <span>Status</span>
                      <span
                        className={
                          trial.status === "Recruiting"
                            ? "text-primary"
                            : "text-secondary"
                        }
                      >
                        {trial.status}
                      </span>
                    </div>
                    <button className="w-full py-3 text-primary font-bold border-b border-primary/20 hover:border-primary transition-all text-sm text-left">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <section className="mt-24 rounded-2xl bg-primary-container p-12 text-center text-on-primary-container relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl font-headline font-extrabold mb-6">
              Don't see the right study?
            </h2>
            <p className="text-xl mb-10 text-on-tertiary-container/80 font-medium">
              Join our Patient Registry to be notified as soon as a trial
              matching your medical profile becomes available in Alabama.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-10 py-4 rounded-lg font-bold shadow-lg transition-all hover:bg-surface active:scale-[0.98]">
                Join Registry
              </button>
              <button className="border-2 border-white/30 text-white px-10 py-4 rounded-lg font-bold hover:bg-white/10 transition-all active:scale-[0.98]">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
