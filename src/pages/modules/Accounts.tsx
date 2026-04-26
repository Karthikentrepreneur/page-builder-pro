import ModulePage from "@/components/site/ModulePage";
import { Globe, TrendingUp, ShoppingCart, Boxes, CheckCircle2, Bell, Lock, BarChart3, Workflow } from "lucide-react";

const features = [
  { icon: Globe, title: "Accessible Anywhere", desc: "Web-based application accessible from anywhere via phone, iPad, etc." },
  { icon: TrendingUp, title: "Streamlined Sales", desc: "Easy sales planning, sales call feedback, and call scheduling." },
  { icon: ShoppingCart, title: "Self-Service Ordering", desc: "Customers place orders directly using login ID and password." },
  { icon: Boxes, title: "Inventory Management", desc: "Online inventory visibility, re-order cycle alerts, performance history." },
  { icon: CheckCircle2, title: "Seamless Approvals", desc: "Approvals through online interface and email." },
  { icon: Bell, title: "Automated Alerts", desc: "Auto alert notifications for confirmation and approvals." },
  { icon: Lock, title: "Price Control", desc: "Minimum selling price mechanism to control pricing." },
  { icon: BarChart3, title: "Insights", desc: "Customised reports for better visibility and management control." },
  { icon: Workflow, title: "Automated Workflow", desc: "Automatically notify departments to prepare delivery notes, transport, and invoices on order placement." },
];

const Accounts = () => (
  <ModulePage
    title="Accounts Management System"
    heroSubtitle="Streamline core accounting with real-time insights into your company's financial health."
    introHeading="Accounts Management System Software"
    introParagraphs={[
      "An Accounts Management System (AMS) is a critical tool for ensuring the financial stability, accuracy, and transparency of any organization. It streamlines and automates core accounting functions — such as general ledger, accounts payable and receivable, and financial reporting — providing real-time insights into the company's financial health.",
      "By automating routine tasks like invoice processing, account reconciliation, and report generation, the AMS reduces errors and allows finance teams to focus on strategic planning and analysis. The system enhances decision-making by delivering accurate, timely financial data to stakeholders, while also supporting regulatory compliance through detailed record-keeping and audit trails.",
      "Modern accounts management software also features intuitive, user-friendly interfaces and customizable dashboards, allowing businesses to tailor financial reports to their specific needs.",
    ]}
    highlight="Designed to serve dealers and agencies on a single platform — with automatic email alerts and email-based approvals."
    features={features}
  />
);

export default Accounts;
