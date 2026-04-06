import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const ForPatients = lazy(() => import("./pages/ForPatients"));
const ForSponsors = lazy(() => import("./pages/ForSponsors"));
const TherapeuticAreas = lazy(() => import("./pages/TherapeuticAreas"));
const OurTeam = lazy(() => import("./pages/OurTeam"));
const ResearchRegistry = lazy(() => import("./pages/ResearchRegistry"));
const AboutContact = lazy(() => import("./pages/AboutContact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/for-patients" element={<ForPatients />} />
            <Route path="/for-sponsors" element={<ForSponsors />} />
            <Route path="/therapeutic-areas" element={<TherapeuticAreas />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/research-registry" element={<ResearchRegistry />} />
            <Route path="/about-contact" element={<AboutContact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}
