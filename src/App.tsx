
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/components/AuthContext";
import { ErrorBoundary } from "@/components/ErrorBoundary";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Documentation from "./pages/services/Documentation"; // Keep this import
import DigitalMarketing from "./pages/services/DigitalMarketing";
import AccountsManagement from "./pages/services/AccountsManagement";
import CustomerService from "./pages/services/CustomerService";
import SoftwareSolutions from "./pages/services/SoftwareSolutions";
import Careers from "./pages/Careers";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import Founders from "./pages/Founders";
import EmployeesCorner from "./pages/EmployeesCorner";
import SalesSupport from "./pages/services/SalesSupport"; // Add this import
import AdminLogin from "./pages/AdminLogin";
import AdminEditor from "./pages/AdminEditor";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App: React.FC = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <ErrorBoundary>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/documentation" element={<Documentation />} />
                <Route path="/services/salessupport" element={<SalesSupport />} /> {/* Add this route */}
                <Route path="/services/FinancialManagement" element={<AccountsManagement />} /> {/* Keep this route */}
                <Route path="/services/customerservice" element={<CustomerService />} />
                <Route path="/services/SoftwareSolutions" element={<SoftwareSolutions />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/contact-us.php" element={<Contact />} />
                <Route path="/our-team" element={<Founders />} />
                <Route path="/employees-corner" element={<EmployeesCorner />} />
                <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/editor" element={<AdminEditor />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </ErrorBoundary>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
