import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, LogIn, UserPlus, ExternalLink, QrCode } from "lucide-react";
import { Link } from "react-router-dom";

export const CustomerPortalAccess = () => {
  const portalUrl = window.location.origin + "/customer-login";

  const copyPortalUrl = () => {
    navigator.clipboard.writeText(portalUrl);
    // You could add a toast notification here
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          <CardTitle className="text-lg font-semibold">
            Customer Portal Access
          </CardTitle>
        </div>
        <Badge variant="outline" className="text-xs">
          Quick Access
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Provide your customers with easy access to their solar service portal
          for viewing installation history and energy performance.
        </p>

        {/* Portal URL */}
        <div className="p-3 bg-muted rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-xs text-muted-foreground mb-1">Portal URL:</p>
              <code className="text-sm font-mono text-foreground break-all">
                {portalUrl}
              </code>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={copyPortalUrl}
              className="ml-2 h-8 w-8 p-0"
            >
              <QrCode className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-3">
          <h4 className="text-sm font-medium">Quick Actions:</h4>

          <div className="grid grid-cols-1 gap-2">
            <Link
              to="/customer-login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-full justify-start gap-2">
                <LogIn className="h-4 w-4" />
                Customer Login Portal
                <ExternalLink className="h-3 w-3 ml-auto" />
              </Button>
            </Link>

            <Link
              to="/customer-login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-full justify-start gap-2">
                <UserPlus className="h-4 w-4" />
                Customer Registration
                <ExternalLink className="h-3 w-3 ml-auto" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Instructions */}
        <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h4 className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">
            For Your Customers:
          </h4>
          <ul className="text-xs text-blue-700 dark:text-blue-200 space-y-1">
            <li>• Share the portal URL for easy access</li>
            <li>• New customers can register directly</li>
            <li>• Existing customers can log in to view their solar data</li>
            <li>• Track installation progress and energy performance</li>
          </ul>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="text-center">
            <div className="text-lg font-semibold text-foreground">127</div>
            <div className="text-xs text-muted-foreground">
              Active Customers
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-foreground">23</div>
            <div className="text-xs text-muted-foreground">This Month</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
