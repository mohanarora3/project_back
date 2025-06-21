import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Star,
  UserPlus,
  Settings,
  MoreHorizontal,
} from "lucide-react";

interface ActivityItem {
  id: string;
  type: "customer" | "review" | "service" | "system";
  title: string;
  description: string;
  time: string;
  user?: {
    name: string;
    avatar?: string;
    initials: string;
  };
  status?: "pending" | "completed" | "cancelled";
}

const getActivityIcon = (type: string) => {
  switch (type) {
    case "customer":
      return UserPlus;
    case "review":
      return Star;
    case "service":
      return Calendar;
    case "system":
      return Settings;
    default:
      return Calendar;
  }
};

const getStatusColor = (status?: string) => {
  switch (status) {
    case "completed":
      return "bg-success text-success-foreground";
    case "pending":
      return "bg-warning text-warning-foreground";
    case "cancelled":
      return "bg-destructive text-destructive-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export const RecentActivity = () => {
  const activities: ActivityItem[] = [
    {
      id: "1",
      type: "customer",
      title: "New customer registered",
      description: "Priya Sharma signed up for premium service",
      time: "2 minutes ago",
      user: {
        name: "Priya Sharma",
        initials: "PS",
      },
      status: "completed",
    },
    {
      id: "2",
      type: "review",
      title: "5-star review received",
      description: "Excellent service quality and professional team",
      time: "1 hour ago",
      user: {
        name: "Arjun Patel",
        initials: "AP",
      },
      status: "completed",
    },
    {
      id: "3",
      type: "service",
      title: "Annual service scheduled",
      description: "HVAC maintenance for TechnoSoft Solutions building",
      time: "3 hours ago",
      status: "pending",
    },
    {
      id: "4",
      type: "customer",
      title: "Customer data updated",
      description: "Contact information updated for InfoTech Enterprises",
      time: "5 hours ago",
      user: {
        name: "Kavitha Reddy",
        initials: "KR",
      },
      status: "completed",
    },
    {
      id: "5",
      type: "service",
      title: "Service completed",
      description: "Quarterly maintenance at Business Park Office",
      time: "1 day ago",
      status: "completed",
    },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
        <Button variant="ghost" size="sm">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => {
          const Icon = getActivityIcon(activity.type);
          return (
            <div
              key={activity.id}
              className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
                <Icon className="h-4 w-4 text-muted-foreground" />
              </div>

              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium">{activity.title}</p>
                  {activity.status && (
                    <Badge
                      variant="secondary"
                      className={`text-xs px-2 py-0 ${getStatusColor(activity.status)}`}
                    >
                      {activity.status}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {activity.description}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  {activity.user && (
                    <>
                      <Avatar className="h-5 w-5">
                        <AvatarImage src={activity.user.avatar} />
                        <AvatarFallback className="text-xs">
                          {activity.user.initials}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">
                        {activity.user.name}
                      </span>
                      <span className="text-xs text-muted-foreground">•</span>
                    </>
                  )}
                  <span className="text-xs text-muted-foreground">
                    {activity.time}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};
