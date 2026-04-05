import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load pages for code splitting
const Home = lazy(() => import("./pages/Home"));
const CurrentTrials = lazy(() => import("./pages/CurrentTrials"));
const ForResearchers = lazy(() => import("./pages/ForResearchers"));
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
            <Route path="/current-trials" element={<CurrentTrials />} />
            <Route path="/for-researchers" element={<ForResearchers />} />
            <Route path="/about-contact" element={<AboutContact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}
