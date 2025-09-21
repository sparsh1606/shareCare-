import { Flame, Calendar, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const StatsCard = () => {
  return (
    <div className="statsout grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Donation Streak Card */}
      <Card className="profilecard statscard bg-gradient-card p-6 border-sharecare-border shadow-card">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="p-3 bg-gradient-primary rounded-full mr-4">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground">Donation Streak</p>
              <p className="text-sm text-muted-foreground">Active since joining</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-primary">47</p>
            <p className="text-sm text-muted-foreground">days</p>
          </div>
        </div>
      </Card>

      {/* Member Since Card */}
      <Card className="profilecard statscard bg-gradient-card p-6 border-sharecare-border shadow-card">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="p-3 bg-secondary/20 rounded-full mr-4">
              <Calendar className="w-5 h-5 " />
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground">Member Since</p>
              <p className="text-sm text-muted-foreground">Joined ShareCare</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xl font-semibold text-foreground">Aug 2024</p>
            <p className="text-sm text-muted-foreground">2 months</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StatsCard;