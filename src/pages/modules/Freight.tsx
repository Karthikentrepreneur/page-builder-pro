import ModulePage from "@/components/site/ModulePage";
import { Calendar, Plane, Layers, Combine, FileText, Building, Copy, BarChart3, Network, LayoutDashboard, Printer, Globe, MapPin, FileCheck, Paperclip, FileDigit, Eye, Library, User, Activity } from "lucide-react";

const features = [
  { icon: Calendar, title: "Ship Schedule", desc: "Sailing schedule and import sailing schedule management." },
  { icon: Plane, title: "Air/Sea Booking", desc: "Air & sea bookings for both import and export operations." },
  { icon: Layers, title: "Manage Bookings", desc: "Merge & split booking option for flexible shipment handling." },
  { icon: Combine, title: "Consolidation", desc: "Air & sea consolidation for import and export shipments." },
  { icon: FileText, title: "Submit Shipping Instructions", desc: "SI submission for buying, selling, and quotation workflows." },
  { icon: Building, title: "CFS Services", desc: "Container Freight Station operations management." },
  { icon: Copy, title: "Shipment Replication", desc: "Copy consolidation shipments across companies or branches." },
  { icon: BarChart3, title: "Consolidation Reports", desc: "Detailed consolidation shipment reports for visibility." },
  { icon: Network, title: "EDI Integration", desc: "EDI integration with agents and trade partners." },
  { icon: LayoutDashboard, title: "Freight Dashboard", desc: "Dedicated freight forwarding dashboards for daily operations." },
  { icon: Printer, title: "Print e-Bill of Lading", desc: "Print E-BL on location, complete with stamp and signature." },
  { icon: Globe, title: "Book & Track Online", desc: "Customers can book online with auto email to CS and booking team." },
  { icon: MapPin, title: "Shipment Tracking Portal", desc: "Total milestone visibility with API integration for clients and partners." },
  { icon: FileCheck, title: "Request & Compare Quotes", desc: "Submit RFQs and view valid quotes and trans-shipment tariffs." },
  { icon: Paperclip, title: "Document Attachment", desc: "Clip documents and images directly to shipments in the system." },
  { icon: FileDigit, title: "Digital Documents", desc: "e-Booking, eSI submission, e-D/O, and e-B/L." },
  { icon: Eye, title: "Shipment Tracking", desc: "Real-time shipment status and tracking visibility." },
  { icon: Library, title: "Document Library", desc: "Centralised document visibility online for all stakeholders." },
  { icon: User, title: "Personalized View", desc: "Customizable dashboards tailored to user roles." },
  { icon: Activity, title: "Activity Stream", desc: "Customised interface of activities, milestone updates, and email notifications." },
];

const Freight = () => (
  <ModulePage
    title="Freight Management System"
    heroSubtitle="Total control and visibility of shipments at all times — for you and your customers."
    introHeading="Freight Management Software"
    introParagraphs={[
      "Shipsoft Solutions is a leading logistics technology provider, delivering innovative freight management software built to simplify and optimize freight forwarding. Designed with logistics professionals in mind, our user-friendly platform replaces manual processes with automated workflows — enhancing accuracy, speed, and overall efficiency.",
      "Shipsoft empowers freight forwarders to digitize their operations, improve productivity, and reduce delays and errors. Its flexible architecture supports seamless integration with partners, vendors, and customers, enabling real-time collaboration and communication across the global supply chain.",
      "With real-time access to data and shipment status, businesses gain agility, transparency, and control — allowing them to respond faster to market changes and customer needs.",
    ]}
    highlight="A comprehensive freight management system that provides total control and visibility of shipments at all times."
    features={features}
  />
);

export default Freight;
