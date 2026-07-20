import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import RouteTracker from "@/components/RouteTracker";
import CookieConsent from "@/components/CookieConsent";
import Privacy from "./pages/Privacy";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Capabilities from "./pages/Capabilities";
import Machining from "./pages/CapMachining";
import GearCutting from "./pages/CapGearCutting";
import CapAssembly from "./pages/CapAssembly";
import Technologies from "./pages/Technologies";
import WhatWeMake from "./pages/WhatWeMake";
import WorkingWithPentagon from "./pages/OurApproach";
import About from "./pages/About";
import Heritage from "./pages/Heritage";
import Leadership from "./pages/Leadership";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <RouteTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/capabilities/machining" element={<Machining />} />
          <Route path="/capabilities/gear-cutting" element={<GearCutting />} />
          <Route path="/capabilities/assembly" element={<CapAssembly />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/what-we-make" element={<WhatWeMake />} />
          <Route path="/working-with-pentagon" element={<WorkingWithPentagon />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/heritage" element={<Heritage />} />
          <Route path="/about/heritage-v1" element={<Navigate to="/about/heritage" replace />} />
          <Route path="/about/heritage-v2" element={<Navigate to="/about/heritage" replace />} />
          <Route path="/about/heritage-v3" element={<Navigate to="/about/heritage" replace />} />
          <Route path="/about/heritage-v4" element={<Navigate to="/about/heritage" replace />} />
          <Route path="/about/leadership" element={<Leadership />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
