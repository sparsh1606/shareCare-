import { Package, Users, BookOpen, Heart, Utensils, Home } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ResourcesCard = () => {
  const resources = [
    {
      icon: BookOpen,
      category: "Education",
      count: 3,
      recent: "School supplies to Govt. School, Ghaziabad",
      date: "15 Sep 2024",
      beneficiaries: "240 students",
      location: "Ghaziabad, UP",
      color: "text-emerald-400"
    },
    {
      icon: Utensils,
      category: "Food",
      count: 2,
      recent: "Meal kits for 50 families in Dwarka",
      date: "12 Sep 2024",
      beneficiaries: "200 people",
      location: "Dwarka, Delhi",
      color: "text-orange-400"
    },
    {
      icon: Home,
      category: "Clothing",
      count: 4,
      recent: "Winter clothes for children in Noida",
      date: "8 Sep 2024",
      beneficiaries: "150 children",
      location: "Noida, UP",
      color: "text-blue-400"
    },
    {
      icon: Heart,
      category: "Healthcare",
      count: 1,
      recent: "Medical supplies to local clinic",
      date: "5 Sep 2024",
      beneficiaries: "500+ patients",
      location: "Gurugram, HR",
      color: "text-pink-400"
    }
  ];

  const totalDonations = resources.reduce((sum, resource) => sum + resource.count, 0);

  return (
    <Card className="profilecard resourcecard bg-gradient-card p-10 border-sharecare-border shadow-card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground flex items-center">
          <Package className="w-5 h-5 mr-2 text-primary" />
          Resources Donated
        </h2>
        <Badge className="bg-gradient-primary text-white px-3 py-1">
          {totalDonations} Total
        </Badge>
      </div>

      <div className="space-y-4">
        {resources.map((resource, index) => {
          const IconComponent = resource.icon;
          return (
            <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors border border-muted/20">
              <div className={`p-2 rounded-full bg-background/50`}>
                <IconComponent className={`w-5 h-5 ${resource.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-foreground">{resource.category}</p>
                  <span className="text-lg font-bold text-primary">{resource.count}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2 leading-relaxed">{resource.recent}</p>
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                  <span className="bg-background/50 px-2 py-1 rounded-full">📅 {resource.date}</span>
                  <span className="bg-background/50 px-2 py-1 rounded-full">👥 {resource.beneficiaries}</span>
                  <span className="bg-background/50 px-2 py-1 rounded-full">📍 {resource.location}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-sharecare-border">
        <div className="flex items-center">
          <Users className="w-4 h-4 text-primary mr-2" />
          <span className="text-sm text-muted-foreground">
            2,847 lives touched across Delhi NCR
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ResourcesCard;