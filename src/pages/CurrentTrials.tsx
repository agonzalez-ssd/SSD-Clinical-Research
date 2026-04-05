import { useState } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const departments = [
  "All Trials",
  "Musculoskeletal",
  "Cardiovascular",
  "Oncology",
  "Infectious Disease",
  "Endocrine",
  "Metabolic",
];

interface Trial {
  id: number;
  title: string;
  department: string;
  status: string;
  description: string;
  size: "large" | "small" | "wide";
  location?: string;
  link?: string;
}

const trials: Trial[] = [
  {
    id: 1,
    title: "Osteoarthritis",
    department: "Musculoskeletal",
    status: "Enrolling",
    description:
      "Inflammation of one or more joints. It is the most common form of arthritis that affects joints in the hand, spine, knees and hips.",
    size: "large",
    location: "Birmingham area",
  },
  {
    id: 2,
    title: "High Cholesterol",
    department: "Cardiovascular",
    status: "Enrolling",
    description:
      "An abnormal amount of cholesterol in blood cells and plasma. Associated with the risk of atherosclerosis.",
    link: "https://clinicaltrials.gov/ct2/show/NCT05142722",
    size: "small" ,
  },
  {
    id: 3,
    title: "Cancer Biomarkers",
    department: "Oncology",
    status: "Enrolling",
    description:
      "A blood draw to help discover molecules for early cancer detection.",
    size: "small" ,
  },
  {
    id: 4,
    title: "Cancer / Oncology Trials",
    department: "Oncology",
    status: "Enrolling",
    description: "Lung, Lymphoma, and Colorectal Cancer.",
    link: "https://clinicaltrials.gov/ct2/show/NCT04892472",
    size: "wide" ,
  },
  {
    id: 5,
    title: "Flu Treatment",
    department: "Infectious Disease",
    status: "Enrolling",
    description:
      "A disease caused by virus infecting the respiratory tract. If you're experiencing Flu-like symptoms after hours, please get in contact with us as soon as possible.",
    link: "https://clinicaltrials.gov/ct2/show/NCT03969212",
    size: "small" ,
  },
  {
    id: 6,
    title: "COVID-19 Treatment",
    department: "Infectious Disease",
    status: "Enrolling",
    description:
      "Finding a solution to lessen the burden of COVID-19.",
    size: "small" ,
  },
  {
    id: 7,
    title: "Hypothyroidism",
    department: "Endocrine",
    status: "Enrolling",
    description:
      "A dysfunction in thyroid gland function.",
    size: "small" ,
  },
  {
    id: 8,
    title: "High Blood Pressure",
    department: "Cardiovascular",
    status: "Enrolling",
    description:
      "High pressure in the arteries (vessels that carry blood from the heart to the rest of the body).",
    size: "small" ,
  },
  {
    id: 9,
    title: "COVID-19 Prevention",
    department: "Infectious Disease",
    status: "Enrolling",
    description:
      "A novel prevention medication to curtail the spread of COVID-19.",
    size: "small" ,
  },
  {
    id: 10,
    title: "Weight Loss",
    department: "Metabolic",
    status: "Enrolling",
    description:
      "Clinical studies focused on safe and effective weight management solutions. Compensation may be available for qualified participants.",
    size: "large" ,
    location: "Birmingham area",
  },
  {
    id: 11,
    title: "Healthy Volunteers",
    department: "All",
    status: "Always Open",
    description:
      "Healthy Volunteers are always welcome to be a part of our various studies. No specific condition required — help advance medical research while receiving compensation.",
    size: "wide" ,
  },
];

const departmentColors: Record<string, string> = {
  Musculoskeletal: "bg-secondary-container text-on-secondary-container",
  Cardiovascular: "bg-tertiary-container text-on-tertiary-container",
  Oncology: "bg-surface-container-highest text-on-surface-variant",
  "Infectious Disease": "bg-primary-container text-on-primary-container",
  Endocrine: "bg-primary-fixed text-on-primary-fixed",
  Metabolic: "bg-secondary-container text-on-secondary-container",
  All: "bg-surface-container-high text-on-surface-variant",
};

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
        description="Browse active clinical trials in Birmingham, Alabama. Studies in osteoarthritis, high cholesterol, cancer, flu treatment, hypothyroidism, weight loss, and more."
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
            const chipColor =
              departmentColors[trial.department] ||
              "bg-surface-container-high text-on-surface-variant";

            if (trial.size === "large") {
              return (
                <div key={trial.id} className="md:col-span-8 group">
                  <div className="bg-surface-container-lowest rounded-xl p-10 h-full border border-outline-variant/15 transition-all hover:border-primary/30 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <span
                          className={`px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest rounded-sm ${chipColor}`}
                        >
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
                    <div className="flex items-center justify-between border-t border-outline-variant/10 pt-8">
                      <span
                        className={`px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest rounded-sm ${chipColor}`}
                      >
                        {trial.department}
                      </span>
                      <div className="flex items-center gap-4">
                        {trial.link && (
                          <a
                            href={trial.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary text-sm font-bold flex items-center gap-1 hover:underline"
                          >
                            ClinicalTrials.gov
                            <span className="material-symbols-outlined text-sm">
                              open_in_new
                            </span>
                          </a>
                        )}
                        <button className="bg-primary text-white px-8 py-3 rounded font-bold transition-all hover:bg-primary-container active:scale-[0.98]">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            if (trial.size === "wide") {
              return (
                <div key={trial.id} className="md:col-span-12 group">
                  <div className="bg-primary-container/10 rounded-xl p-10 h-full border border-primary/10 flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-3xl">
                        {trial.title === "Healthy Volunteers"
                          ? "volunteer_activism"
                          : "science"}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-headline font-bold text-on-surface">
                          {trial.title}
                        </h3>
                        <span
                          className={`px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-tighter rounded-sm ${chipColor}`}
                        >
                          {trial.status}
                        </span>
                      </div>
                      <p className="text-on-surface-variant leading-relaxed mb-4">
                        {trial.description}
                      </p>
                      <div className="flex items-center gap-4">
                        {trial.link && (
                          <a
                            href={trial.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary text-sm font-bold flex items-center gap-1 hover:underline"
                          >
                            View on ClinicalTrials.gov
                            <span className="material-symbols-outlined text-sm">
                              open_in_new
                            </span>
                          </a>
                        )}
                      </div>
                    </div>
                    <button className="bg-primary text-white px-8 py-3 rounded font-bold transition-all hover:bg-primary-container active:scale-[0.98] flex-shrink-0">
                      Learn More
                    </button>
                  </div>
                </div>
              );
            }

            // Small cards
            return (
              <div key={trial.id} className="md:col-span-4 group">
                <div className="bg-surface-container-low rounded-xl p-8 h-full transition-all hover:bg-white border border-transparent hover:border-outline-variant/30 flex flex-col">
                  <div className="flex items-center gap-2 mb-6">
                    <span
                      className={`px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest rounded-sm ${chipColor}`}
                    >
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
                      <span className="text-primary">{trial.status}</span>
                    </div>
                    {trial.link ? (
                      <a
                        href={trial.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 text-primary font-bold border-b border-primary/20 hover:border-primary transition-all text-sm text-left flex items-center gap-1"
                      >
                        View on ClinicalTrials.gov
                        <span className="material-symbols-outlined text-sm">
                          open_in_new
                        </span>
                      </a>
                    ) : (
                      <button className="w-full py-3 text-primary font-bold border-b border-primary/20 hover:border-primary transition-all text-sm text-left">
                        View Details
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No results */}
        {filteredTrials.length === 0 && (
          <div className="text-center py-20">
            <span className="material-symbols-outlined text-6xl text-outline mb-4">
              search_off
            </span>
            <h3 className="font-headline text-xl font-bold mb-2">
              No trials found
            </h3>
            <p className="text-on-surface-variant">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}

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
