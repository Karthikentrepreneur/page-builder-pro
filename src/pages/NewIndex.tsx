import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Hero } from "@/components/Hero";
import { GlobalImpact } from "@/components/GlobalImpact";
import { useContent } from "@/hooks/useContent";
import { getIcon } from "@/lib/icons";
import { SeoHead } from "@/components/SeoHead";

const Index = () => {
  const missionVision = useContent("home_mission_vision");
  const services = useContent("home_services");
  const team = useContent("home_team");
  const about = useContent("home_about");
  // Intersection Observer for scroll animations
  const observerRef = useRef(null);
  // Add state for parallax effect
  const [scrollY, setScrollY] = useState(0);
  const isMobile = useIsMobile();

  // Handle scroll for parallax effects
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.pathname.startsWith("/india")) {
      try {
        localStorage.setItem("user_is_india", "true");
      } catch (e) {
        void e;
      }
    }
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set up scroll animations
  useEffect(() => {
    // Set up intersection observer for animation on scroll
    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    });

    // Get all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      observerRef.current?.observe(el);
    });

    // Ensure scroll to top on page load
    window.scrollTo(0, 0);
    return () => {
      if (observerRef.current) {
        animatedElements.forEach(el => {
          observerRef.current?.unobserve(el);
        });
      }
    };
  }, []);
  return <div className="min-h-screen flex flex-col">
      <SeoHead page="home" />
      <Header />

      {/* Hero Section */}
      <Hero />
      
      {/* Mission & Vision Section with Enhanced Design */}
      <section className="bg-gradient-to-b from-white to-gray-50 relative overflow-hidden py-16">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-300/10 to-sky-300/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-300/10 to-cyan-300/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-gradient bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent">{missionVision.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {missionVision.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <Card className="border-none rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 animate-on-scroll group hover:-translate-y-2 overflow-hidden bg-white">
              <CardContent className="p-0 relative">
                <div className="h-56 md:h-64 overflow-hidden">
                  <img src={missionVision.mission.image} alt="Our Mission" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

                </div>
                <div className="relative">
                  <div className="bg-white p-8 relative z-10">
                    <div className="absolute -top-8 left-8 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg">
                      {(() => { const Icon = getIcon(missionVision.mission.icon); return <Icon className="h-8 w-8 text-white" />; })()}
                    </div>
                    <h3 className="font-heading font-bold text-2xl mb-4 text-gray-900 mt-6">{missionVision.mission.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {missionVision.mission.text}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 animate-on-scroll group hover:-translate-y-2 overflow-hidden bg-white">
              <CardContent className="p-0 relative">
                <div className="h-56 md:h-64 overflow-hidden">
                  <img alt="Our Vision" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={missionVision.vision.image} />

                </div>
                <div className="relative">
                  <div className="bg-white p-8 relative z-10">
                    <div className="absolute -top-8 left-8 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center shadow-lg">
                      {(() => { const Icon = getIcon(missionVision.vision.icon); return <Icon className="h-8 w-8 text-white" />; })()}
                    </div>
                    <h3 className="font-heading font-bold text-2xl mb-4 text-gray-900 mt-6">{missionVision.vision.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {missionVision.vision.text}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Services Section with Enhanced Cards */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden bg-slate-50">
        
        


        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-gradient bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent">{services.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.items.map((service, index) => {
              const Icon = getIcon(service.icon);
              const colors = ["from-blue-500 to-cyan-400", "from-primary to-blue-400", "from-green-500 to-emerald-400", "from-purple-500 to-violet-400", "from-pink-500 to-rose-400", "from-cyan-500 to-blue-400"];
              return <Card key={index} className="group border-none rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-on-scroll overflow-hidden bg-white" style={{
              animationDelay: `${index * 100}ms`
            }}>
                <div className="h-44 relative overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

                  <div className="absolute top-0 right-0 m-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors[index % colors.length]} flex items-center justify-center shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 bg-slate-50">
                  <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-gray-700 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link to={service.link} className="inline-flex items-center text-primary font-medium group">
                    <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                      Learn more
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>;
            })}
          </div>
        </div>
      </section>

     <section className="py-20 bg-gradient-to-br from-blue-50 via-sky-50 to-white relative overflow-hidden">
  {/* Decorative Background */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/10 to-blue-200/20 blur-[120px]" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-200/10 to-primary/20 blur-[100px]" />
  </div>

  <div className="relative z-10 container mx-auto px-4">
    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="font-heading font-extrabold text-4xl md:text-5xl bg-gradient-to-r from-primary via-blue-500 to-primary text-transparent bg-clip-text">
        {team.title}
      </h2>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base md:text-lg">
        {team.subtitle}
      </p>
    </div>

    {/* Team Cards */}
    <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
      {team.members.map((member, index) => <div key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-8 flex flex-col items-center text-center">
          <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden shadow-xl border-4 border-white bg-white/60 mb-5">
            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{member.name}</h3>
          <p className="text-primary font-semibold text-lg mb-3">{member.role}</p>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            {member.desc}
          </p>
          <a href={member.link} className="inline-block bg-gradient-to-r from-primary to-blue-500 text-white text-xs font-semibold px-5 py-2 rounded-full shadow hover:from-blue-600 hover:to-blue-600 transition-all duration-300 hover:shadow-lg">
            Know More
          </a>
        </div>)}
    </div>
  </div>
    </section>

      {/* About Us Section with Enhanced Layout */}
      <section className="py-20 bg-white relative overflow-hidden">
        <svg className="absolute top-0 left-0 w-full text-blue-50" style={{
        transform: "translateY(-1px)"
      }} fill="currentColor" viewBox="0 0 1440 40">
          <path d="M0,0L40,4C80,8,160,16,240,18.7C320,21,400,19,480,13.3C560,8,640,0,720,0C800,0,880,8,960,12C1040,16,1120,16,1200,12C1280,8,1360,0,1400,-4L1440,-8L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
        </svg>
        
        <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-gradient-to-br from-blue-200/10 to-sky-300/10 blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-on-scroll">
              <h2 className="font-heading font-bold md:text-4xl mb-6 text-gradient bg-gradient-to-r from-primary via-blue-600 to-sky-500 bg-clip-text text-transparent text-2xl lg:text-3xl">{about.title}</h2>
              <p className="text-gray-600 mb-6 text-lg">{about.paragraphs[0]}</p>
              {about.paragraphs.slice(1).map((p, i) => (
                <p key={i} className="text-gray-600 mb-8">{p}</p>
              ))}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {about.badges.map((badge, i) => {
                  const Icon = getIcon(badge.icon);
                  return (
                    <div key={i} className="flex items-start">
                      <div className={`mr-4 rounded-full p-3 ${i % 2 === 0 ? "bg-blue-100" : "bg-sky-100"}`}>
                        <Icon className={`h-6 w-6 ${i % 2 === 0 ? "text-blue-600" : "text-sky-600"}`} />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">{badge.title}</h4>
                        <p className="text-gray-600 text-sm">{badge.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl border-0">
                <Link to={about.cta.link} className="flex items-center gap-2">
                  {about.cta.text}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 animate-on-scroll">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img alt="Shipsoft Solutions Building" className="w-full h-full object-cover" src={about.image} />
                  
                </div>
                
                {/* Floating card */}
                <div className="absolute -bottom-10 -right-10 bg-white rounded-xl shadow-xl p-6 max-w-xs animate-float glass-card">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <p className="font-medium">{about.floatingCard.title}</p>
                  </div>
                  <p className="text-gray-600 text-sm">{about.floatingCard.desc}</p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-300/30 to-cyan-300/20 rounded-full blur-xl animate-pulse-slow"></div>
                <div className="absolute -bottom-16 -left-6 w-20 h-20 bg-gradient-to-br from-sky-300/30 to-blue-300/20 rounded-full blur-xl animate-float"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact Section - Added before the footer */}
      <GlobalImpact />

      {/* Enhanced Stats Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white relative overflow-hidden py-0">
        
        {/* Footer */}
        <Footer />
      </section>
    </div>;
};
export default Index;
