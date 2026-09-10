import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/components/AuthContext";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { RegionProvider } from "@/contexts/RegionContext";

// Website Pages
import Index, { GlobalHome } from "./pages/Index.tsx";
import IndiaHome from "./pages/IndiaHome.tsx";
import About from "./pages/About.tsx";
import Features from "./pages/Features.tsx";
import Contact from "./pages/Contact.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsAndConditions from "./pages/TermsAndConditions.tsx";

// ERP Modules
import CRM from "./pages/modules/CRM.tsx";
import Freight from "./pages/modules/Freight.tsx";
import Warehouse from "./pages/modules/Warehouse.tsx";
import Transport from "./pages/modules/Transport.tsx";
import Accounts from "./pages/modules/Accounts.tsx";
import Distribution from "./pages/modules/Distribution.tsx";

// Services & Company Pages
import Services from "./pages/Services.tsx";
import Documentation from "./pages/services/Documentation.tsx";
import SalesSupport from "./pages/services/SalesSupport.tsx";
import AccountsManagement from "./pages/services/AccountsManagement.tsx";
import CustomerService from "./pages/services/CustomerService.tsx";
import SoftwareSolutions from "./pages/services/SoftwareSolutions.tsx";
import Careers from "./pages/Careers.tsx";
import Clients from "./pages/Clients.tsx";
import Founders from "./pages/Founders.tsx";
import EmployeesCorner from "./pages/EmployeesCorner.tsx";

// Admin Management
import AdminLogin from "./pages/AdminLogin.tsx";
import AdminEditor from "./pages/AdminEditor.tsx";

import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/site/ScrollToTop.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <ErrorBoundary>
          <RegionProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                {/* Main Website Routes */}
                <Route path="/" element={<Index />} />
                <Route path="/india" element={<IndiaHome />} />
                <Route path="/global" element={<GlobalHome />} />
                <Route path="/about" element={<About />} />
              <Route path="/features" element={<Features />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/contact-us.php" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

              {/* Module Routes */}
              <Route path="/modules/crm" element={<CRM />} />
              <Route path="/modules/freight" element={<Freight />} />
              <Route path="/modules/warehouse" element={<Warehouse />} />
              <Route path="/modules/transport" element={<Transport />} />
              <Route path="/modules/accounts" element={<Accounts />} />
              <Route path="/modules/distribution" element={<Distribution />} />

              {/* Company & Services Routes */}
              <Route path="/services" element={<Services />} />
              <Route path="/services/documentation" element={<Documentation />} />
              <Route path="/services/salessupport" element={<SalesSupport />} />
              <Route path="/services/FinancialManagement" element={<AccountsManagement />} />
              <Route path="/services/customerservice" element={<CustomerService />} />
              <Route path="/services/SoftwareSolutions" element={<SoftwareSolutions />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/our-team" element={<Founders />} />
              <Route path="/employees-corner" element={<EmployeesCorner />} />

              {/* Admin Routes */}
              <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/editor" element={<AdminEditor />} />

              {/* Catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          </RegionProvider>
        </ErrorBoundary>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
