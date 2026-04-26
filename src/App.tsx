import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Features from "./pages/Features.tsx";
import Contact from "./pages/Contact.tsx";
import CRM from "./pages/modules/CRM.tsx";
import Freight from "./pages/modules/Freight.tsx";
import Warehouse from "./pages/modules/Warehouse.tsx";
import Transport from "./pages/modules/Transport.tsx";
import Accounts from "./pages/modules/Accounts.tsx";
import Distribution from "./pages/modules/Distribution.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/modules/crm" element={<CRM />} />
          <Route path="/modules/freight" element={<Freight />} />
          <Route path="/modules/warehouse" element={<Warehouse />} />
          <Route path="/modules/transport" element={<Transport />} />
          <Route path="/modules/accounts" element={<Accounts />} />
          <Route path="/modules/distribution" element={<Distribution />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
