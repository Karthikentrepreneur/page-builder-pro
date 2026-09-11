import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import { Mail, MapPin } from "lucide-react";

interface Section {
  title: string;
  body: React.ReactNode;
}

const sections: Section[] = [
  {
    title: "2. Company Information",
    body: (
      <>
        <p>
          Shipsoft Solutions is headquartered in Singapore, with associated regional operations in
          Chennai, India. These Terms apply to all global operations, branches, and subsidiaries
          operating under the Shipsoft brand.
        </p>
        <p className="mt-4 text-sm italic">
          (Note: These Terms do not apply to the legacy "ShipSoft" parcel and freight suite offered
          by Varsity Logistics for IBM i / AS/400 systems).
        </p>
      </>
    ),
  },
  {
    title: "3. Description of Services",
    body: (
      <>
        <p>We provide web-based logistics and supply chain software, including:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <span className="font-semibold text-foreground">Logistics ERP:</span>{" "}
            Real-time cargo tracking, workflow automation, and analytics.
          </li>
          <li>
            <span className="font-semibold text-foreground">Warehouse & Distribution:</span>{" "}
            Online inventory tracking, automated transport alerts, and order management.
          </li>
          <li>
            <span className="font-semibold text-foreground">CRM Modules:</span>{" "}
            Centralized client data and automated communication tools.
          </li>
        </ul>
        <p className="mt-4">
          Our platforms are built using the PHP Laravel web framework and Oracle relational
          databases, deployed on a three-tier architecture to ensure high availability and security.
        </p>
      </>
    ),
  },
  {
    title: "4. User Accounts and Security",
    body: (
      <>
        <p>
          To access specific modules (such as your warehouse dashboards or freight portals), you must
          register for an account.
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-4">
          <li>
            <span className="font-semibold text-foreground">Responsibility:</span>{" "}
            You are responsible for safeguarding your login credentials and for all activities that occur under your account.
          </li>
          <li>
            <span className="font-semibold text-foreground">Notification:</span>{" "}
            You must notify us immediately of any unauthorized use of your account or any other breach of security.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Acceptable Use Policy",
    body: (
      <>
        <p>When using Shipsoft Solutions, you agree not to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Attempt to reverse engineer, decompile, or hack our PHP Laravel application layer or Oracle databases.</li>
          <li>Use the Services to transmit malicious code, viruses, or illegal data.</li>
          <li>Disrupt the integrity or performance of the three-tier architecture that hosts the Services.</li>
          <li>Input fraudulent cargo, freight, or billing information into the ERP or freight portals.</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Data and Privacy",
    body: (
      <p>
        Your use of the Services is also governed by our Privacy Policy, which details how we
        collect, process, and protect your logistics and client data. By using our Services, you
        grant us the right to process your operational data strictly for the purpose of providing and
        improving the ERP and freight management platforms.
      </p>
    ),
  },
  {
    title: "7. Intellectual Property Rights",
    body: (
      <p>
        Shipsoft Solutions retains all right, title, and interest in and to the Services, including
        all proprietary software, databases, user interface designs, and underlying code. You are
        granted a limited, non-exclusive, non-transferable license to use the Services for your
        internal business logistics and supply chain operations.
      </p>
    ),
  },
  {
    title: "8. Limitation of Liability",
    body: (
      <>
        <p>To the maximum extent permitted by law:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Shipsoft Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities.</li>
          <li>We do not guarantee that our real-time cargo tracking or automated transport alerts will be 100% error-free or uninterrupted, as these often rely on third-party carrier data.</li>
          <li>We are not responsible for physical freight delays, loss of goods, or warehousing errors made by you or your third-party logistics providers.</li>
        </ul>
      </>
    ),
  },
  {
    title: "9. Service Availability and Updates",
    body: (
      <p>
        We strive to ensure maximum uptime for our ERP and freight portals. However, we may
        occasionally suspend access to perform maintenance, apply security patches, or upgrade our
        database architecture. We will make reasonable efforts to notify you in advance of planned
        downtime.
      </p>
    ),
  },
  {
    title: "10. Termination",
    body: (
      <p>
        We reserve the right to suspend or terminate your access to the Services at our discretion,
        without notice, if you breach these Terms. Upon termination, your right to use the Services
        will immediately cease, and you must settle any outstanding subscription or licensing fees.
      </p>
    ),
  },
  {
    title: "11. Governing Law and Dispute Resolution",
    body: (
      <p>
        These Terms shall be governed by and construed in accordance with the laws of the Republic of
        Singapore, without regard to its conflict of law principles. Any disputes arising out of or
        relating to these Terms or the Services shall be resolved exclusively in the courts of
        Singapore.
      </p>
    ),
  },
];

const TermsAndConditions = () => (
  <PageShell>
    <PageHero
      eyebrow="LEGAL"
      title="Terms and Conditions"
      subtitle="Terms and Conditions for Shipsoft Solutions — governing your access to and use of our web-based ERP systems, freight portals, and custom digital logistics tools."
    />

    <section className="py-20 lg:py-24 bg-background">
      <div className="container">
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border/50 mb-12 text-sm text-muted-foreground leading-relaxed space-y-3">
            <p>
              <span className="font-semibold text-foreground">Effective Date:</span> 25 July 2026
            </p>
            <p>
              <span className="font-semibold text-foreground">1. Introduction and Agreement.</span>{" "}
              Welcome to Shipsoft (also known as Shipsoft Solutions). These Terms and Conditions
              ("Terms") govern your access to and use of our web-based enterprise resource planning
              (ERP) systems, freight portals, and custom digital logistics tools (collectively, the
              "Services").
            </p>
            <p>
              By accessing or using our Services, you agree to be bound by these Terms. If you are
              using the Services on behalf of an organization, you agree to these Terms on behalf of
              that organization and represent that you have the authority to do so.
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
              <h2 className="text-2xl font-bold leading-tight mb-4 text-foreground">12. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you have any questions or concerns regarding these Terms, please contact us at:
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
            By accessing or using our website, applications, or services, you acknowledge that you
            have read, understood, and agree to these Terms and Conditions.
          </p>
      </div>
    </section>
  </PageShell>
);

export default TermsAndConditions;
