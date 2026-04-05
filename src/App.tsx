import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import CurrentTrials from "./pages/CurrentTrials";
import ForResearchers from "./pages/ForResearchers";
import AboutContact from "./pages/AboutContact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/current-trials" element={<CurrentTrials />} />
        <Route path="/for-researchers" element={<ForResearchers />} />
        <Route path="/about-contact" element={<AboutContact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
