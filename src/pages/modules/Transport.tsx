import ModulePage from "@/components/site/ModulePage";
import { MapPin, Building2, Anchor, FileText, SplitSquareHorizontal, Truck } from "lucide-react";

const features = [
  { icon: MapPin, title: "Cities & Zones", desc: "City Master & Zone Master configuration." },
  { icon: Building2, title: "Domestic Pricing", desc: "City and Zone level prices for domestic transportation." },
  { icon: Anchor, title: "Port/Place Pricing", desc: "Pickup and delivery pricing from load/unload port to pickup/delivery place." },
  { icon: FileText, title: "LTL/FTL Quotes", desc: "Domestic transport quotations based on pickup/delivery and cargo details." },
  { icon: SplitSquareHorizontal, title: "Separate Quotes", desc: "Separate quotations for pickup and delivery based on customer request." },
  { icon: Truck, title: "Track Shipments", desc: "Request quotes, view cargo, create jobs, track status, attach documents and capture driver/truck signatures." },
];

const Transport = () => (
  <ModulePage
    title="Transport Management System"
    heroSubtitle="Plan, execute, and monitor the movement of goods with maximum efficiency."
    introHeading="Transport Management System"
    introParagraphs={[
      "Shipsoft's Transport Management System (TMS) is a vital solution for modern logistics, designed to plan, execute, and monitor the movement of goods with maximum efficiency. Using advanced algorithms and real-time data, the system optimizes routing, consolidates shipments, and manages carriers — reducing costs while improving delivery speed and reliability.",
      "With seamless integration into existing logistics and enterprise systems, Shipsoft's TMS ensures smooth data exchange across the supply chain. This empowers stakeholders with real-time insights and enables faster, more informed decision-making.",
      "The TMS enhances visibility and control over the entire transportation process — companies can monitor shipments in real-time, track performance metrics, and generate detailed reports across their transportation operations.",
    ]}
    highlight="Designed to meet all the requirements for processing shipments — domestic and international."
    features={features}
  />
);

export default Transport;
