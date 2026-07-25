import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import { Mail, MapPin } from "lucide-react";

interface Section {
  title: string;
  body: React.ReactNode;
}

const sections: Section[] = [
  {
    title: "2. Information We Collect",
    body: (
      <>
        <p>
          To provide our logistics management and ERP software, we collect the following types of
          information:
        </p>

        <h4 className="font-bold text-foreground mt-6 mb-2">Account & Profile Information</h4>
        <p>
          Names, email addresses, phone numbers, and company details when you create an account or
          use our CRM modules.
        </p>

        <h4 className="font-bold text-foreground mt-6 mb-2">Logistics & Freight Data</h4>
        <p>
          Cargo details, shipping manifests, origin/destination addresses, warehouse inventory
          metrics, and real-time transit information required for our ERP and freight portals to
          function.
        </p>

        <h4 className="font-bold text-foreground mt-6 mb-2">Technical & Usage Data</h4>
        <p>
          IP addresses, browser types, and system activity logs. Because our platforms operate on a
          three-tier architecture utilizing the PHP Laravel web framework and Oracle relational
          databases, we monitor system performance and database queries to ensure operational
          stability and security.
        </p>
      </>
    ),
  },
  {
    title: "3. How We Use Your Information",
    body: (
      <>
        <p>We use the data we collect specifically to operate and improve our software suites. Your information allows us to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Provide real-time cargo tracking, workflow automation, and analytics through our Logistics ERP.</li>
          <li>Manage online inventory, generate automated transport alerts, and process order management within our Warehouse & Distribution tools.</li>
          <li>Centralize client data and facilitate automated communication tools via our CRM modules.</li>
          <li>Maintain the security and integrity of our Oracle databases and web infrastructure.</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Data Security",
    body: (
      <p>
        Protecting your supply chain data is a priority. We implement industry-standard
        administrative, technical, and physical security measures tailored to our three-tier
        application architecture. This structural separation between our presentation, application
        (Laravel), and data (Oracle) layers helps isolate and protect sensitive freight and client
        data from unauthorized access.
      </p>
    ),
  },
  {
    title: "5. Data Sharing and Third Parties",
    body: (
      <>
        <p>We do not sell your personal data. We may share information with:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <span className="font-semibold text-foreground">Integrated Carriers & Logistics Partners:</span>{" "}
            To facilitate seamless freight operations, real-time tracking, and automated transport alerts.
          </li>
          <li>
            <span className="font-semibold text-foreground">Service Providers:</span>{" "}
            Cloud hosting services and secure infrastructure partners that help run our software solutions across our Singapore and Chennai nodes.
          </li>
          <li>
            <span className="font-semibold text-foreground">Legal & Regulatory Authorities:</span>{" "}
            If required by law to comply with customs regulations, international shipping compliance, or valid legal requests.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "6. International Data Transfers",
    body: (
      <p>
        As a company founded in Singapore (2007) with expanded operations in Chennai, India (2014),
        your data may be processed and stored across these locations. We ensure that appropriate data
        protection agreements and security protocols are in place for cross-border data transfers.
      </p>
    ),
  },
  {
    title: "7. Your Data Rights",
    body: (
      <p>
        Depending on your jurisdiction, you may have the right to access, correct, or delete your
        personal data stored within our CRM or ERP modules. If you are using our software through
        your employer (our direct client), please contact your company's system administrator first
        to facilitate data requests.
      </p>
    ),
  },
  {
    title: "8. Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy to reflect changes in our software features, technology
        stack, or legal requirements. We will notify you of any material changes by updating the
        "Effective Date" at the top of this policy and providing notices within your software
        dashboard.
      </p>
    ),
  },
];

const PrivacyPolicy = () => (
  <PageShell>
    <PageHero
      eyebrow="LEGAL"
      title="Privacy Policy"
      subtitle="Welcome to Shipsoft (also known as Shipsoft Solutions). Here's how we collect, use, safeguard, and disclose information when you use our web applications, platforms, and services."
    />

    <section className="py-20 lg:py-24 bg-background">
      <div className="container">
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border/50 mb-12 text-sm text-muted-foreground leading-relaxed space-y-3">
            <p>
              <span className="font-semibold text-foreground">Effective Date:</span> 25 July 2026
            </p>
            <p>
              <span className="font-semibold text-foreground">1. Introduction.</span>{" "}
              Welcome to Shipsoft (also known as Shipsoft Solutions). We are a logistics and supply
              chain software company headquartered in Singapore, with regional operations in Chennai,
              India. We specialize in providing web-based enterprise resource planning (ERP), freight
              portals, and custom digital tools designed for the logistics, warehousing, and
              e-commerce shipping industries.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, safeguard, and disclose information
              when you use our web applications, platforms, and services.
            </p>
          </div>

          <div className="space-y-14">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-2xl font-bold leading-tight mb-4 text-foreground">{s.title}</h2>
                <div className="text-muted-foreground leading-relaxed">{s.body}</div>
              </div>
            ))}

            <div>
              <h2 className="text-2xl font-bold leading-tight mb-4 text-foreground">9. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you have any questions about this Privacy Policy or how our software handles your
                data, please contact us at:
              </p>
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border/50 grid sm:grid-cols-2 gap-8">
                <div>
                  <div className="font-bold text-foreground mb-3">Singapore Headquarters</div>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>100 TRAS ST, #16-01, SINGAPORE 079027</span>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-foreground mb-3">Chennai Operations</div>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>
                      KAIZEN, 2nd & 3rd Floor, New No. G3 (Old No. G1), G Block, Plot No. 565Q, 18th
                      Street, Chinthamani, Anna Nagar East, Chennai 600102, India
                    </span>
                  </div>
                </div>
                <div className="sm:col-span-2 pt-2 border-t border-border/50">
                  <a
                    href="mailto:sales@shipsoft.co"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4 text-primary shrink-0" />
                    sales@shipsoft.co
                  </a>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-14 text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-8">
            By accessing our website or using our services, you acknowledge that you have read and
            understood this Privacy Policy.
          </p>
      </div>
    </section>
  </PageShell>
);

export default PrivacyPolicy;
