import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, MoreHorizontal, Phone } from "lucide-react";

interface ServiceItem {
  id: string;
  customer: string;
  service: string;
  date: string;
  time: string;
  location: string;
  priority: "low" | "medium" | "high";
  status: "scheduled" | "confirmed" | "in-progress";
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "bg-destructive text-destructive-foreground";
    case "medium":
      return "bg-warning text-warning-foreground";
    case "low":
      return "bg-success text-success-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "confirmed":
      return "bg-success text-success-foreground";
    case "in-progress":
      return "bg-info text-info-foreground";
    case "scheduled":
      return "bg-muted text-muted-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export const UpcomingServices = () => {
  const services: ServiceItem[] = [
    {
      id: "1",
      customer: "TechnoSoft Solutions",
      service: "HVAC Annual Maintenance",
      date: "Today",
      time: "2:00 PM",
      location: "BKC Office, Floor 15",
      priority: "high",
      status: "confirmed",
    },
    {
      id: "2",
      customer: "InfoTech Enterprises",
      service: "Electrical System Check",
      date: "Tomorrow",
      time: "10:00 AM",
      location: "Electronic City Building",
      priority: "medium",
      status: "scheduled",
    },
    {
      id: "3",
      customer: "Green Energy Systems",
      service: "Plumbing Inspection",
      date: "Feb 15",
      time: "9:30 AM",
      location: "HITEC City, 3rd Floor",
      priority: "medium",
      status: "confirmed",
    },
    {
      id: "4",
      customer: "Digital Solutions India",
      service: "Fire Safety System Review",
      date: "Feb 16",
      time: "1:00 PM",
      location: "Cyber City Server Room",
      priority: "high",
      status: "scheduled",
    },
    {
      id: "5",
      customer: "Metro Shopping Centre",
      service: "General Maintenance",
      date: "Feb 18",
      time: "8:00 AM",
      location: "Multiple Mall Locations",
      priority: "low",
      status: "scheduled",
    },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">
          Upcoming Services
        </CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Calendar className="h-5 w-5 text-primary" />
            </div>

            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2">
                <h4 className="font-medium">{service.customer}</h4>
                <Badge
                  variant="secondary"
                  className={`text-xs px-2 py-0 ${getPriorityColor(service.priority)}`}
                >
                  {service.priority}
                </Badge>
                <Badge
                  variant="outline"
                  className={`text-xs px-2 py-0 ${getStatusColor(service.status)}`}
                >
                  {service.status}
                </Badge>
              </div>

              <p className="text-sm text-muted-foreground">{service.service}</p>

              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{service.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{service.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  <span>{service.location}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
