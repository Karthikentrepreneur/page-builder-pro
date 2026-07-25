import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import { Mail, MapPin, Globe } from "lucide-react";

interface Section {
  title: string;
  body: React.ReactNode;
}

const sections: Section[] = [
  {
    title: "1. Information We Collect",
    body: (
      <>
        <p>Depending on how you interact with us, we may collect the following information:</p>

        <h4 className="font-bold text-foreground mt-6 mb-2">Personal Information</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Full name</li>
          <li>Company name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Job title</li>
          <li>Business address</li>
          <li>Country or region</li>
        </ul>

        <h4 className="font-bold text-foreground mt-6 mb-2">Account Information</h4>
        <p>If you register for our products or services, we may collect:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Username</li>
          <li>Password (stored securely in encrypted form)</li>
          <li>Profile information</li>
          <li>Login activity</li>
        </ul>

        <h4 className="font-bold text-foreground mt-6 mb-2">Technical Information</h4>
        <p>We may automatically collect:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Device information</li>
          <li>Operating system</li>
          <li>Pages visited</li>
          <li>Date and time of access</li>
          <li>Cookies and similar technologies</li>
        </ul>

        <h4 className="font-bold text-foreground mt-6 mb-2">Business Information</h4>
        <p>
          For customers using our logistics and business solutions, we may process operational data
          necessary to provide our services, including shipment-related, workflow, and business
          process information as instructed by our customers.
        </p>
      </>
    ),
  },
  {
    title: "2. How We Use Your Information",
    body: (
      <>
        <p>We use your information to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Provide and maintain our services</li>
          <li>Deliver KPO and IT solutions</li>
          <li>Create and manage user accounts</li>
          <li>Respond to inquiries and customer support requests</li>
          <li>Improve our products and services</li>
          <li>Analyze website usage and performance</li>
          <li>Send important service notifications</li>
          <li>Send newsletters and marketing communications (where permitted)</li>
          <li>Protect against fraud and unauthorized access</li>
          <li>Comply with applicable legal obligations</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Cookies and Tracking Technologies",
    body: (
      <>
        <p>Our website may use cookies and similar technologies to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Remember user preferences</li>
          <li>Improve website functionality</li>
          <li>Analyze website traffic</li>
          <li>Enhance user experience</li>
        </ul>
        <p className="mt-4">
          You may disable cookies through your browser settings, although certain website features
          may not function properly.
        </p>
      </>
    ),
  },
  {
    title: "4. How We Share Information",
    body: (
      <>
        <p>We do not sell your personal information.</p>
        <p className="mt-4">We may share information with:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Trusted technology service providers</li>
          <li>Cloud hosting providers</li>
          <li>Analytics providers</li>
          <li>Payment processors (if applicable)</li>
          <li>Professional advisors</li>
          <li>Government authorities when required by law</li>
        </ul>
        <p className="mt-4">
          All third-party service providers are expected to maintain appropriate confidentiality and
          security standards.
        </p>
      </>
    ),
  },
  {
    title: "5. International Data Transfers",
    body: (
      <p>
        As OOT operates across multiple countries, your information may be processed or stored in
        countries other than your own. We implement appropriate safeguards to protect personal
        information during international data transfers in accordance with applicable laws.
      </p>
    ),
  },
  {
    title: "6. Data Security",
    body: (
      <>
        <p>
          We implement appropriate technical, administrative, and organizational measures to protect
          your personal information against unauthorized access, disclosure, alteration, or
          destruction.
        </p>
        <p className="mt-4">
          While we strive to use commercially acceptable methods to protect your information, no
          method of transmission over the Internet or electronic storage is completely secure.
        </p>
      </>
    ),
  },
  {
    title: "7. Data Retention",
    body: (
      <>
        <p>We retain personal information only for as long as necessary to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Provide our services</li>
          <li>Fulfill contractual obligations</li>
          <li>Comply with legal requirements</li>
          <li>Resolve disputes</li>
          <li>Enforce our agreements</li>
        </ul>
        <p className="mt-4">
          When information is no longer required, it will be securely deleted or anonymized where
          appropriate.
        </p>
      </>
    ),
  },
  {
    title: "8. Your Privacy Rights",
    body: (
      <>
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Restrict or object to certain processing</li>
          <li>Withdraw consent where applicable</li>
          <li>Request a copy of your personal information</li>
        </ul>
        <p className="mt-4">To exercise these rights, please contact us using the information below.</p>
      </>
    ),
  },
  {
    title: "9. Third-Party Services",
    body: (
      <p>
        Our website or applications may contain links to third-party websites or integrate
        third-party services. We are not responsible for the privacy practices or content of those
        third parties. We encourage users to review their privacy policies before providing personal
        information.
      </p>
    ),
  },
  {
    title: "10. Children's Privacy",
    body: (
      <p>
        Our services are intended for businesses and professionals and are not directed toward
        individuals under the age of 18. We do not knowingly collect personal information from
        children.
      </p>
    ),
  },
  {
    title: "11. Changes to This Privacy Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our services, legal
        requirements, or business practices. The updated version will be posted on this page with a
        revised Effective Date.
      </p>
    ),
  },
];

const PrivacyPolicy = () => (
  <PageShell>
    <PageHero
      eyebrow="LEGAL"
      title="Privacy Policy"
      subtitle="Orange Office Technologies Pvt Ltd (OOT) is committed to protecting the privacy and security of the personal information of our clients, partners, website visitors, and users of our services."
    />

    <section className="py-20 lg:py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border/50 mb-12 text-sm text-muted-foreground leading-relaxed space-y-3">
            <p>
              <span className="font-semibold text-foreground">Effective Date:</span> [DD Month YYYY]
            </p>
            <p>
              Orange Office Technologies Pvt Ltd ("OOT", "we", "our", or "us") is a leading Knowledge
              Process Outsourcing (KPO) and IT solutions provider specializing in back-office
              infrastructure for the global freight forwarding, shipping, and third-party logistics
              (3PL) industries. Headquartered in Chennai, India, OOT operates across 12 countries,
              helping logistics organizations automate workflows, improve operational efficiency, and
              scale their business.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, disclose, and protect your information
              when you visit our website, use our applications, or interact with our services.
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
              <h2 className="text-2xl font-bold leading-tight mb-4 text-foreground">12. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you have any questions regarding this Privacy Policy or how we handle your personal
                information, please contact us:
              </p>
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border/50">
                <div className="font-bold text-foreground mb-4">Orange Office Technologies Pvt Ltd</div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Chennai, Tamil Nadu, India</span>
                  </div>
                  <a
                    href="https://www.orangeot.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <Globe className="h-4 w-4 text-primary shrink-0" />
                    www.orangeot.com
                  </a>
                  <a
                    href="mailto:privacy@orangeot.com"
                    className="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4 text-primary shrink-0" />
                    privacy@orangeot.com
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
      </div>
    </section>
  </PageShell>
);

export default PrivacyPolicy;
