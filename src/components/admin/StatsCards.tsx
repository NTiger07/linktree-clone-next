import { Eye, MousePointerClick, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

export const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="p-6 shadow-card border-border hover:shadow-elegant transition-shadow">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Eye className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total Views</p>
            <p className="text-2xl font-bold text-card-foreground">1,234</p>
          </div>
        </div>
      </Card>

      <Card className="p-6 shadow-card border-border hover:shadow-elegant transition-shadow">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-accent/10 rounded-lg">
            <MousePointerClick className="h-6 w-6 text-accent" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total Clicks</p>
            <p className="text-2xl font-bold text-card-foreground">567</p>
          </div>
        </div>
      </Card>

      <Card className="p-6 shadow-card border-border hover:shadow-elegant transition-shadow">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gradient-accent rounded-lg">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">CTR</p>
            <p className="text-2xl font-bold text-card-foreground">46%</p>
          </div>
        </div>
      </Card>
    </div>
  );
};
