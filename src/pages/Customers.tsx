import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Search,
  Plus,
  Filter,
  MoreHorizontal,
  Phone,
  Mail,
  MapPin,
  Building2,
  Star,
  Calendar,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Customer {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  location: string;
  status: "active" | "inactive" | "pending";
  lastService: string;
  totalServices: number;
  rating: number;
  avatar?: string;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-success text-success-foreground";
    case "inactive":
      return "bg-muted text-muted-foreground";
    case "pending":
      return "bg-warning text-warning-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const CustomerCard = ({ customer }: { customer: Customer }) => (
  <Card className="hover:shadow-md transition-shadow">
    <CardContent className="p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={customer.avatar} />
            <AvatarFallback className="bg-primary/10 text-primary">
              {customer.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">{customer.name}</h3>
              <Badge
                variant="secondary"
                className={`text-xs px-2 py-0 ${getStatusColor(customer.status)}`}
              >
                {customer.status}
              </Badge>
            </div>

            <div className="flex items-center gap-1 text-muted-foreground">
              <Building2 className="h-3 w-3" />
              <span className="text-sm">{customer.company}</span>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Mail className="h-3 w-3" />
                <span>{customer.email}</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                <span>{customer.phone}</span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span>{customer.location}</span>
            </div>
          </div>
        </div>

        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3 text-muted-foreground" />
            <span className="text-muted-foreground">Last service:</span>
            <span className="font-medium">{customer.lastService}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-muted-foreground">Services:</span>
            <span className="font-medium">{customer.totalServices}</span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{customer.rating}</span>
        </div>
      </div>
    </CardContent>
  </Card>
);

const Customers = () => {
  const customers: Customer[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      company: "Tech Corp",
      email: "sarah@techcorp.com",
      phone: "(555) 123-4567",
      location: "New York, NY",
      status: "active",
      lastService: "Jan 15, 2024",
      totalServices: 12,
      rating: 4.8,
    },
    {
      id: "2",
      name: "Mike Davis",
      company: "ABC Company",
      email: "mike@abccompany.com",
      phone: "(555) 234-5678",
      location: "Los Angeles, CA",
      status: "active",
      lastService: "Dec 28, 2023",
      totalServices: 8,
      rating: 4.9,
    },
    {
      id: "3",
      name: "Lisa Chen",
      company: "Green Solutions",
      email: "lisa@greensolutions.com",
      phone: "(555) 345-6789",
      location: "San Francisco, CA",
      status: "pending",
      lastService: "Nov 20, 2023",
      totalServices: 5,
      rating: 4.6,
    },
    {
      id: "4",
      name: "David Wilson",
      company: "Digital Dynamics",
      email: "david@digitaldynamics.com",
      phone: "(555) 456-7890",
      location: "Chicago, IL",
      status: "active",
      lastService: "Jan 10, 2024",
      totalServices: 15,
      rating: 4.7,
    },
    {
      id: "5",
      name: "Emma Thompson",
      company: "Metro Mall",
      email: "emma@metromall.com",
      phone: "(555) 567-8901",
      location: "Miami, FL",
      status: "inactive",
      lastService: "Oct 5, 2023",
      totalServices: 3,
      rating: 4.2,
    },
    {
      id: "6",
      name: "James Rodriguez",
      company: "Innovation Hub",
      email: "james@innovationhub.com",
      phone: "(555) 678-9012",
      location: "Austin, TX",
      status: "active",
      lastService: "Jan 8, 2024",
      totalServices: 22,
      rating: 4.9,
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Customers</h1>
            <p className="text-muted-foreground">
              Manage your customer database and track service history.
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Customer
          </Button>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search customers..." className="pl-9" />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <div className="flex items-center gap-2">
                <Badge variant="outline">All ({customers.length})</Badge>
                <Badge variant="outline">
                  Active (
                  {customers.filter((c) => c.status === "active").length})
                </Badge>
                <Badge variant="outline">
                  Pending (
                  {customers.filter((c) => c.status === "pending").length})
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Customer Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {customers.map((customer) => (
            <CustomerCard key={customer.id} customer={customer} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Customers;
