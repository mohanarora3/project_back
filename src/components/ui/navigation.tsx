import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  Building2,
  Calendar,
  Home,
  Settings,
  Star,
  Users,
  Bell,
  Search,
  LogIn,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { LoginModal } from "@/components/auth/login-modal";
import { useState } from "react";

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
  badge?: string;
  isActive?: boolean;
}

const NavItem = ({ to, icon: Icon, label, badge, isActive }: NavItemProps) => (
  <Link to={to}>
    <Button
      variant={isActive ? "default" : "ghost"}
      className={cn(
        "w-full justify-start gap-3 px-3 py-2.5 h-auto font-medium",
        isActive
          ? "bg-primary text-primary-foreground shadow-sm"
          : "text-muted-foreground hover:text-foreground hover:bg-accent",
      )}
    >
      <Icon className="h-4 w-4" />
      <span className="flex-1 text-left">{label}</span>
      {badge && (
        <Badge
          variant={isActive ? "secondary" : "default"}
          className="ml-auto h-5 px-2 text-xs"
        >
          {badge}
        </Badge>
      )}
    </Button>
  </Link>
);

export const Navigation = () => {
  const location = useLocation();
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const navItems = [
    { to: "/", icon: Home, label: "Dashboard" },
    { to: "/customers", icon: Users, label: "Solar Customers", badge: "234" },
    { to: "/reviews", icon: Star, label: "Solar Reviews", badge: "12" },
    { to: "/services", icon: Calendar, label: "Solar Services", badge: "8" },
    { to: "/analytics", icon: BarChart3, label: "Energy Analytics" },
    { to: "/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div className="flex flex-col h-full bg-sidebar border-r border-sidebar-border">
      {/* Header */}
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Building2 className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-sidebar-foreground">
              BizFolio
            </h1>
            <p className="text-xs text-sidebar-foreground/60">
              Solar Panel Services
            </p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="pl-9 bg-sidebar-accent border-sidebar-border focus:border-sidebar-ring"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <NavItem
            key={item.to}
            {...item}
            isActive={location.pathname === item.to}
          />
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border space-y-3">
        {/* Login Button */}
        <Button
          onClick={() => setLoginModalOpen(true)}
          variant="outline"
          className="w-full justify-start gap-2"
        >
          <LogIn className="h-4 w-4" />
          Login / Switch User
        </Button>

        <div className="flex items-center gap-3 p-3 rounded-lg bg-sidebar-accent">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-sm font-medium text-primary">RS</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-sidebar-foreground truncate">
              Raj Singh
            </p>
            <p className="text-xs text-sidebar-foreground/60">Administrator</p>
          </div>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Bell className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal open={loginModalOpen} onOpenChange={setLoginModalOpen} />
    </div>
  );
};
