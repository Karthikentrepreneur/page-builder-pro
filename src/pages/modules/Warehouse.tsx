import ModulePage from "@/components/site/ModulePage";
import { Lock, Users, Eye, FileText, Network, BarChart3, Globe, Building2, DollarSign, Smartphone, ShoppingCart, Truck, Package, AppWindow, Database, Warehouse as WarehouseIcon } from "lucide-react";

const features = [
  { icon: Lock, title: "Secure Access", desc: "High-level security settings to protect your data." },
  { icon: Users, title: "Multi-User/Location Access", desc: "Multi-user access from anywhere for 3PL & 4PL operations." },
  { icon: Eye, title: "Real-Time Inventory Visibility", desc: "Online stock enquiry through the web." },
  { icon: FileText, title: "Customized Invoicing", desc: "Commercial invoices to customers in their preferred format." },
  { icon: Network, title: "B2B Integration", desc: "B2B integration with customers and EDI facility." },
  { icon: BarChart3, title: "Business Intelligence Tools", desc: "Dashboards, MIS, operational and finance reports." },
  { icon: Globe, title: "Web-Based Tracking", desc: "Order tracking and delivery milestone updates on web." },
  { icon: Building2, title: "Global Management", desc: "Multi-company, multi-branch, multi-location including overseas offices." },
  { icon: DollarSign, title: "Customizable Financial Module", desc: "Integrated, customisable financial module based on client inputs." },
  { icon: Smartphone, title: "Mobile Warehouse Operations", desc: "Mobile device & barcode scanner access for put-away, picking, and cycle counts." },
  { icon: ShoppingCart, title: "Online Order Management", desc: "Order placement, status checks, alerts, and re-order cycle setup." },
  { icon: Truck, title: "Order Tracking & Delivery", desc: "Track dispatch date, mode, delivery date and more after order placement." },
  { icon: Package, title: "Import & Finance Integration", desc: "WMS integrated with Import & Finance and EDI to generate ASN." },
  { icon: AppWindow, title: "Customer Order Portal", desc: "App-based PO & sales order management with WMS and Finance." },
  { icon: Database, title: "Seamless Data Integration", desc: "Online scanning, auto inventory updates, and EDI data sync with customer systems." },
  { icon: WarehouseIcon, title: "Multi-Warehouse Management", desc: "Centralised inventory control across multiple DCs with auto pick lists from nearest DC." },
];

const Warehouse = () => (
  <ModulePage
    title="Warehouse Management System"
    heroSubtitle="Total visibility and control over warehouse operations — from receiving to shipping."
    introHeading="Warehouse Management System Software"
    introParagraphs={[
      "Shipsoft's WMS is a robust, customizable solution that delivers full visibility and control over your warehouse operations. Designed to streamline processes from receiving to shipping, it helps businesses boost efficiency, accuracy, and productivity.",
      "Our WMS is capable of interfacing with clients and suppliers, helping streamline processes and improve productivity while saving time and money. In today's dynamic economy, connected consumers want flexibility and visibility in an ever-changing environment.",
      "Our cloud-based warehouse management system prepares you for tomorrow's supply chain, today — empowering you to respond quickly to customer requests with live information available from our software and portal.",
    ]}
    highlight="More than an inventory tool — an integrated solution that enhances every aspect of warehouse management."
    features={features}
  />
);

export default Warehouse;
