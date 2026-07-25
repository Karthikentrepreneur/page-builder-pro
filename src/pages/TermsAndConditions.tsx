import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import { Mail, MapPin, Globe } from "lucide-react";

interface Section {
  title: string;
  body: React.ReactNode;
}

const sections: Section[] = [
  {
    title: "1. About Us",
    body: (
      <p>
        Orange Office Technologies Pvt Ltd (OOT) is a leading Knowledge Process Outsourcing (KPO)
        and IT solutions provider specializing in back-office infrastructure for the global freight
        forwarding, shipping, and third-party logistics (3PL) industries. Headquartered in Chennai,
        India, OOT operates across 12 countries, helping logistics organizations automate workflows,
        streamline operations, and improve efficiency through technology-driven solutions.
      </p>
    ),
  },
  {
    title: "2. Acceptance of Terms",
    body: (
      <>
        <p>By using our website, applications, or services, you confirm that you:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Are at least 18 years of age or are using the services under the supervision of a parent or legal guardian.</li>
          <li>Have the legal authority to enter into these Terms.</li>
          <li>Will comply with all applicable laws and regulations.</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Use of Our Services",
    body: (
      <>
        <p>You agree to use our services only for lawful business purposes.</p>
        <p className="mt-4">You agree not to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Violate any applicable laws or regulations.</li>
          <li>Attempt to gain unauthorized access to our systems.</li>
          <li>Distribute malware, viruses, or harmful software.</li>
          <li>Interfere with the security or performance of our services.</li>
          <li>Reverse engineer, copy, modify, or exploit our software except where permitted by law.</li>
          <li>Use our services to transmit illegal, fraudulent, or abusive content.</li>
        </ul>
        <p className="mt-4">
          We reserve the right to suspend or terminate access for any user who violates these Terms.
        </p>
      </>
    ),
  },
  {
    title: "4. User Accounts",
    body: (
      <>
        <p>Some services require registration.</p>
        <p className="mt-4">You are responsible for:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Providing accurate information.</li>
          <li>Maintaining the confidentiality of your login credentials.</li>
          <li>All activities performed under your account.</li>
          <li>Promptly notifying us of any unauthorized access or security breach.</li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Intellectual Property",
    body: (
      <>
        <p>All content available on our website and services, including but not limited to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Software</li>
          <li>Source code</li>
          <li>Designs</li>
          <li>Logos</li>
          <li>Graphics</li>
          <li>Documentation</li>
          <li>Text</li>
          <li>Images</li>
          <li>Videos</li>
          <li>Trademarks</li>
        </ul>
        <p className="mt-4">
          is owned by or licensed to Orange Office Technologies Pvt Ltd and is protected under
          applicable intellectual property laws.
        </p>
        <p className="mt-4">
          You may not reproduce, distribute, modify, or commercially exploit any content without our
          prior written permission.
        </p>
      </>
    ),
  },
  {
    title: "6. Client Data",
    body: (
      <>
        <p>Clients retain ownership of the data they provide to us.</p>
        <p className="mt-4">
          OOT processes client data solely for the purpose of delivering agreed services and in
          accordance with applicable privacy and data protection laws.
        </p>
      </>
    ),
  },
  {
    title: "7. Third-Party Services",
    body: (
      <>
        <p>Our website or applications may integrate with third-party platforms or services.</p>
        <p className="mt-4">We are not responsible for:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Third-party content.</li>
          <li>Third-party privacy practices.</li>
          <li>Service interruptions caused by third parties.</li>
        </ul>
        <p className="mt-4">
          Your use of third-party services is governed by their respective terms and policies.
        </p>
      </>
    ),
  },
  {
    title: "8. Service Availability",
    body: (
      <>
        <p>We strive to provide reliable and uninterrupted services.</p>
        <p className="mt-4">However, we do not guarantee that:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Services will always be available.</li>
          <li>Services will be error-free.</li>
          <li>All defects will be corrected immediately.</li>
        </ul>
        <p className="mt-4">
          Scheduled maintenance, upgrades, or unforeseen technical issues may temporarily affect
          availability.
        </p>
      </>
    ),
  },
  {
    title: "9. Limitation of Liability",
    body: (
      <>
        <p>
          To the fullest extent permitted by law, Orange Office Technologies Pvt Ltd shall not be
          liable for any indirect, incidental, special, consequential, or punitive damages arising
          from:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Use or inability to use our services.</li>
          <li>Data loss.</li>
          <li>Business interruption.</li>
          <li>Unauthorized access.</li>
          <li>Software defects.</li>
          <li>Third-party services.</li>
        </ul>
        <p className="mt-4">
          Our total liability shall not exceed the amount paid by the customer for the applicable
          services during the preceding twelve (12) months, unless otherwise required by law.
        </p>
      </>
    ),
  },
  {
    title: "10. Indemnification",
    body: (
      <>
        <p>
          You agree to indemnify and hold harmless Orange Office Technologies Pvt Ltd, its directors,
          employees, affiliates, and partners from any claims, liabilities, damages, losses, or
          expenses arising from:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Your misuse of our services.</li>
          <li>Violation of these Terms.</li>
          <li>Violation of applicable laws.</li>
          <li>Infringement of any third-party rights.</li>
        </ul>
      </>
    ),
  },
  {
    title: "11. Confidentiality",
    body: (
      <p>
        Where applicable, both parties agree to protect confidential information exchanged during the
        course of business and not disclose such information without prior written consent, except as
        required by law.
      </p>
    ),
  },
  {
    title: "12. Termination",
    body: (
      <>
        <p>We reserve the right to suspend or terminate your access to our services immediately if:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>You violate these Terms.</li>
          <li>Fraudulent or illegal activity is detected.</li>
          <li>Continued access poses a security risk.</li>
          <li>Required by applicable law.</li>
        </ul>
        <p className="mt-4">
          Termination does not affect any rights or obligations accrued before termination.
        </p>
      </>
    ),
  },
  {
    title: "13. Disclaimer",
    body: (
      <>
        <p>Our services are provided on an "as is" and "as available" basis.</p>
        <p className="mt-4">
          To the fullest extent permitted by law, OOT disclaims all warranties, express or implied,
          including warranties of merchantability, fitness for a particular purpose, and
          non-infringement.
        </p>
      </>
    ),
  },
  {
    title: "14. Governing Law",
    body: (
      <>
        <p>
          These Terms shall be governed by and interpreted in accordance with the laws of India.
        </p>
        <p className="mt-4">
          Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the
          competent courts located in Chennai, Tamil Nadu, India.
        </p>
      </>
    ),
  },
  {
    title: "15. Changes to These Terms",
    body: (
      <>
        <p>We may revise these Terms from time to time.</p>
        <p className="mt-4">
          Any updates will be published on this page with a revised Effective Date. Continued use of
          our services after such changes constitutes acceptance of the updated Terms.
        </p>
      </>
    ),
  },
];

const TermsAndConditions = () => (
  <PageShell>
    <PageHero
      eyebrow="LEGAL"
      title="Terms and Conditions"
      subtitle="These Terms govern your access to and use of Orange Office Technologies Pvt Ltd's website, software applications, products, and services."
    />

    <section className="py-20 lg:py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border/50 mb-12 text-sm text-muted-foreground leading-relaxed space-y-3">
            <p>
              <span className="font-semibold text-foreground">Effective Date:</span> [DD Month YYYY]
            </p>
            <p>
              Welcome to Orange Office Technologies Pvt Ltd ("OOT", "we", "our", or "us"). These
              Terms and Conditions ("Terms") govern your access to and use of our website, software
              applications, products, and services.
            </p>
            <p>
              By accessing or using our website or services, you agree to be bound by these Terms. If
              you do not agree with any part of these Terms, please discontinue use of our website and
              services.
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
              <h2 className="text-2xl font-bold leading-tight mb-4 text-foreground">16. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you have any questions regarding these Terms and Conditions, please contact us:
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
                    href="mailto:legal@orangeot.com"
                    className="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4 text-primary shrink-0" />
                    legal@orangeot.com
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
      </div>
    </section>
  </PageShell>
);

export default TermsAndConditions;
