import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageLoader from "./PageLoader";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import Team from "@/components/Team";
import Service from "./pages/Services";
import Gallery from "@/components/Gallery";
import Blog from "./pages/Blog";
import Preloader from "./Preloader";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <RouteChangeLoaderWrapper>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/service" element={<Service />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </RouteChangeLoaderWrapper>
    </BrowserRouter>
  </QueryClientProvider>
);


function RouteChangeLoaderWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700); // Adjust duration as needed
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <PageLoader />}
      {children}
    </>
  );
}

export default App;
