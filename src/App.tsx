import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/components/AuthContext";
import { ErrorBoundary } from "@/components/ErrorBoundary";

// Main Root Index (detects India vs Global)
import Index from "./pages/Index";
import NewIndex from "./pages/NewIndex";
import OldIndex from "./pages/OldIndex";

// Pages from New Website
import About from "./pages/About";
import Services from "./pages/Services";
import Documentation from "./pages/services/Documentation";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import AccountsManagement from "./pages/services/AccountsManagement";
import CustomerService from "./pages/services/CustomerService";
import SoftwareSolutions from "./pages/services/SoftwareSolutions";
import Careers from "./pages/Careers";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import Founders from "./pages/Founders";
import EmployeesCorner from "./pages/EmployeesCorner";
import SalesSupport from "./pages/services/SalesSupport";
import AdminLogin from "./pages/AdminLogin";
import AdminEditor from "./pages/AdminEditor";
import NotFound from "./pages/NotFound";

// Pages from Old ERP Website
import CRM from "./pages/modules/CRM";
import Freight from "./pages/modules/Freight";
import Warehouse from "./pages/modules/Warehouse";
import Transport from "./pages/modules/Transport";
import Accounts from "./pages/modules/Accounts";
import Distribution from "./pages/modules/Distribution";

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
                {/* Root Route: Shows New Page for India, Old Page otherwise */}
                <Route path="/" element={<Index />} />
                <Route path="/india" element={<NewIndex />} />
                <Route path="/global" element={<OldIndex />} />

                {/* New Website Routes */}
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/documentation" element={<Documentation />} />
                <Route path="/services/salessupport" element={<SalesSupport />} />
                <Route path="/services/FinancialManagement" element={<AccountsManagement />} />
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

                {/* Old Website ERP Module Routes */}
                <Route path="/modules/crm" element={<CRM />} />
                <Route path="/modules/freight" element={<Freight />} />
                <Route path="/modules/warehouse" element={<Warehouse />} />
                <Route path="/modules/transport" element={<Transport />} />
                <Route path="/modules/accounts" element={<Accounts />} />
                <Route path="/modules/distribution" element={<Distribution />} />

                {/* Catch-all */}
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
