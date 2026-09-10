import ModulePage from "@/components/site/ModulePage";
import { Workflow, Users, FileText, TrendingUp, Settings, BarChart3, PhoneCall, HeadphonesIcon, DollarSign } from "lucide-react";

const features = [
  { icon: DollarSign, title: "Pricing Management", desc: "Tariff Maintenance, Master Rates, Origin Charges, Destination Charges, Freight Charges, and more." },
  { icon: BarChart3, title: "Reporting & Analytics", desc: "Consolidated dashboard, performance reports, sales reports, enhanced analytics, and visual presentations." },
  { icon: PhoneCall, title: "Sales Activities", desc: "Customer creation, sales lead assignment, calls, meeting scheduling, quotation creation, and bookings." },
  { icon: HeadphonesIcon, title: "Support & Help", desc: "Customer feedback, customer enquiry, and internal flash news option." },
  { icon: Users, title: "Sales", desc: "Customer contact and sales territory management." },
  { icon: FileText, title: "Pricing & Quotation", desc: "Pricing and quotation modules to streamline customer offers." },
  { icon: Workflow, title: "Streamlined Sales Workflows", desc: "Automate the sales process from lead generation to deal closure with real-time insights." },
  { icon: TrendingUp, title: "Smart Pricing Optimization", desc: "Use historical data and customer trends to set competitive pricing strategies." },
  { icon: Settings, title: "Automated Administration", desc: "Built-in tools for invoices, contracts, and customer support reduce admin overhead." },
];

const CRM = () => (
  <ModulePage
    title="Customer Relationship Management"
    heroSubtitle="Drive profitability by streamlining customer interactions and internal workflows."
    introHeading="Customer Relationship Management Software"
    introParagraphs={[
      "Our CRM module is purpose-built to help businesses drive profitability by streamlining customer interactions and internal workflows. With a focus on improving efficiency, personalization, and data-driven decision-making, this powerful tool supports every stage of the customer lifecycle.",
      "By consolidating all customer-related data and interactions in one centralized system, the CRM module empowers your team to better understand and serve your clients. It strengthens customer engagement, boosts retention, and supports long-term business growth through smarter, more strategic relationship management.",
    ]}
    highlight="Empower yourself to manage all your company's relationships with customers and potential customers through technology."
    features={features}
  />
);

export default CRM;
