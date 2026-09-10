import Header from "./Header";
import Footer from "./Footer";
import CTA from "./CTA";

interface PageShellProps {
  children: React.ReactNode;
  showCTA?: boolean;
}

const PageShell = ({ children, showCTA = true }: PageShellProps) => (
  <div className="min-h-screen bg-background flex flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    {showCTA && <CTA />}
    <Footer />
  </div>
);

export default PageShell;
