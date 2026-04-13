import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import OurApproach from "./pages/OurApproach";
import About from "./pages/About";
import Heritage from "./pages/Heritage";
import Leadership from "./pages/Leadership";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/capabilities/machining" element={<Machining />} />
          <Route path="/capabilities/gear-cutting" element={<GearCutting />} />
          <Route path="/capabilities/assembly" element={<CapAssembly />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/what-we-make" element={<WhatWeMake />} />
          <Route path="/our-approach" element={<OurApproach />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/heritage" element={<Heritage />} />
          <Route path="/about/leadership" element={<Leadership />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
