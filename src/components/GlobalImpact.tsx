
import { Card, CardContent } from "@/components/ui/card";
import { useContent } from "@/hooks/useContent";
import { getIcon } from "@/lib/icons";

export const GlobalImpact = () => {
  const { title, stats } = useContent("global_impact");

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12 text-gray-800">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = getIcon(stat.icon);
            return (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4 bg-blue-100 rounded-full p-3 w-16 h-16 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-800">{stat.value}</h3>
                  <p className="text-gray-600 font-medium">{stat.title}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
