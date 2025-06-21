import { Button } from "@/components/ui/button";
import { Users, LogIn, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

export const CustomerPortalSection = () => {
  return (
    <div className="px-4 py-3 border-t border-sidebar-border">
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-medium text-sidebar-foreground/80 uppercase tracking-wide">
          <Users className="h-3 w-3" />
          Customer Portal
        </div>

        <div className="space-y-1">
          <Link to="/customer-login" target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start gap-2 h-8 text-xs font-normal text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <LogIn className="h-3 w-3" />
              Customer Login
            </Button>
          </Link>

          <Link to="/customer-login" target="_blank" rel="noopener noreferrer">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start gap-2 h-8 text-xs font-normal text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <UserPlus className="h-3 w-3" />
              Customer Signup
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
