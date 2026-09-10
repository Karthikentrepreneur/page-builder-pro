import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useContent } from "@/hooks/useContent";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  desc: string;
  link: string;
}

export const IndiaTeamSection: React.FC = () => {
  const { title = "Meet Our Leadership", subtitle = "The visionary leadership behind Shipsoft Solutions", members = [] } =
    useContent("home_team");

  const defaultMembers: TeamMember[] = [
    {
      name: "Mr. Sudhir KU",
      role: "Director",
      image: "/lovable-uploads/dcab3f93-8fa0-480c-b028-e34b3d358821.png",
      desc: "35+ years of experience in freight forwarding and back-office solutions, driving global growth and operational excellence.",
      link: "/our-team",
    },
    {
      name: "Mr. Bennet Rajesh",
      role: "Chief Technology Officer",
      image: "/bennetSir.png",
      desc: "27+ years of enterprise software and cloud innovation, driving digital transformation and scalable architecture.",
      link: "/our-team#cto",
    },
  ];

  const teamList: TeamMember[] = members.length > 0 ? members : defaultMembers;

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-800 font-semibold px-4 py-1 text-xs uppercase tracking-wider mb-3">
            Visionary Leadership
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {subtitle}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamList.map((member, idx) => (
            <Card
              key={idx}
              className="group overflow-hidden border border-slate-200/80 rounded-3xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col sm:flex-row"
            >
              {/* Image */}
              <div className="sm:w-2/5 h-64 sm:h-auto relative overflow-hidden bg-slate-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-slate-950/40 to-transparent sm:from-transparent sm:to-slate-950/20" />
              </div>

              {/* Details */}
              <CardContent className="sm:w-3/5 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-1">
                    <Award className="h-4 w-4" />
                    <span>Executive Leadership</span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-slate-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium text-sm mb-4">
                    {member.role}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {member.desc}
                  </p>
                </div>

                <Button variant="outline" className="w-fit rounded-xl group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors" asChild>
                  <Link to={member.link} className="flex items-center gap-2 text-xs font-semibold">
                    <span>View Full Profile</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View full team */}
        <div className="mt-12 text-center">
          <Button variant="ghost" className="text-blue-600 hover:text-blue-700 font-semibold" asChild>
            <Link to="/our-team" className="flex items-center gap-2">
              <span>Read more about our leadership team & philosophy</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
