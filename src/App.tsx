
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatButtons from "./components/FloatButtons";
import CookieConsent from "./components/CookieConsent";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import BuyPage from "./pages/BuyPage";
import SellPage from "./pages/SellPage";
import ServicesPage from "./pages/ServicesPage";
import FinancingPage from "./pages/FinancingPage";
import ContactPage from "./pages/ContactPage";
import CarDetailPage from "./pages/CarDetailPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/buy" element={<BuyPage />} />
              <Route path="/buy/:carId" element={<CarDetailPage />} />
              <Route path="/sell" element={<SellPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/financing" element={<FinancingPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <FloatButtons />
          <CookieConsent />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
