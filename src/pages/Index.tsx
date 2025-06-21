import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { UpcomingServices } from "@/components/dashboard/upcoming-services";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Plus,
  TrendingUp,
  Users,
  Calendar,
  Star,
  AlertTriangle,
  CheckCircle2,
  Clock,
} from "lucide-react";

const QuickActions = () => (
  <Card>
    <CardHeader>
      <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
    </CardHeader>
    <CardContent className="grid grid-cols-2 gap-3">
      <Button className="h-auto p-4 flex-col gap-2">
        <Plus className="h-5 w-5" />
        <span className="text-sm">Add Customer</span>
      </Button>
      <Button variant="outline" className="h-auto p-4 flex-col gap-2">
        <Calendar className="h-5 w-5" />
        <span className="text-sm">Schedule Service</span>
      </Button>
      <Button variant="outline" className="h-auto p-4 flex-col gap-2">
        <Star className="h-5 w-5" />
        <span className="text-sm">Manage Reviews</span>
      </Button>
      <Button variant="outline" className="h-auto p-4 flex-col gap-2">
        <TrendingUp className="h-5 w-5" />
        <span className="text-sm">View Analytics</span>
      </Button>
    </CardContent>
  </Card>
);

const ServiceOverview = () => (
  <Card>
    <CardHeader>
      <CardTitle className="text-lg font-semibold">Service Overview</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-success" />
            Completed Services
          </span>
          <span className="font-medium">76/89</span>
        </div>
        <Progress value={85} className="h-2" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-warning" />
            Pending Services
          </span>
          <span className="font-medium">8/89</span>
        </div>
        <Progress value={10} className="h-2" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            Overdue Services
          </span>
          <span className="font-medium">5/89</span>
        </div>
        <Progress value={6} className="h-2" />
      </div>
    </CardContent>
  </Card>
);

const Index = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back! Here's what's happening with your business today.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="px-3 py-1">
              <span className="w-2 h-2 bg-success rounded-full mr-2"></span>
              All Systems Operational
            </Badge>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add New
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <StatsCards />

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column - 2/3 width */}
          <div className="lg:col-span-2 space-y-6">
            <UpcomingServices />
            <RecentActivity />
          </div>

          {/* Right Column - 1/3 width */}
          <div className="space-y-6">
            <QuickActions />
            <ServiceOverview />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
