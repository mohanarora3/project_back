import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Star,
  Calendar,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: React.ElementType;
  iconColor: string;
}

const StatCard = ({
  title,
  value,
  change,
  trend,
  icon: Icon,
  iconColor,
}: StatCardProps) => (
  <Card className="relative overflow-hidden">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">
        {title}
      </CardTitle>
      <div className={cn("p-2 rounded-lg", iconColor)}>
        <Icon className="h-4 w-4 text-white" />
      </div>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <div className="flex items-center gap-1 mt-1">
        {trend === "up" ? (
          <ArrowUpRight className="h-3 w-3 text-success" />
        ) : (
          <ArrowDownRight className="h-3 w-3 text-destructive" />
        )}
        <span
          className={cn(
            "text-xs font-medium",
            trend === "up" ? "text-success" : "text-destructive",
          )}
        >
          {change}
        </span>
        <span className="text-xs text-muted-foreground">from last month</span>
      </div>
    </CardContent>
  </Card>
);

export const StatsCards = () => {
  const stats = [
    {
      title: "Total Customers",
      value: "2,345",
      change: "+12.5%",
      trend: "up" as const,
      icon: Users,
      iconColor: "bg-blue-500",
    },
    {
      title: "Active Services",
      value: "89",
      change: "+8.2%",
      trend: "up" as const,
      icon: Calendar,
      iconColor: "bg-green-500",
    },
    {
      title: "Reviews This Month",
      value: "156",
      change: "+23.1%",
      trend: "up" as const,
      icon: Star,
      iconColor: "bg-yellow-500",
    },
    {
      title: "Revenue Growth",
      value: "$45,678",
      change: "+15.3%",
      trend: "up" as const,
      icon: TrendingUp,
      iconColor: "bg-purple-500",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
};
