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

const Distribution = () => (
  <ModulePage
    title="Distribution Management System"
    heroSubtitle="Streamline the movement of goods from manufacturers to customers."
    introHeading="Distribution Management Software"
    introParagraphs={[
      "A Distribution Management System (DMS) is essential for streamlining the movement of goods from manufacturers to customers. By integrating with warehouse and transport management systems, it ensures seamless coordination across the supply chain. With real-time inventory visibility, businesses can maintain optimal stock levels, reduce holding costs, and avoid shortages or overstocking.",
      "The DMS automates order processing, picking, packing, and shipping — minimizing errors and speeding up deliveries. This leads to improved accuracy, faster fulfilment, and greater customer satisfaction. It also offers robust tracking and reporting tools, enabling data-driven decisions that enhance efficiency and reduce costs.",
      "In today's competitive market, a DMS is more than a logistics tool — it's a strategic solution that empowers businesses to adapt, scale, and deliver superior service.",
    ]}
    highlight="Designed to serve dealers and agencies on a single platform — with automatic email alerts and email-based approvals."
    features={features}
  />
);

export default Distribution;
